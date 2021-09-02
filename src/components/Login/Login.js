import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';

function Login() {
  const history = useHistory();

  const handleClick = (evt) => {
    evt.preventDefault();
    history.push('/movies');
  }

  return (
    <main className="auth">
      <form
        noValidate
        className="auth__form"
        name="form-login"
        onSubmit={handleClick}
      >
        <div className="auth__logo">
          <Logo />
        </div>
        <h1 className="auth__title">
          Рады видеть!
        </h1>
        <span className="auth__placeholder">
          E-mail
        </span>
        <input
          required
          className="auth__input"
          type="email"
          minLength="5"
          maxLength="40"
          name="email-login"
        />
        <span
          className="auth__error"
          id="auth-email-error"
        >
          Что-то пошло не так...
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
          name="password-login"
        />
        <span
          className="auth__error"
          id="auth-password-error"
        >
          Что-то пошло не так...
        </span>
        <button
          type="submit"
          className="auth__btn auth__btn_login"
          onClick={handleClick}
        >
          Войти
        </button>
        <div className="auth__bottom">
          <p className="auth__question">
            Ещё не зарегистрированы?
          </p>
          <Link
            className="auth__link"
            to="/signup"
          >
            Регистрация
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
