const BASE_URL = 'https://api.antoshkow.movies-exp.nomoredomains.monster';
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

export { BASE_URL, BEATFILM_URL, checkResponse, throttle, movieDuration };
