import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <article className="about-me__container">
        <div className="about-me__avatar" />
        <h2 className="about-me__title">
          Антон
        </h2>
        <p className="about-me__description">
          Фронтенд-разработчик, 25 лет
        </p>
        <p className="about-me__article">
          Я родился и живу в Санкт-Петербурге. С университета у меня появилась страсть к программированию и IT. Я выбрал фронтенд-разработку, так как считаю, что за web-технологиями будущее. Создание пользовательских интерфейсов имеет огромное влияние на результаты компании и готовый продукт в целом. Во время пандемии я понял, что пора идти к мечте - так я закончил обучение в Практикуме и готов начать работу в ближайшее время.
        </p>
        <ul className="about-me__links">
          <li>
            <a
              href="https://linkedin.com/in/antoshkow"
              target="_blank"
              rel="noreferrer"
              className="about-me__link"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/antoshkow"
              target="_blank"
              rel="noreferrer"
              className="about-me__link"
            >
              GitHub
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default AboutMe;
