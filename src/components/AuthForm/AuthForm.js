import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import Logo from '../Logo/Logo';
import SubmitButton from '../SubmitButton/SubmitButton';

function AuthForm({
  handleSubmit, formName, formTitle,
  btnText, questionText, linkTo,
  linkToText, children, authMod,
  isDisabled
}) {

  return (
    <main className="auth">
      <form
        noValidate
        className="auth__form"
        name={formName}
        onSubmit={handleSubmit}
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
          btnText={btnText}
          isDisabled={isDisabled}
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
