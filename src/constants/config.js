const BASE_URL = 'https://movies-explorer-api-u3c9.onrender.com';
const BEATFILM_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const throttle = (func, delay) => {
  let timeout = null;
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.call(this, ...args);
        timeout = null;
      }, delay);
    }
  }
}

const movieDuration = duration =>
  `${Math.trunc(duration / 60) > 0 ? `${Math.trunc(duration / 60)}ч` : ''} ${duration % 60}м`;

const MAX_INNER_WIDTH = 1279;
const MIDDLE_INNER_WIDTH = 768;
const MIN_INNER_WIDTH = 480;

const MAX_MOVIES = 12;
const MORE_MAX_MOVIES = 3;
const MIDDLE_MOVIES = 8;
const MORE_MIDDLE_MOVIES = 2;
const MIN_MOVIES = 5;
const MORE_MIN_MOVIES = 1;

const SHORT_FILM = 40;

export {
  BASE_URL, BEATFILM_URL, checkResponse,
  throttle, movieDuration, MAX_INNER_WIDTH,
  MIDDLE_INNER_WIDTH, MIN_INNER_WIDTH, MAX_MOVIES,
  MORE_MAX_MOVIES, MIDDLE_MOVIES, MORE_MIDDLE_MOVIES,
  MIN_MOVIES, MORE_MIN_MOVIES, SHORT_FILM
};
