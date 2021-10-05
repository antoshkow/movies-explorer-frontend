import { BEATFILM_URL, checkResponse } from '../constants/config';

export const getMovies = () => {
  return fetch(`${BEATFILM_URL}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => checkResponse(res));
}
