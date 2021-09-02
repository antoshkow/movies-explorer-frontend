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
  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
        >
          <div className="app__header">
            <Header />
          </div>
          <Main />
          <Footer />
        </Route>
        <Route
          path="/movies"
        >
          <div>
            <Header />
          </div>
          <Movies />
          <Footer />
        </Route>
        {/* <Route
            path="/saved-movies"
            component={SavedMovies}
          // Страница сохраненные фильмы
          // Нажатие на сохраненные фильмы
          /> */}
        <Route
          path="/signin"
          component={Login}
        />
        <Route
          path="/signup"
          component={Register}
        />
          {/* <Route
            path="/profile"
            component={Profile}
          // Страница с профилем пользователя
          // Нажатие на аккаунт
          /> */}
        <Route
          path="*"
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

export default App;
