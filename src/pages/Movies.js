import React from 'react';
import MoviesPage from '../components/MoviesPage/MoviesPage';

function Movies({
  onSearch, onError, isMoviesLoading,
  isMoviesLoadError, movies, isFilterOn,
  handleMoreClick, visibleMovies, handleLikeClick,
  savedMoviesId, savedMovies, handleDeleteClick,
  isReqSending
}) {

  return (
    <MoviesPage
      isSavedMovies={false}
      onSearch={onSearch}
      onError={onError}
      isMoviesLoading={isMoviesLoading}
      isMoviesLoadError={isMoviesLoadError}
      movies={movies}
      savedMovies={savedMovies}
      visibleMovies={visibleMovies}
      handleMoreClick={handleMoreClick}
      isFilterOn={isFilterOn}
      handleLikeClick={handleLikeClick}
      handleDeleteClick={handleDeleteClick}
      savedMoviesId={savedMoviesId}
      isReqSending={isReqSending}
    />
  );
}

export default Movies;
