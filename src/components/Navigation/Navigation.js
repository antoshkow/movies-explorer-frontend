import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import profileIcon from '../../images/profile_icon.svg';
import './Navigation.css';

function Navigation() {
  const history = useHistory();

  const handleProfileClick = () => {
    history.push('/profile');
  }

  return (
    <nav className="navigation">
      <div className="navigation__left">
        <NavLink
          to="/movies"
          className="navigation__link"
          activeClassName="navigation__link_active"
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="navigation__link"
          activeClassName="navigation__link_active"
        >
          Сохранённые фильмы
        </NavLink>
      </div>
      <button
        type="button"
        className="navigation__profile-btn"
        onClick={handleProfileClick}
      >
        <img
          src={profileIcon}
          alt="Иконка профиля"
          className="navigation__profile-icon"
        />
        Аккаунт
      </button>
    </nav>
  );
}

export default Navigation;
