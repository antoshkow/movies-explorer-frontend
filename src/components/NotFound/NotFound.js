import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const history = useHistory();

  const handleClick = (evt) => {
    history.goBack();
  }

  return (
    <main className="not-found">
      <h1
        className="not-found__title"
      >
        404
      </h1>
      <p className="not-found__description">
        Страница не найдена
      </p>
      <button
        type="button"
        onClick={handleClick}
        className="not-found__btn"
      >
        Назад
      </button>
    </main>
  );
}

export default NotFound;
