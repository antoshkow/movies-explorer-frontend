import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import arrow from '../../images/arrow-main.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">
          Портфолио
        </h2>
        <ul className="portfolio__links">
          <li className="portfolio__link">
            <a
              href="https://how-to-learn-kohl.vercel.app"
              className="portfolio__link-name"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
            </a>
            <img
              src={arrow}
              alt="Декоративная стрелка"
              className="portfolio__arrow"
            />
          </li>
          <li className="portfolio__link">
            <a
              href="https://antoshkow.github.io/russian-travel/"
              className="portfolio__link-name"
              target="_blank"
              rel="noreferrer"
            >
              Адапивный сайт
            </a>
            <img
              src={arrow}
              alt="Декоративная стрелка"
              className="portfolio__arrow"
            />
          </li>
          <li className="portfolio__link">
            <a
              href="https://antoshkow.mesto.nomoredomains.club/sign-in"
              className="portfolio__link-name"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
            </a>
            <img
              src={arrow}
              alt="Декоративная стрелка"
              className="portfolio__arrow"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
