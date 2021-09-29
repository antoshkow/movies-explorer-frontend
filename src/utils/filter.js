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
    if (movie.duration <= 40) result.push(movie);
  });
  return result;
}

// Сортируем по id
export const handleIdFilter = (moviesList, id) => {
  return moviesList.filter(movie =>
    movie._id !== id
  );
}