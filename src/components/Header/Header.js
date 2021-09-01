import React from 'react';
import { Link, Route, useLocation, useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/profile_icon.svg';
import menuIcon from '../../images/burger_icon.svg';
import closeIcon from '../../images/close_icon.svg';

function Header() {
  const location = useLocation();
  const history = useHistory();

  const handleProfileClick = () => {
    history.push('/profile');
  }

  const handleLoginClick = () => {
    history.push('/signin');
  }

  return (
    <header
      className={
        location.pathname === '/' ? 'header header_landing' : 'header'
      }
    >
      <Link
        to="/"
        rel="noopener"
        className="header__logo"
      >
        <img
          src={logo}
          className="header__logo"
          alt="Лого MoviesExplorer"
        />
      </Link>
      <Route
        exact
        path="/"
      >
        <nav className="header__auth">
          <Link
            to="/signup"
            className="header__register"
          >
            Регистрация
          </Link>
          <button
            className="header__login"
            onClick={handleLoginClick}
          >
            Войти
          </button>
        </nav>
      </Route>
      <Route
        exact
        path="/movies"
      >
        <nav className="header__nav">
          <div className="header__nav-left">
            <Link
              to="/movies"
              className="header__link"
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className="header__link"
            >
              Сохранённые фильмы
            </Link>
          </div>
          <button
            className="header__profile-btn"
            onClick={handleProfileClick}
          >
            <img
              src={profileIcon}
              alt="Иконка профиля"
              className="header__profile-icon"
            />
            Аккаунт
          </button>
        </nav>
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
