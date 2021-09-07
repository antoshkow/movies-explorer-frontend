import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import Logo from '../Logo/Logo';
import SubmitButton from '../SubmitButton/SubmitButton';

function AuthForm({
  handleSubmitClick, formName, formTitle,
  btnText, questionText, linkTo,
  linkToText, children, authMod
}) {
  const handleClick = (evt) => {
    evt.preventDefault();
    handleSubmitClick();
  }

  return (
    <main className="auth">
      <form
        noValidate
        className="auth__form"
        name={formName}
        onSubmit={handleClick}
      >
        <div className="auth__logo">
          <Logo />
        </div>
        <h1 className="auth__title">
          {formTitle}
        </h1>
        {children}
        <SubmitButton
          authMod={authMod}
          handleClick={handleClick}
          btnText={btnText}
        />
        <div className="auth__bottom">
          <p className="auth__question">
            {questionText}
          </p>
          <Link
            className="auth__link"
            to={linkTo}
          >
            {linkToText}
          </Link>
        </div>
      </form>
    </main>
  );
}

export default AuthForm;
