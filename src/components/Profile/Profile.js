import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  const history = useHistory();

  const [change, setChange] = useState(false);

  const handleClick = (evt) => {
    evt.preventDefault();
    setChange(true);
  }

 const handleSaveClick = (evt) => {
  evt.preventDefault();
  setChange(false);
 }

  const handleExitClick = (evt) => {
    evt.preventDefault();
    history.push('/');
  }

  return (
    <main className="auth">
      <form
        noValidate
        className="auth__form"
        name="form-login"
        onSubmit={handleClick}
      >
        <h1 className="auth__title">
          Привет, Антон!
        </h1>
        <label className="auth__placeholder">
          Имя
        </label>
        <input
          required
          className="auth__input"
          type="name"
          defaultValue="Антон"
          minLength="5"
          maxLength="40"
          name="email-login"
        />
        <label className="auth__placeholder">
          E-mail
        </label>
        <input
          required
          className="auth__input"
          type="email"
          defaultValue="qwerty@qwerty.ru"
          minLength="5"
          maxLength="40"
          name="password-login"
        />
        {
          change ? (
            <button
            type="submit"
            className="auth__btn auth__btn_login"
            onClick={handleSaveClick}
          >
            Сохранить
          </button>
          ) : (
            <div>
            <button
            type="submit"
            className="auth__btn auth__btn_login"
            onClick={handleClick}
          >
            Редактировать
          </button>
          <button
            type="button"
            className="auth__btn auth__btn_login"
            onClick={handleExitClick}
          >
            Выйти из аккаунта
          </button>
          </div>
          )
        }
      </form>
    </main>
  );
}

export default Profile;
