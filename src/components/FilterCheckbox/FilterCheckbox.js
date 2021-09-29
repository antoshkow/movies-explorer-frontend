import React, { useRef } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isFilterOn }) {

  const checked = useRef();

  const handleChange = () => {
    isFilterOn(checked.current.checked);
  }

  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        name="filter-checkbox"
        id="filter-checkbox"
        onChange={handleChange}
        ref={checked}
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
