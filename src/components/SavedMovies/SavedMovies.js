import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <section className="movies">
      <div className="movies__search">
        <SearchForm />
      </div>
      <div className="movies__cards">
        {/* <Preloader /> */}
        <MoviesCardList />
      </div>
    </section>
  );
}

export default SavedMovies;
