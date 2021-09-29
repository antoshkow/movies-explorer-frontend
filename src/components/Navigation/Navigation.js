import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import menuIcon from '../../images/burger_icon.svg';
import './Navigation.css';
import NavigationLink from '../NavigationLink/NavigationLink';
import NavigationButton from '../NavigationButton/NavigationButton';

function Navigation({ handleMenuClick, isActive }) {

  const history = useHistory();
  const location = useLocation();

  const handleProfileClick = () => {
    history.push('/profile');
  }

  return (
    <nav className="navigation">
      <div className="navigation__left">
        <NavigationLink
          linkTo="movies"
          linkText="Фильмы"
        />
        <NavigationLink
          linkTo="/saved-movies"
          linkText="Сохранённые фильмы"
        />
      </div>
      <div className="navigation__right">
        <NavigationButton
          handleClick={handleProfileClick}
        />
      </div>
      <button
        type="button"
        onClick={handleMenuClick}
        className={
          isActive ? 'navigation__burger navigation__burger_active' : 'navigation__burger'
        }
      >
        <img
          className={
            location.pathname === '/' ?
              `navigation__img navigation__img_landing` : 'navigation__img'
          }
          src={menuIcon}
          alt="Иконка взаимодействия с меню"
        />
      </button>
    </nav>
  );
}

export default Navigation;
