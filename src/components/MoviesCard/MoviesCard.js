import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({
  movieId, duration, savedMovies,
  trailer, country, director,
  year, description, image,
  nameRU, nameEN, thumbnail,
  providedDuration, _id, savedMoviesId,
  handleLikeClick, handleDeleteClick
}) {

  const location = useLocation();

  // Данные фильма
  const movieData = {
    country, director, duration,
    year, description, image,
    trailer, nameRU, nameEN,
    thumbnail, movieId, _id
  }

  // Проверяем есть ли лайк
    const handleIsLiked = (movieData, savedMoviesId) => {
      if (movieData.movieId) {
        return savedMoviesId.some(e => e === movieData.movieId);
      }
    }

  const isLiked = handleIsLiked(movieData, savedMoviesId)

  const savedMovie = savedMovies.find(item => item.movieId === movieId)

  // Переменная для кнопки лайка
  const cardLikeButtonClassName = (
    `movies-card__btn ${isLiked ? 'movies-card__btn_active' : ''}`
  );
  const cardLikeBtnText = (
    `${isLiked ? '✓' : 'Сохранить'}`
  );

  // Переменная для кнопки удалить
  const cardDeleteBtnText = '✖';

  // Обработчики лайка и удаления фильма
  const handleLikeMovie = () => {
    isLiked ? handleDeleteClick(savedMovie) : handleLikeClick(movieData)
  }

  const handleDeleteMovie = () => {
    handleDeleteClick(movieData);
  }

  return (
    <li className="movies-card">
      <div className="movies-card__top">
        <h2 className="movies-card__title">
          {nameRU}
        </h2>
        <span className="movies-card__duration">
          {providedDuration}
        </span>
      </div>
      <a
        className="movies-card__pic"
        href={trailer}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={image}
          alt={nameRU}
          className="movies-card__pic"
        />
      </a>
      <button
        type="button"
        className={
          location.pathname === '/movies' ?
            cardLikeButtonClassName : 'movies-card__btn'
        }
        onClick={
          location.pathname === '/movies' ?
            handleLikeMovie : handleDeleteMovie
        }
      >
        {
          location.pathname === '/movies' ?
            cardLikeBtnText : cardDeleteBtnText
        }
      </button>
    </li>
  );
}

export default MoviesCard;
