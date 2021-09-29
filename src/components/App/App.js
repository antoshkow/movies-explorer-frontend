import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
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
  handleFilter, handleDurationFilter, handleIdFilter
} from '../../utils/filter';
import useMediaQuery from '../../hooks/useMediaQuery';

function App() {
  // Глобальные стейты
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  // Стейты карточки
  const [savedMoviesId, setSavedMoviesId] = useState([]);

  const history = useHistory();
  const location = useLocation();

  // Обработчик открытия поп-ап меню
  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  }

  // Обработчик закрытия поп-апов кликом на esc
  const handleCloseClick = () => {
    setIsMenuActive(false);
    setIsTooltipOpened(false);
  }

  // Обработчик закрытия попапа кликом вправо
  const handleRightClick = () => {
    setIsMenuActive(false);
  }

  // Медиа фильтр
  const media = useMediaQuery();

  useEffect(() => {
    media.callback();
  }, [location.pathname])

  const handleMoreClick = () => {
    media.setDisplayMovies(prevState => prevState + media.moreDisplayMovies);
  }

  const visibleMovies = filteredMovies.slice(0, media.displayMovies);
  const visibleDurationMovies = filteredDurationMovies.slice(0, media.displayMovies);
  const visibleSavedMovies = savedMovies.slice(0, media.displayMovies);
  const visibleDurationSavedMovies = savedDurationMovies.slice(0, media.displayMovies);

  // Обработчик поиска фильмов
  const handleMoviesSearch = value => {
    if (movies.length > 0) {
      const result = handleFilter(movies, value.search);
      if (result.length > 0)
        setIsMoviesLoadError(false);
      else
        setIsMoviesLoadError(404);
      setFilteredMovies(result);
    } else {
      beatfilmApi.getMovies()
        .then(res => {
          setMovies(res);
          localStorage.setItem('movies', JSON.stringify(res))
          return res;
        })
        .then(data => {
          const result = handleFilter(data, value.search);
          if (result.length > 0)
            setIsMoviesLoadError(false);
          else
            setIsMoviesLoadError(404);
          setFilteredMovies(result);
          if (isFilterOn) {
            const resultWithDuration = handleDurationFilter(result);
            if (resultWithDuration.length > 0)
              setIsMoviesLoadError(false);
            else
              setIsMoviesLoadError(404);
            setFilteredDurationMovies(resultWithDuration);
          }
        })
        .catch(err => {
          console.log(err);
          setIsMoviesLoadError(true);
        })
        .finally(() => setIsMoviesLoading(false));
    }
  }

  // Обработчик поиска сохраненных фильмов
  const handleSavedMoviesSearch = value => {
    setIsMoviesLoadError(false);
    if (savedMovies.length > 0) {
      const result = handleFilter(savedMovies, value.search);
      if (result.length > 0)
        setIsMoviesLoadError(false);
      else
        setIsMoviesLoadError(404);
      setFilteredSavedMovies(result);
    } else {
      setIsMoviesLoading(true);
      mainApi.getMovies()
        .then(res => {
          setSavedMovies(res);
          localStorage.setItem('savedMovies', JSON.stringify(res));
          const result = handleFilter(savedMovies, value.search);
          if (result.length > 0)
            setIsMoviesLoadError(false);
          else
            setIsMoviesLoadError(404);
          setFilteredSavedMovies(result);
        })
        .catch(err => {
          console.log(err);
          setIsMoviesLoadError(true);
        });
    }
  }

  // Обработчики лайка/удаления фильма
  const handleLikeMovie = (movieData) => {
      mainApi.addSavedMovie(movieData)
      .then(res => {
        const newSavedMovies = [...savedMovies, res];
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
        setSavedMovies(prevState => [...prevState, res]);
        setSavedMoviesId([...savedMoviesId, movieData.movieId]);
      })
      .catch(err => {
        console.log(err);
        setIsMoviesLoadError(true);
      });
  }

  const handleDeleteMovie = (movieData) => {
    mainApi.deleteSavedMovie(movieData._id)
      .then(res => {
        const result = handleIdFilter(savedMovies, movieData._id);
        setSavedMovies(result);
        localStorage.setItem('savedMovies', JSON.stringify(result));
      })
      .catch(err => console.log(err));
  }

  // Обработчик ошибки валидации поиска
  const handleMoviesError = () => {
    setIsTooltipOpened(true);
    setTooltipStatus({
      text: 'Нужно ввести ключевое слово',
      iconType: 'fail'
    });
  }

  // Обработчик сабмита регистрации
  const handleRegister = (name, email, password) => {
    mainApi.register(name, email, password)
      .then(res => {
        setTooltipStatus({
          text: 'Вы успешно зарегистрировались!',
          iconType: 'success'
        });
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
      });
  }

  // Обработчик сабмита логина
  const handleLogin = (email, password) => {
    mainApi.login(email, password)
      .then(res => {
        setIsLoggedIn(true);
        history.push('/movies');
        mainApi.getMovies()
          .then(res => {
            setSavedMovies(res);
            localStorage.setItem('savedMovies', JSON.stringify(res));
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        if (err === 'Ошибка: 401') {
          setIsTooltipOpened(true);
          setTooltipStatus({
            text: 'Вы ввели неправильный логин или пароль.',
            iconType: 'fail'
          });
        } else {
          setIsTooltipOpened(true);
          setTooltipStatus({
            text: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
            iconType: 'fail'
          });
        }
      });
  }

  // Обработчик выхода
  const handleLogout = () => {
    mainApi.logout()
      .then(res => {
        setIsLoggedIn(false);
        localStorage.removeItem('jwt');
        localStorage.removeItem('savedMovies');
        localStorage.removeItem('movies');
        setMovies([]);
        setFilteredMovies([]);
        setSavedMovies([]);
        setFilteredDurationMovies([]);
        setSavedDurationMovies([]);
        history.push('/');
      });
  }

  // Обработчик изменения профиля
  const handleChangeInfo = (name, email) => {
    mainApi.editProfile(name, email)
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => {
        if (err.name === 'TypeError') {
          setErrorMessage('При обновлении профиля произошла ошибка.');
          setChangeProfileBtn(true);
          setIsProfileChangeError(true);
        }
      })
  }

  // Обработчик сброса ошибок
  const cleanAllErrors = () => {
    setIsMoviesLoading(false);
    setIsMoviesLoadError(false);
    setIsProfileChangeError(false);
    setErrorMessage('');
    setChangeProfileBtn(false);
    setIsTooltipOpened(false);
    setTooltipStatus({});
    setIsMenuActive(false);
    setIsAuthChecking(false);
  }

  // Получаем массив сохраненных фильмов
  useEffect(() => {
    mainApi.getMovies()
      .then(res => {
        localStorage.setItem('savedMovies', JSON.stringify(res));
        setSavedMovies(res);
      })
      .catch(err => console.log(err));
  }, []);

  // Отрисовываем фильтрованные чекбоксом фильмы
  useEffect(() => {
    if (isFilterOn && location.pathname === '/movies') {
      if (movies.length > 0) {
        const result = handleDurationFilter(filteredMovies);
        if (result.length > 0)
          setIsMoviesLoadError(false);
        else
          setIsMoviesLoadError(404);
        setFilteredDurationMovies(result);
      } else
        setIsMoviesLoadError(404);
    }
    if (isFilterOn && location.pathname === '/saved-movies') {
      if (filteredSavedMovies === []) {
        const result = handleDurationFilter(filteredSavedMovies);
        if (result.length > 0)
          setIsMoviesLoadError(false);
        else
          setIsMoviesLoadError(404);
        setSavedDurationMovies(result);
      } else {
        const result = handleDurationFilter(filteredSavedMovies);
        if (result.length > 0)
          setIsMoviesLoadError(false);
        else
          setIsMoviesLoadError(404);
        setSavedDurationMovies(result);
      }
    }
  }, [isFilterOn, filteredMovies, filteredSavedMovies, location.pathname, movies.length]);

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

  // Проверка токена
  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          setFilteredSavedMovies(savedMovies);
          cleanAllErrors();
          setSavedMoviesId(moviesData.map(movie => movie.movieId))
          setIsFilterOn(false);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [isLoggedIn, savedMovies, location.pathname])

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const movies = localStorage.getItem('movies');
    const savedMovies = localStorage.getItem('savedMovies');
    if (jwt) {
      setIsAuthChecking(true);
      if (movies) setMovies(JSON.parse(movies));
      if (savedMovies) setSavedMovies(JSON.parse(savedMovies));
      mainApi.getUserInfo()
        .then(res => {
          setIsLoggedIn(true);
        })
        .catch(() => {
          localStorage.removeItem('jwt');
          localStorage.removeItem('movies');
          localStorage.removeItem('savedMovies');
          history.push('/');
          setIsLoggedIn(false);
        })
        .finally(() => {
          setIsAuthChecking(false);
        })
    } else {
      setIsAuthChecking(false);
      history.push('/');
      setIsLoggedIn(false);
    }
  }, [history]);

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
                filteredSavedMovies={filteredSavedMovies}
                isFilterOn={setIsFilterOn}
                handleDeleteClick={handleDeleteMovie}
                handleLikeClick={handleLikeMovie}
                handleMoreClick={handleMoreClick}
                savedMoviesId={savedMoviesId}
              />
              <Footer />
            </div>
          </ProtectedRoute>
          <Route
            path="/signin"
          >
            <Login
              handleLogin={handleLogin}
            />
          </Route>
          <Route
            path="/signup"
          >
            <Register
              handleRegister={handleRegister}
            />
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
