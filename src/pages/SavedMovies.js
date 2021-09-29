import React from 'react';
import MoviesPage from '../components/MoviesPage/MoviesPage';

function SavedMovies({
  onSearch, onError, isMoviesLoading,
  isMoviesLoadError, savedMovies, isFilterOn,
  visibleMovies, handleMoreClick, handleDeleteClick,
  savedMoviesId, movies, handleLikeClick
}) {

  return (
    <MoviesPage
      isSavedMovies={true}
      onSearch={onSearch}
      onError={onError}
      isMoviesLoadError={isMoviesLoadError}
      isMoviesLoading={isMoviesLoading}
      movies={movies}
      savedMovies={savedMovies}
      visibleMovies={visibleMovies}
      handleMoreClick={handleMoreClick}
      isFilterOn={isFilterOn}
      handleDeleteClick={handleDeleteClick}
      handleLikeClick={handleLikeClick}
      savedMoviesId={savedMoviesId}
    />
  );
}

export default SavedMovies;
