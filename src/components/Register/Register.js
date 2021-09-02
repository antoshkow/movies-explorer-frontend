import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';

function Register() {
  const history = useHistory();

  const handleClick = (evt) => {
    evt.preventDefault();
    history.push('/signin');
  }

  return (
    <main className="auth">
      <form
        noValidate
        className="auth__form"
        name="form-register"
        onSubmit={handleClick}
      >
        <div className="auth__logo">
          <Logo />
        </div>
        <h1 className="auth__title">
          Добро пожаловать!
        </h1>
        <span className="auth__placeholder">
          Имя
        </span>
        <input
          required
          className="auth__input"
          type="name"
          minLength="2"
          maxLength="40"
          name="name-register"
        />
        <span
          className="auth__error"
          id="auth-name-error"
        >
          Что-то пошло не так...
        </span>
        <p className="auth__placeholder">
          E-mail
        </p>
        <input
          required
          className="auth__input"
          type="email"
          minLength="5"
          maxLength="40"
          name="email-register"
        />
        <span
          className="auth__error"
          id="auth-email-error"
        >
          Пользователь с таким email уже существует.
        </span>
        <p className="auth__placeholder">
          Пароль
        </p>
        <input
          required
          className="auth__input"
          type="password"
          minLength="5"
          maxLength="40"
          name="password-register"
        />
        <span
          className="auth__error"
          id="auth-password-error"
        >
          Что-то пошло не так...
        </span>
        <button
          type="submit"
          className="auth__btn"
          onClick={handleClick}
        >
          Зарегистрироваться
        </button>
        <div className="auth__bottom">
          <p className="auth__question">
            Уже зарегистрированы?
          </p>
          <Link
            className="auth__link"
            to="/signin"
          >
            Войти
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Register;
