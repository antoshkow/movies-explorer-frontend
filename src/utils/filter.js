import { SHORT_FILM } from "../constants/config";

// Сортируем по ключевому слову
export const handleFilter = (moviesList, value) => {
  let result = [];
  moviesList.forEach(movie => {
    if (movie.nameRU.toLowerCase().includes(value.toLowerCase()))
      result.push(movie);
  });
  return result;
}

// Сортируем по чекбоксу
export const handleDurationFilter = moviesList => {
  let result = [];
  moviesList.forEach(movie => {
    if (movie.duration <= SHORT_FILM)
      result.push(movie);
  });
  return result;
}

// Сортируем по id
export const handleIdFilter = (moviesList, id) => {
  return moviesList.filter(movie =>
    movie._id !== id
  );
}

// Обрезаем количество фильмов
export const handleMediaFilter = (moviesList, visibleMovies) =>
  moviesList.slice(0, visibleMovies);
