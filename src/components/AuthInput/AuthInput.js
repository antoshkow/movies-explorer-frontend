import React from 'react';
import './AuthInput.css';

function AuthInput({
  inputTitle, inputType, inputMinLength,
  inputMaxLength, inputName, inputErrorId,
  inputError, handleInputChange, value
}) {

  return (
    <>
      <p className="auth-input__placeholder">
        {inputTitle}
      </p>
      <input
        required
        className="auth-input__input"
        type={inputType}
        minLength={inputMinLength}
        maxLength={inputMaxLength}
        name={inputName}
        onChange={handleInputChange}
        value={value}
        autoComplete="off"
      />
      <span
        className="auth-input__error"
        id={inputErrorId}
      >
        {inputError}
      </span>
    </>
  );
}

export default AuthInput;
