import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main className="movies">
      <div className="movies__search">
        <SearchForm />
      </div>
      <div className="movies__cards">
        {/* <Preloader /> */}
        <MoviesCardList />
      </div>
    </main>
  );
}

export default Movies;
