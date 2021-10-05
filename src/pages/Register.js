import React, { useEffect } from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import AuthInput from '../components/AuthInput/AuthInput';
import { useFormWithValidation } from '../hooks/useForm';

function Register({ handleRegister, isReqSending }) {

  const {
    values, handleChange, resetForm,
    errors, isValid
  } = useFormWithValidation();

  useEffect(() => resetForm({}), [resetForm]);

  const handleSubmit = evt => {
    evt.preventDefault();
    handleRegister(values.nameRegister, values.emailRegister, values.passwordRegister);
  }

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      formName="form-register"
      formTitle="Добро пожаловать!"
      btnText="Зарегистрироваться"
      questionText="Уже зарегистрированы?"
      linkTo="/signin"
      linkToText="Войти"
      authMod="submit-btn_register"
      isDisabled={!isValid || isReqSending}
    >
      <AuthInput
        inputTitle="Имя"
        inputType="name"
        inputMinLength="2"
        inputMaxLength="40"
        inputName="nameRegister"
        inputErrorId="auth-name-error"
        inputError={errors.nameRegister || ''}
        handleInputChange={handleChange}
        value={values.nameRegister || ''}
      />
      <AuthInput
        inputTitle="E-mail"
        inputType="email"
        inputMinLength="5"
        inputMaxLength="40"
        inputName="emailRegister"
        inputErrorId="auth-email-error"
        inputError={errors.emailRegister || ''}
        handleInputChange={handleChange}
        value={values.emailRegister || ''}
      />
      <AuthInput
        inputTitle="Пароль"
        inputType="password"
        inputMinLength="5"
        inputMaxLength="40"
        inputName="passwordRegister"
        inputErrorId="auth-password-error"
        inputError={errors.passwordRegister || ''}
        handleInputChange={handleChange}
        value={values.passwordRegister || ''}
      />
    </AuthForm>
  );
}

export default Register;
