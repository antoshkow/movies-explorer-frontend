import React from 'react';
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
          <li className="portfolio__link-border">
            <a
              className="portfolio__link"
              href="https://how-to-learn-kohl.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__link-name">
                Статичный сайт
              </p>
              <img
                src={arrow}
                alt="Декоративная стрелка"
                className="portfolio__arrow"
              />
            </a>
          </li>
          <li className="portfolio__link-border">
            <a
              className="portfolio__link"
              href="https://antoshkow.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__link-name">
                Адапивный сайт
              </p>
              <img
                src={arrow}
                alt="Декоративная стрелка"
                className="portfolio__arrow"
              />
            </a>
          </li>
          <li className="portfolio__link-border">
            <a
              className="portfolio__link"
              href="https://antoshkow-mesto.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__link-name">
                Одностраничное приложение
              </p>
              <img
                src={arrow}
                alt="Декоративная стрелка"
                className="portfolio__arrow"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
