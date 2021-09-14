import React from 'react';
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function MoviesPage({ isSavedMovies }) {
  return (
    <main className="movies">
      <section className="movies__search">
        <SearchForm />
      </section>
      <section className="movies__cards">
        {/* <Preloader /> */}
        <MoviesCardList
          isSavedMovies={isSavedMovies}
        />
      </section>
    </main>
  );
}

export default MoviesPage;
