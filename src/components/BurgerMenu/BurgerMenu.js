import React from 'react';
import { useHistory } from 'react-router-dom';
import closeIcon from '../../images/close_icon.svg';
import './BurgerMenu.css';
import NavigationLink from '../NavigationLink/NavigationLink';
import NavigationButton from '../NavigationButton/NavigationButton';

function BurgerMenu({ handleCloseBurgerClick, isActive }) {

  const history = useHistory();

  const handleProfileClick = () => {
    history.push('/profile');
  }

  return (
    <section
      className={isActive ? 'burger burger_active' : 'burger'}
    >
      <div
        className={isActive ? 'burger__menu burger__menu_active' : 'burger__menu'}
      >
        <button
          type="button"
          className="burger__close"
          onClick={handleCloseBurgerClick}
        >
          <img
            src={closeIcon}
            alt="Иконка закрытия меню"
            className="burger__close-icon"
          />
        </button>
        <nav className="burger__links">
          <NavigationLink
            linkTo="/"
            linkText="Главная"
          />
          <NavigationLink
            linkTo="/movies"
            linkText="Фильмы"
          />
          <NavigationLink
            linkTo="/saved-movies"
            linkText="Сохранённые фильмы"
          />
        </nav>
        <NavigationButton
          handleClick={handleProfileClick}
        />
      </div>
    </section>
  );
}

export default BurgerMenu;
