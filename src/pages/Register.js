import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import AuthInput from '../components/AuthInput/AuthInput';

function Register() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/signin');
  }

  return (
    <AuthForm
      handleSubmitClick={handleClick}
      formName="form-register"
      formTitle="Добро пожаловать!"
      btnText="Зарегистрироваться"
      questionText="Уже зарегистрированы?"
      linkTo="/signin"
      linkToText="Войти"
      authMod="submit-btn_register"
    >
      <AuthInput
        inputTitle="Имя"
        inputType="name"
        inputMinLength="2"
        inputMaxLength="40"
        inputName="name-register"
        inputErrorId="auth-name-error"
        inputError="Что-то пошло не так..."
      />
      <AuthInput
        inputTitle="E-mail"
        inputType="email"
        inputMinLength="5"
        inputMaxLength="40"
        inputName="email-register"
        inputErrorId="auth-email-error"
        inputError="Пользователь с таким email уже существует."
      />
      <AuthInput
        inputTitle="Пароль"
        inputType="password"
        inputMinLength="5"
        inputMaxLength="40"
        inputName="password-register"
        inputErrorId="auth-password-error"
        inputError="Что-то пошло не так..."
      />
    </AuthForm>
  );
}

export default Register;
