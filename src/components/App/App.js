import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <div
        className={
          location.pathname === '/' ? 'app__header' : ''
        }
      >
        <Header />
      </div>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={Main}
          />
          <Route
            path="/movies"
            component={Movies}
          //  Страница фильмы
          // Нажатие на фильмы
          />
          {/* <Route
            path="/saved-movies"
            component={SavedMovies}
          // Страница сохраненные фильмы
          // Нажатие на сохраненные фильмы
          /> */}
          {/* <Route
            path="/profile"
            component={Profile}
          // Страница с профилем пользователя
          // Нажатие на аккаунт
          /> */}
          {/* <Route
            path="/signin"
            component={Login}
          /* Страница авторизации */
          /* Нажатие на авторизация
          /> */}
          {/* <Route
            path="/signup"
            component={Register}
        //  Страница регистрации
        //    Нажатие на регистрация
          /> */}
          {/* <Route
            path="*"
            component={NotFound}
          /> */}
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
