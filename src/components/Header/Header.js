import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Navigation from '../Navigation/Navigation';

function Header() {
  const location = useLocation();

  return (
    <header
      className={
        location.pathname === '/' ? 'header header_landing' : 'header'
      }
    >
      <Logo />
      <Route
        exact
        path="/"
      >
        <AuthNavigation />
      </Route>
      <Route
        exact
        path="/movies"
      >
        <Navigation />
      </Route>
      {/* <div className='header__auth'>
        <Route exact path="/">
          <p className="header__email">Email</p>
          <Link
            to="/sign-in"
            className="header__logout"
          >
            Выйти
          </Link>
          <button
            className="header__burger"
            type="button"
          >
            <img
              className="header__img"
              src={isMenuOpened ? closeIcon : menuIcon}
              alt="Иконка взаимодействия с меню"
            />
          </button>
        </Route>
        <Route exact path="/sign-in">
          <Link
            to="/sign-up"
            className="header__link"
          >
            Регистрация
          </Link>
        </Route>
        <Route exact path="/sign-up">
          <Link
            to="/sign-in"
            className="header__link"
          >
            Войти
          </Link>
        </Route>
      </div> */}
    </header>
  );
}

export default Header;
