import React from 'react';
import './MoviesMoreButton.css';

function MoviesMoreButton({ handleClick }) {
  const handleMoreClick =() => {
    handleClick();
  }

  return (
    <button
      type="button"
      className="movies-btn"
      onClick={handleMoreClick}
    >
      Ещё
    </button>
  );
}

export default MoviesMoreButton;
