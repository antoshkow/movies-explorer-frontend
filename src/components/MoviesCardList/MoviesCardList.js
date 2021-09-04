import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import pic1 from '../../images/pic_1.png';
import pic2 from '../../images/pic_2.png';
import pic3 from '../../images/pic_3.png';
import pic4 from '../../images/pic_4.png';
import pic5 from '../../images/pic_5.png';
import pic6 from '../../images/pic_6.png';
import pic7 from '../../images/pic_7.png';
import pic8 from '../../images/pic_8.png';
import pic9 from '../../images/pic_9.png';
import pic10 from '../../images/pic_10.png';
import pic11 from '../../images/pic_11.png';
import pic12 from '../../images/pic_12.png';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const location = useLocation();

  const handleClick = (evt) => {
    evt.preventDefault();
  }

  return (
    <section>
      {
        location.pathname === '/movies' &&
          (
            <div className="movies-cards">
              <ul className="movies-cards__main">
                <MoviesCard
                  pic={pic1}
                  btn="movies-card__btn movies-card__btn_active"
                  btnText="&#10003;"
                />
                <MoviesCard
                  pic={pic2}
                  btn="movies-card__btn movies-card__btn_active"
                  btnText="&#10003;"
                />
                <MoviesCard
                  pic={pic3}
                  btn="movies-card__btn"
                  btnText="Сохранить"
                />
                <MoviesCard
                  pic={pic4}
                  btn="movies-card__btn"
                  btnText="Сохранить"
                />
                <MoviesCard
                  pic={pic5}
                  btn="movies-card__btn"
                  btnText="Сохранить"
                />
                <MoviesCard
                  pic={pic6}
                  btn="movies-card__btn movies-card__btn_active"
                  btnText="&#10003;"
                />
                <MoviesCard
                  pic={pic7}
                  btn="movies-card__btn movies-card__btn_active"
                  btnText="&#10003;"
                />
                <MoviesCard
                  pic={pic8}
                  btn="movies-card__btn"
                  btnText="Сохранить"
                />
                <MoviesCard
                  pic={pic9}
                  btn="movies-card__btn"
                  btnText="Сохранить"
                />
                <MoviesCard
                  pic={pic10}
                  btn="movies-card__btn"
                  btnText="Сохранить"
                />
                <MoviesCard
                  pic={pic11}
                  btn="movies-card__btn movies-card__btn_active"
                  btnText="&#10003;"
                />
                <MoviesCard
                  pic={pic12}
                  btn="movies-card__btn"
                  btnText="Сохранить"
                />
              </ul>
              <button
                type="button"
                className="movies-cards__btn"
                onClick={handleClick}
              >
                Ещё
              </button>
            </div>
          )
      }
      {
        location.pathname === '/saved-movies' &&
          (
            <div className="movies-cards">
              <ul className="movies-cards__main">
                <MoviesCard
                  pic={pic1}
                  btn="movies-card__btn"
                  btnText="&#128939;"
                />
                <MoviesCard
                  pic={pic2}
                  btn="movies-card__btn"
                  btnText="&#128939;"
                />
                <MoviesCard
                  pic={pic3}
                  btn="movies-card__btn"
                  btnText="&#128939;"
                />
              </ul>
            </div>
        )
      }
    </section>
  );
}

export default MoviesCardList;
