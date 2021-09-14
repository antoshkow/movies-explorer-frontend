import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <form
      noValidate
      className="search-form"
      id="search-form"
      onSubmit={handleSubmit}
    >
      <fieldset
        className="search-form__fieldset search-form__fieldset_left "
      >
        <label className="search-form__search">
          <div className="search-form__icon" />
          <input
            required
            className="search-form__input"
            placeholder="Фильм"
            type="text"
            minLength="1"
            maxLength="40"
            name="name-search"
          />
        </label>
        <button
          type="submit"
          className="search-form__btn"
        />
      </fieldset>
      <fieldset className="search-form__fieldset">
        <FilterCheckbox />
      </fieldset>
    </form>
  );
}

export default SearchForm;
