import React from 'react';
import './SubmitButton.css';

function SubmitButton({ handleClick, btnText, authMod }) {
  return (
    <button
      type="submit"
      className={`submit-btn ${authMod}`}
      onClick={handleClick}
  >
    {btnText}
  </button>
  );
}

export default SubmitButton;
