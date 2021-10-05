import React, { useContext, useEffect } from 'react';
import './Profile.css';
import { useFormWithValidation } from '../../hooks/useForm';
import SubmitButton from '../SubmitButton/SubmitButton';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({
  handleChangeInfo, isProfileChangeError, handleLogout,
  errorMessage, change, setChange,
  isReqSending
}) {

  const currentUser = useContext(CurrentUserContext);

  const {
    values, handleChange, resetForm,
    errors, isValid
  } = useFormWithValidation();

  useEffect(() => {
    if (currentUser)
      resetForm(currentUser, {}, true);
  }, [currentUser, resetForm]);

  const handleClick = evt => {
    evt.preventDefault();
    setChange(!change);
  }

 const handleSaveClick = evt => {
  evt.preventDefault();
  setChange();
  handleChangeInfo(values.name, values.email);
 }

  const handleExitClick = evt => {
    evt.preventDefault();
    handleLogout();
  }

  return (
    <main className="profile">
      <form
        noValidate
        className="profile__form"
        name="form-login"
        onSubmit={handleSaveClick}
      >
        <h1 className="profile__title">
          Привет, {currentUser.name}!
        </h1>
        <label className="profile__label">
          Имя
          <input
            className="profile__input"
            type="name"
            minLength="2"
            maxLength="40"
            name="name"
            onChange={handleChange}
            value={values.name || ''}
            autoComplete="off"
          />
        </label>
        <span className="profile__error">
          {errors.name || ''}
        </span>
        <label className="profile__label">
          E-mail
          <input
            className="profile__input"
            type="email"
            minLength="5"
            maxLength="40"
            name="email"
            onChange={handleChange}
            value={values.email || ''}
            autoComplete="off"
          />
        </label>
        <span className="profile__error">
          {errors.email || ''}
        </span>
        {
          change ? (
            <>
              <span className="profile__btn-error">
                {isProfileChangeError && errorMessage}
              </span>
              <SubmitButton
                handleClick={handleSaveClick}
                btnText="Сохранить"
                isDisabled={
                  !isValid || (Boolean(currentUser.name === values.name) && Boolean(currentUser.email === values.email)) || isReqSending
                }
              />
                <button
                type="button"
                className="profile__btn profile__btn_exit"
                onClick={handleClick}
              >
                Назад
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
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
