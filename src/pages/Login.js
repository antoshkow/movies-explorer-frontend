import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import AuthInput from '../components/AuthInput/AuthInput';

function Login() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/movies');
  }

  return (
    <AuthForm
      handleSubmitClick={handleClick}
      formName="form-login"
      formTitle="Рады видеть!"
      btnText="Войти"
      questionText="Ещё не зарегистрированы?"
      linkTo="/signup"
      linkToText="Регистрация"
      authMod="submit-btn_login"
    >
      <AuthInput
        inputTitle="E-mail"
        inputType="email"
        inputMinLength="5"
        inputMaxLength="40"
        inputName="email-login"
        inputErrorId="auth-email-error"
        inputError="Что-то пошло не так..."
      />
      <AuthInput
        inputTitle="Пароль"
        inputType="password"
        inputMinLength="5"
        inputMaxLength="40"
        inputName="password-login"
        inputErrorId="auth-password-error"
        inputError="Что-то пошло не так..."
      />
    </AuthForm>
  );
}

export default Login;
