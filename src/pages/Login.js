import React, { useEffect } from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import AuthInput from '../components/AuthInput/AuthInput';
import { useFormWithValidation } from '../hooks/useForm';

function Login({ handleLogin, isReqSending }) {

  const {
    values, handleChange, resetForm,
    errors, isValid
  } = useFormWithValidation();

  useEffect(() => resetForm({}), [resetForm]);

  const handleSubmit = evt => {
    evt.preventDefault();
    handleLogin(values.emailLogin, values.passwordLogin);
  }

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      formName="form-login"
      formTitle="Рады видеть!"
      btnText="Войти"
      questionText="Ещё не зарегистрированы?"
      linkTo="/signup"
      linkToText="Регистрация"
      authMod="submit-btn_login"
      isDisabled={!isValid || isReqSending}
    >
      <AuthInput
        inputTitle="E-mail"
        inputType="email"
        inputMinLength="5"
        inputMaxLength="40"
        inputName="emailLogin"
        inputErrorId="auth-email-error"
        inputError={errors.emailLogin || ''}
        handleInputChange={handleChange}
        value={values.emailLogin || ''}
      />
      <AuthInput
        inputTitle="Пароль"
        inputType="password"
        inputMinLength="5"
        inputMaxLength="40"
        inputName="passwordLogin"
        inputErrorId="auth-password-error"
        inputError={errors.passwordLogin|| ''}
        handleInputChange={handleChange}
        value={values.passwordLogin || ''}
      />
    </AuthForm>
  );
}

export default Login;
