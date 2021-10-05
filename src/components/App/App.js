import React, { useEffect, useState } from 'react';
import {
  Switch, Route, useHistory,
  useLocation, Redirect
} from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../../pages/Movies';
import SavedMovies from '../../pages/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import InfoToolTip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as mainApi from '../../utils/MainApi';
import * as beatfilmApi from '../../utils/MoviesApi';
import {
  handleFilter, handleDurationFilter, handleIdFilter,
  handleMediaFilter
} from '../../utils/filter';
import useMediaQuery from '../../hooks/useMediaQuery';

function App() {
  // Глобальные стейты
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReqSending, setIsReqSending] = useState(false);

  // Стейты фильмов
  const [movies, setMovies] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredDurationMovies, setFilteredDurationMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [savedDurationMovies, setSavedDurationMovies] = useState([]);

  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [isMoviesLoadError, setIsMoviesLoadError] = useState(false);

  // Стейты попапа, всплывающего окна, прелоадера
  const [isTooltipOpened, setIsTooltipOpened] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState({});
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  // Стейты ошибки обновления профиля
  const [isProfileChangeError, setIsProfileChangeError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [changeProfileBtn, setChangeProfileBtn] = useState(false);
  const [isSearchRun, setIsSearchRun] = useState(false);

  // Стейты карточки
  const [savedMoviesId, setSavedMoviesId] = useState([]);

  const history = useHistory();
  const location = useLocation();

  // Обработчик открытия поп-ап меню
  const handleMenuClick = () =>
    setIsMenuActive(!isMenuActive);

  // Обработчик закрытия поп-апов кликом на esc
  const handleCloseClick = () => {
    setIsMenuActive(false);
    setIsTooltipOpened(false);
  }

  // Обработчик закрытия попапа кликом вправо
  const handleRightClick = () =>
    setIsMenuActive(false);

  // Медиа фильтр
  const media = useMediaQuery();

  useEffect(() => {
    media.callback();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const handleMoreClick = () =>
    media.setDisplayMovies(prevState => prevState + media.moreDisplayMovies);

  const visibleMovies = handleMediaFilter(filteredMovies, media.displayMovies);
  const visibleDurationMovies = handleMediaFilter(filteredDurationMovies, media.displayMovies);
  const visibleSavedMovies = handleMediaFilter(filteredSavedMovies, media.displayMovies);
  const visibleDurationSavedMovies = handleMediaFilter(savedDurationMovies, media.displayMovies);

  // Обработчик поиска фильмов
  const handleMoviesSearch = value => {
    setIsMoviesLoadError(false);
    if (movies.length > 0) {
      setIsSearchRun(true);
      const result = handleFilter(movies, value.search);
      const resultWithDuration = handleDurationFilter(result);
      if (result.length > 0)
        setIsMoviesLoadError(false);
      else if (resultWithDuration.length > 0) {
        setIsMoviesLoadError(false);
      } else {
        setIsMoviesLoadError(404);
      }
      setFilteredMovies(result);
      setFilteredDurationMovies(resultWithDuration);
    } else {
      setIsReqSending(true);
      setIsSearchRun(true);
      setIsMoviesLoading(true);
      beatfilmApi.getMovies()
        .then(res => {
          setMovies(res);
          localStorage.setItem('movies', JSON.stringify(res))
          return res;
        })
        .then(data => {
          const result = handleFilter(data, value.search);
          const resultWithDuration = handleDurationFilter(result);
          if (result.length > 0)
            setIsMoviesLoadError(false);
          else if (resultWithDuration > 0)
            setIsMoviesLoadError(false);
          else {
            setIsMoviesLoadError(404);
          }
          setFilteredMovies(result);
          setFilteredDurationMovies(resultWithDuration);
        })
        .catch(err => {
          console.log(err);
          setIsMoviesLoadError(true);
          setIsSearchRun(false);
        })
        .finally(() => {
          setIsMoviesLoading(false);
          setIsReqSending(false);
        });
    }
  }

  // Обработчик поиска сохраненных фильмов
  const handleSavedMoviesSearch = value => {
    setIsMoviesLoadError(false);
    if (savedMovies.length > 0) {
      setIsSearchRun(true);
      const result = handleFilter(savedMovies, value.search);
      const resultWithDuration = handleDurationFilter(result);
      if (result.length > 0)
        setIsMoviesLoadError(false);
      else if (resultWithDuration.length > 0)
        setIsMoviesLoadError(false);
      else {
        setIsMoviesLoadError(404);
      }
      setFilteredSavedMovies(result);
      setSavedDurationMovies(resultWithDuration);
    } else {
      setIsMoviesLoadError(404);
    }
  }

  // Обработчики лайка/удаления фильма
  const handleLikeMovie = movieData => {
    setIsReqSending(true);
    mainApi.addSavedMovie(movieData)
      .then(res => {
        const newSavedMovies = [res, ...savedMovies];
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
        setSavedMovies(prevState => [res, ...prevState]);
        setSavedMoviesId([movieData.movieId, ...savedMoviesId]);
        setSavedDurationMovies(prevState => [res, ...prevState]);
        setFilteredSavedMovies(prevState => [res, ...prevState]);
      })
      .catch(err => {
        console.log(err);
        setIsMoviesLoadError(true);
      })
      .finally(() => setIsReqSending(false));
  }

  const handleDeleteMovie = movieData => {
    setIsReqSending(true);
    mainApi.deleteSavedMovie(movieData._id)
      .then(() => {
        const result = handleIdFilter(savedMovies, movieData._id);
        const resultWithDuration = handleIdFilter(savedDurationMovies, movieData._id);
        localStorage.setItem('savedMovies', JSON.stringify(result));
        setSavedMovies(result);
        setFilteredMovies(result);
        setFilteredSavedMovies(result);
        setSavedMoviesId(savedMoviesId.filter(id => id !== movieData.movieId));
        setSavedDurationMovies(resultWithDuration);
      })
      .catch(err => console.log(err))
      .finally(() => setIsReqSending(false));
  }

  // Обработчик ошибки валидации поиска
  const handleMoviesError = () => {
    setTooltipStatus({
      text: 'Нужно ввести ключевое слово',
      iconType: 'fail'
    });
    setIsTooltipOpened(true);
  }

  // Обработчик сабмита регистрации
  const handleRegister = (name, email, password) => {
    setIsReqSending(true);
    mainApi.register(name, email, password)
      .then(() => {
        setTooltipStatus({
          text: 'Вы успешно зарегистрировались!',
          iconType: 'success'
        });
        setIsTooltipOpened(true);
        handleLogin(email, password);
      })
      .catch(err => {
        if (err === 'Ошибка: 400') {
          setTooltipStatus({
            text: 'Пользователь с таким email уже существует, или не передано одно из полей!',
            iconType: 'fail'
          });
          setIsTooltipOpened(true);
        } else {
          setTooltipStatus({
            text: 'При регистрации пользователя произошла ошибка.',
            iconType: 'fail'
          });
          setIsTooltipOpened(true);
        }
      })
      .finally(() => setIsReqSending(false));
  }

  // Обработчик сабмита логина
  const handleLogin = (email, password) => {
    setIsReqSending(true);
    setIsAuthChecking(true);
    mainApi.login(email, password)
      .then(() => {
        setIsLoggedIn(true);
        history.push('/movies');
        mainApi.getUserInfo()
          .then(userData =>
            setCurrentUser(userData)
          )
          .catch(err => {
            localStorage.removeItem('jwt');
            localStorage.removeItem('movies');
            localStorage.removeItem('savedMovies');
            history.push('/');
            setIsLoggedIn(false);
            console.log(err);
          })
          .finally(() => {
            setIsAuthChecking(false);
            setIsReqSending(false);
        });
        setIsMoviesLoading(true);
        setIsSearchRun(true);
        mainApi.getMovies()
          .then(res => {
            setSavedMovies(res);
            localStorage.setItem('savedMovies', JSON.stringify(res));
            setSavedMoviesId(res.map(movie => movie.movieId));
            setSavedDurationMovies(handleDurationFilter(res.reverse()));
          })
          .catch(err => {
            console.log(err);
            if (err === 'Ошибка: 404')
              setIsMoviesLoadError(404);
            else
              setIsMoviesLoadError(true);
          })
          .finally(() => {
            setIsReqSending(false);
            setIsMoviesLoading(false);
          });
      })
      .catch(err => {
        if (err === 'Ошибка: 401') {
          setTooltipStatus({
            text: 'Вы ввели неправильный логин или пароль.',
            iconType: 'fail'
          });
          setIsTooltipOpened(true);
        } else {
          setTooltipStatus({
            text: 'При авторизации произошла ошибка.',
            iconType: 'fail'
          });
          setIsTooltipOpened(true);
        }
      })
      .finally(() => {
        setIsReqSending(false);
        setIsAuthChecking(false);
      });
  }

  // Обработчик выхода
  const handleLogout = () => {
    setIsReqSending(true);
    setMovies([]);
    setSavedMovies([]);
    setFilteredSavedMovies([]);
    mainApi.logout()
      .then(() => {
        setIsLoggedIn(false);
        setFilteredMovies([]);
        setSavedMoviesId([]);
        setFilteredDurationMovies([]);
        setSavedDurationMovies([]);
        localStorage.removeItem('jwt');
        localStorage.removeItem('savedMovies');
        localStorage.removeItem('movies');
        history.push('/');
        cleanAllErrors();
        setCurrentUser({});
      })
      .catch(err => console.log(err))
      .finally(() => setIsReqSending(false));
  }

  // Обработчик изменения профиля
  const handleChangeInfo = (name, email) => {
    setIsReqSending(true);
    mainApi.editProfile(name, email)
      .then(res => {
        setCurrentUser(res);
        setTooltipStatus({
          text: 'Успешно!',
          iconType: 'success'
        });
        setIsTooltipOpened(true);
        setIsProfileChangeError(false);
        setErrorMessage(null);
      })
      .catch(err => {
        console.log(err);
        if (err === 'Ошибка: 409') {
          setErrorMessage('При обновлении профиля произошла ошибка.');
          setChangeProfileBtn(true);
          setIsProfileChangeError(true);
        }
      })
      .finally(() => setIsReqSending(false));
  }

  // Обработчик сброса ошибок
  const cleanAllErrors = () => {
    setIsMoviesLoading(false);
    setIsMoviesLoadError(false);
    setIsProfileChangeError(false);
    setErrorMessage('');
    setChangeProfileBtn(false);
    setIsMenuActive(false);
    setIsAuthChecking(false);
    setIsReqSending(false);
    setIsSearchRun(false);
  }

  // Отрисовываем фильтрованные чекбоксом фильмы
  useEffect(() => {
    if (isFilterOn && location.pathname === '/movies') {
      if (movies.length > 0) {
        const result = handleDurationFilter(filteredMovies);
        if (result.length > 0)
          setIsMoviesLoadError(false);
        else if (isSearchRun) {
          setIsMoviesLoadError(404);
        }
        setFilteredDurationMovies(result);
      } else if (!isSearchRun)
        setIsMoviesLoadError(false);
    }
    if (isFilterOn && location.pathname === '/saved-movies') {
      const result = handleDurationFilter(filteredSavedMovies);
      console.log(result)
      if (savedMovies.length > 0) {
        if (result.length > 0)
          setIsMoviesLoadError(false);
        else
          setIsMoviesLoadError(404);
        setSavedDurationMovies(result);
      } else if (!isSearchRun)
        setIsMoviesLoadError(false);
    }
    if (!isFilterOn) {
      setSavedMovies(savedMovies);
      setMovies(movies);
      setFilteredMovies(filteredMovies);
      if (filteredMovies.length > 0)
        setIsMoviesLoadError(false);
      if (filteredSavedMovies.length > 0)
        setIsMoviesLoadError(false);
    }
  }, [
    isFilterOn, location.pathname, isSearchRun,
    movies.length, savedMovies, savedMovies.length,
    filteredSavedMovies, filteredMovies, movies
  ]);

  // Обнуляем результаты поиска, ошибки, чекбокс
  useEffect(() => {
    setFilteredMovies(filteredMovies);
    setIsMenuActive(false);
    setIsAuthChecking(false);
  }, [
    savedMovies, location.pathname, filteredMovies,
  ]);

  useEffect(() => {
    setIsFilterOn(false);
    setIsSearchRun(false);
    setIsMoviesLoadError(false);
    setFilteredMovies([]);
    setFilteredDurationMovies([]);
    setFilteredSavedMovies(savedMovies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Проверка токена
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const moviesFromLocal = JSON.parse(localStorage.getItem('movies'));
    const savedMoviesFromLocal = JSON.parse(localStorage.getItem('savedMovies'));
    if (jwt) {
      setIsLoggedIn(true);
      setIsAuthChecking(true);
      if (moviesFromLocal)
        setMovies(moviesFromLocal);
      if (savedMoviesFromLocal) {
        setSavedMovies(savedMoviesFromLocal.reverse());
        setFilteredSavedMovies(savedMoviesFromLocal.reverse());
        setSavedMoviesId(savedMoviesFromLocal.map(movie => movie.movieId));
        setSavedDurationMovies(handleDurationFilter(savedMoviesFromLocal.reverse()));
      }
      mainApi.getUserInfo()
        .then(userData =>
          setCurrentUser(userData)
        )
        .catch(err => {
          localStorage.removeItem('jwt');
          localStorage.removeItem('movies');
          localStorage.removeItem('savedMovies');
          history.push('/');
          setIsLoggedIn(false);
          cleanAllErrors();
          setMovies([]);
          setSavedMovies([]);
          setSavedDurationMovies([]);
          setFilteredSavedMovies([]);
          setSavedMoviesId([]);
          setCurrentUser({});
          console.log(err);
        })
        .finally(() => setIsAuthChecking(false))
      if (!savedMoviesFromLocal) {
        setIsMoviesLoading(true);
        setIsReqSending(true);
        mainApi.getMovies()
          .then(moviesData => {
            setSavedMoviesId(moviesData.map(movie => movie.movieId));
            setSavedMovies(moviesData.reverse());
            setFilteredSavedMovies(moviesData.reverse());
            localStorage.setItem('savedMovies', JSON.stringify(moviesData.reverse()));
          })
          .catch(err => {
            console.log(err);
            if (err === 'Ошибка: 404')
              setIsMoviesLoadError(false);
            else
              setIsMoviesLoadError(true);
          })
          .finally(() => {
            setIsReqSending(false);
            setIsMoviesLoading(false);
          });
      }
    } else {
      localStorage.removeItem('jwt');
      localStorage.removeItem('movies');
      localStorage.removeItem('savedMovies');
      history.push('/');
      setIsLoggedIn(false);
      cleanAllErrors();
      setMovies([]);
      setSavedMovies([]);
      setSavedDurationMovies([]);
      setFilteredSavedMovies([]);
      setSavedMoviesId([]);
      setCurrentUser({});
    }
  }, [history]);

  // Слушатель: закрытие кликом на клавишу
  useEffect(() => {
    const handleEscClose = evt => {
      if (evt.key === 'Escape')
        handleCloseClick();
      if (evt.key === 'ArrowRight')
        handleRightClick();
    }
    window.addEventListener('keydown', handleEscClose);
  }, []);

  // Слушатель: закрытие кликом на оверлэй
  useEffect(() => {
    const handleOverlayClose = evt => {
      if (evt.target.classList.contains('burger_active'))
        handleCloseClick();
      if (evt.target.classList.contains('tooltip_opened'))
        handleCloseClick();
    }
    window.addEventListener('click', handleOverlayClose);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
          >
            <div className="app__header">
              <BurgerMenu
                isActive={isMenuActive}
                handleCloseBurgerClick={handleCloseClick}
              />
              <Header
                handleMenuClick={handleMenuClick}
                isActive={isMenuActive}
                isLoggedIn={isLoggedIn}
              />
            </div>
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            path="/movies"
            isLoggedIn={isLoggedIn}
            isChecking={isAuthChecking}
          >
            <div className="app__wrapper">
              <BurgerMenu
                isActive={isMenuActive}
                handleCloseBurgerClick={handleCloseClick}
              />
              <Header
                handleMenuClick={handleMenuClick}
                isActive={isMenuActive}
              />
              <Movies
                onSearch={handleMoviesSearch}
                onError={handleMoviesError}
                isMoviesLoading={isMoviesLoading}
                isMoviesLoadError={isMoviesLoadError}
                visibleMovies={
                  isFilterOn ? visibleDurationMovies : visibleMovies
                }
                movies={
                  isFilterOn ? filteredDurationMovies : filteredMovies
                }
                savedMovies={
                  isFilterOn ? savedDurationMovies : filteredSavedMovies
                }
                isFilterOn={setIsFilterOn}
                handleMoreClick={handleMoreClick}
                handleLikeClick={handleLikeMovie}
                handleDeleteClick={handleDeleteMovie}
                savedMoviesId={savedMoviesId}
                isReqSending={isReqSending}
              />
              <Footer />
            </div>
          </ProtectedRoute>
          <ProtectedRoute
            path="/saved-movies"
            isLoggedIn={isLoggedIn}
            isChecking={isAuthChecking}
          >
            <div className="app__wrapper">
              <BurgerMenu
                isActive={isMenuActive}
                handleCloseBurgerClick={handleCloseClick}
              />
              <Header
                handleMenuClick={handleMenuClick}
                isActive={isMenuActive}
              />
              <SavedMovies
                onSearch={handleSavedMoviesSearch}
                onError={handleMoviesError}
                isMoviesLoading={isMoviesLoading}
                isMoviesLoadError={isMoviesLoadError}
                visibleMovies={
                  isFilterOn ? visibleDurationSavedMovies : visibleSavedMovies
                }
                movies={
                  isFilterOn ? filteredDurationMovies : filteredMovies
                }
                savedMovies={
                  isFilterOn ? savedDurationMovies : filteredSavedMovies
                }
                isFilterOn={setIsFilterOn}
                handleDeleteClick={handleDeleteMovie}
                handleLikeClick={handleLikeMovie}
                handleMoreClick={handleMoreClick}
                savedMoviesId={savedMoviesId}
                isReqSending={isReqSending}
              />
              <Footer />
            </div>
          </ProtectedRoute>
          <Route
            path="/signin"
          >
            {
              isLoggedIn ?
                <Redirect
                  to="/"
                /> :
                <Login
                  handleLogin={handleLogin}
                  isReqSending={isReqSending}
                />
            }
          </Route>
          <Route
            path="/signup"
          >
            {
              isLoggedIn ?
                <Redirect
                  to="/"
                /> :
                <Register
                  handleRegister={handleRegister}
                  isReqSending={isReqSending}
                />
            }
          </Route>
          <ProtectedRoute
            path="/profile"
            isLoggedIn={isLoggedIn}
            isChecking={isAuthChecking}
          >
            <BurgerMenu
              isActive={isMenuActive}
              handleCloseBurgerClick={handleCloseClick}
            />
            <Header
              handleMenuClick={handleMenuClick}
              isActive={isMenuActive}
            />
            <Profile
              isProfileChangeError={isProfileChangeError}
              handleChangeInfo={handleChangeInfo}
              handleLogout={handleLogout}
              errorMessage={errorMessage}
              change={changeProfileBtn}
              setChange={setChangeProfileBtn}
              isReqSending={isReqSending}
            />
          </ProtectedRoute>
          <Route
            path="*"
            component={NotFound}
          />
        </Switch>
        <InfoToolTip
          isOpen={isTooltipOpened}
          status={tooltipStatus}
          onClose={handleCloseClick}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
