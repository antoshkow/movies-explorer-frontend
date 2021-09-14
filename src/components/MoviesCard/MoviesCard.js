import React from 'react';
import './MoviesCard.css';


function MoviesCard({ pic, btn, btnText }) {
  const handleClick = (evt) => {
    evt.preventDefault()
  }

  return (
    <li className="movies-card">
      <div className="movies-card__top">
        <h2 className="movies-card__title">
          В погоне за Бэнкси
        </h2>
        <span className="movies-card__duration">
          27 минут
        </span>
      </div>
      <img
        src={pic}
        alt="Превью фильма"
        className="movies-card__pic"
      />
      <button
        type="button"
        className={btn}
        onClick={handleClick}
      >
        {btnText}
      </button>
    </li>
  );
}

export default MoviesCard;
