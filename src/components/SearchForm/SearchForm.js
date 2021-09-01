import React from 'react';
import './SearchForm.css';
import loop from'../../images/loop_icon.svg';

function SearchForm() {
  return (
    <form className="search-form">
      <img
        src={loop}
        alt="Иконка поиска"
      />
      <input
        className="search-form__input"
      />
      <button>
        <img
          src={loop}
          alt="Иконка поиска"
        />
      </button>
    </form>
  );
}

export default SearchForm;
