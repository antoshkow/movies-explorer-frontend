import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesMoreButton from '../MoviesMoreButton/MoviesMoreButton';

function MoviesPage({
  isSavedMovies, onSearch, onError,
  isMoviesLoading, isMoviesLoadError, visibleMovies,
  movies, savedMovies, handleMoreClick,
  isFilterOn, handleLikeClick, handleDeleteClick,
  savedMoviesId, isReqSending
}) {

  const location = useLocation();

  return (
    <main className="movies">
      <section className="movies__search">
        <SearchForm
          onSearch={onSearch}
          onError={onError}
          isFilterOn={isFilterOn}
          isReqSending={isReqSending}
        />
      </section>
      <section className="movies__cards">
        {
          isMoviesLoading && (
            <Preloader />
          )
        }
        {
          isMoviesLoadError === 404 && (
            <p className="movies__loading">
              Ничего не найдено
            </p>
          )
        }
        {
          isMoviesLoadError === true && (
            <p className="movies__loading">
              Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
            </p>
          )
        }
        {
          !isMoviesLoading && !isMoviesLoadError && (
            <>
              <MoviesCardList
                isSavedMovies={isSavedMovies}
                movies={movies}
                savedMovies={savedMovies}
                visibleMovies={visibleMovies}
                handleLikeClick={handleLikeClick}
                handleDeleteClick={handleDeleteClick}
                savedMoviesId={savedMoviesId}
              />
              {
                location.pathname === '/movies' && movies.length > visibleMovies.length ? (
                  <MoviesMoreButton
                    handleMoreClick={handleMoreClick}
                  />
                ) : null
              }
              {
                location.pathname === '/saved-movies' && savedMovies.length > visibleMovies.length && savedMovies !== [] ? (
                  <MoviesMoreButton
                    handleMoreClick={handleMoreClick}
                  />
                ) : null
              }
            </>
          )
        }
      </section>
    </main>
  );
}

export default MoviesPage;
