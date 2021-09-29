import React from 'react';
import './SubmitButton.css';

function SubmitButton({
  handleClick, btnText,
  authMod, isDisabled
}) {

  return (
    <button
      type="submit"
      className={
        `submit-btn ${authMod} ${isDisabled && 'submit-btn_disabled'}`
      }
      onClick={handleClick}
      disabled={isDisabled}
    >
      {btnText}
    </button>
  );
}

export default SubmitButton;
