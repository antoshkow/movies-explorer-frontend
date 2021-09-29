import React from 'react';
import profileIcon from '../../images/profile_icon.svg';
import './NavigationButton.css';

function NavigationButton({ handleClick }) {

  return (
    <button
      type="button"
      className="profile-btn"
      onClick={handleClick}
    >
      <img
        src={profileIcon}
        alt="Иконка профиля"
        className="profile-btn__icon"
      />
      Аккаунт
    </button>
  );
}

export default NavigationButton;
