import { BASE_URL, checkResponse } from '../constants/config';

// GET /movies
export const getMovies = () => {
   return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
    .then(res => checkResponse(res));
}

// POST /movies
export const addSavedMovie = (movieData) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(movieData),
  })
    .then(res => checkResponse(res));
}

// DELETE /movies/:_id
export const deleteSavedMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
    .then(res => checkResponse(res));
}

// GET /users/me
export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
    .then(res => checkResponse(res));
}

// PATCH /users/me
export const editProfile = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ name, email }),
  })
    .then(res => checkResponse(res));
}

// POST /signin
export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  })
    .then(res => checkResponse(res))
    .then(data => {
      localStorage.setItem('jwt', data.token);
      return data;
    });
}

// POST /signup
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  })
    .then(res => checkResponse(res));
}

// POST /signout
export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
    .then(res => checkResponse(res))
    .then(res => localStorage.removeItem('jwt'));
}
