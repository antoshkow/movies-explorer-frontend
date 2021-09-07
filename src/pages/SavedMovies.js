import React from 'react';
import MoviesPage from '../components/MoviesPage/MoviesPage';

function SavedMovies() {
  return (
    <MoviesPage
      isSavedMovies={true}
    />
  );
}

export default SavedMovies;
