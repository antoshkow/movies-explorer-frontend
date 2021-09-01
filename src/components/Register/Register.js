import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className="register">
      <form
        noValidate
        className="register__form"
        name="form-register"
      >
        <img src={logo} alt="Лого MoviesExplorer" />
        <h2 className="register__title">Регистрация</h2>
        <input
          required
          className="auth__input"
          type="email"
          placeholder="Email"
          minLength="5"
          maxLength="40"
          name="email-register"
        />
        <input
          required
          className="auth__input"
          type="email"
          placeholder="Email"
          minLength="5"
          maxLength="40"
          name="email-register"
        />
        <input
          required
          className="auth__input"
          type="password"
          placeholder="Пароль"
          minLength="5"
          maxLength="40"
          name="password-register"
        />
        <span
        className="popup__error"
        id="popup-avatar-link-error"
      />
        <button
          type="submit"
          className="auth__btn"
        >
          Зарегистрироваться
        </button>
        <Link className="auth__link" to="/signin">Уже зарегистрированы? Войти</Link>
      </form>
    </section>
  );
}

export default Register;
