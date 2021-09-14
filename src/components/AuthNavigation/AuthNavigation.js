import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AuthNavigation.css';

function AuthNavigation() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/signin')
  }

  return (
    <nav className="auth-nav">
      <Link
        to="/signup"
        className="auth-nav__register"
      >
        Регистрация
      </Link>
      <button
        type="button"
        className="auth-nav__login"
        onClick={handleLoginClick}
      >
        Войти
      </button>
    </nav>
  );
}

export default AuthNavigation;
