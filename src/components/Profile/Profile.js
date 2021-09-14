import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Profile.css';
import SubmitButton from '../SubmitButton/SubmitButton';

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
    <main className="profile">
      <form
        noValidate
        className="profile__form"
        name="form-login"
        onSubmit={handleClick}
      >
        <h1 className="profile__title">
          Привет, Антон!
        </h1>
        <label className="profile__label">
          Имя
          <input
            required
            className="profile__input"
            type="name"
            defaultValue="Антон"
            minLength="5"
            maxLength="40"
            name="name-profile"
          />
        </label>
        <label className="profile__label">
          E-mail
          <input
            required
            className="profile__input"
            type="email"
            defaultValue="qwerty@qwerty.ru"
            minLength="5"
            maxLength="40"
            name="email-profile"
          />
        </label>
        {
          change ?
            <SubmitButton
              handleClick={handleSaveClick}
              btnText="Сохранить"
            />
              : (
            <>
              <button
                type="submit"
                className="profile__btn"
                onClick={handleClick}
              >
                Редактировать
              </button>
              <button
                type="button"
                className="profile__btn profile__btn_exit"
                onClick={handleExitClick}
              >
                Выйти из аккаунта
              </button>
            </>
          )
        }
      </form>
    </main>
  );
}

export default Profile;
