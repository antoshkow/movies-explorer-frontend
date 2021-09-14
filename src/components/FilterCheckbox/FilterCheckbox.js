import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input
        required
        className="filter-checkbox__input"
        type="checkbox"
        name="filter-checkbox"
        id="filter-checkbox"
      />
      <label
        htmlFor="filter-checkbox"
        className="filter-checkbox__label"
      >
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
