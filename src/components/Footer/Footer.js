import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__bottom">
        <p className="footer__date">
          &copy; 2021
        </p>
        <ul className="footer__links">
          <li className="footer__link">
            <a
              href="https://practicum.yandex.ru"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link">
            <a
              href="https://github.com/antoshkow"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="footer__link">
            <a
              href="https://linkedin.com/in/antoshkow"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
