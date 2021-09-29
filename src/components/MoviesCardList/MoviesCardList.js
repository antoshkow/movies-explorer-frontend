import React from 'react';
import './MoviesCardList.css';
import { movieDuration } from '../../constants/config';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  isSavedMovies, movies, savedMovies,
  handleLikeClick, handleDeleteClick, savedMoviesId,
  visibleMovies
}) {

  return (
    <>
      {
        !isSavedMovies && movies &&
          (
            <div className="movies-cards">
              <ul className="movies-cards__main">
                {
                  visibleMovies.map(movie => (
                    <MoviesCard
                      key={movie.id}
                      movieId={movie.id}
                      image={`https://api.nomoreparties.co${movie.image.url}`}
                      nameRU={movie.nameRU}
                      providedDuration={movieDuration(movie.duration)}
                      handleLikeClick={handleLikeClick}
                      handleDeleteClick={handleDeleteClick}
                      trailer={movie.trailerLink}
                      country={movie.country}
                      director={movie.director}
                      year={movie.year}
                      description={movie.description}
                      nameEN={movie.nameEN}
                      thumbnail={`https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`}
                      savedMovies={savedMovies}
                      duration={movie.duration}
                      movies={movies}
                      savedMoviesId={savedMoviesId}
                    />
                  ))
                }
              </ul>
            </div>
          )
      }
      {
        isSavedMovies && savedMovies &&
          (
            <div className="movies-cards">
              <ul className="movies-cards__main">
                {
                  visibleMovies.map(movie => (
                    <MoviesCard
                      key={movie.movieId}
                      _id={movie._id}
                      movieId={movie.movieId}
                      image={movie.image}
                      nameRU={movie.nameRU}
                      providedDuration={movieDuration(movie.duration)}
                      duration={movie.duration}
                      handleDeleteClick={handleDeleteClick}
                      handleLikeClick={handleLikeClick}
                      trailer={movie.trailer}
                      country={movie.country}
                      director={movie.director}
                      year={movie.year}
                      description={movie.description}
                      nameEN={movie.nameEN}
                      thumbnail={movie.thumbnail}
                      savedMovies={savedMovies}
                      movies={movies}
                      savedMoviesId={savedMoviesId}
                    />
                  ))
                }
              </ul>
            </div>
        )
      }
    </>
  );
}

export default MoviesCardList;
