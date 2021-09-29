import React, { useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useForm';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch, onError, isFilterOn }) {

  const {
    values,
    handleChange,
    resetForm,
    isValid,
  } = useFormWithValidation();

  useEffect(() => {
    resetForm({});
  }, [resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    isValid ? onSearch(values) : onError();
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
            name="search"
            onChange={handleChange}
            value={values.search || ''}
            autoComplete="off"
          />
        </label>
        <button
          type="submit"
          className='search-form__btn'
        />
      </fieldset>
      <fieldset className="search-form__fieldset">
        <FilterCheckbox
          isFilterOn={isFilterOn}
        />
      </fieldset>
    </form>
  );
}

export default SearchForm;
