import React from 'react';
import './MoviesMoreButton.css';

function MoviesMoreButton({ handleMoreClick }) {

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
