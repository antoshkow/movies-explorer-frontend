import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../images/logo.svg';

function Logo() {
  return (
    <Link
      to="/"
      rel="noopener"
      className="logo"
    >
      <img
        src={logo}
        className="logo"
        alt="Лого MoviesExplorer"
      />
    </Link>
  );
}

export default Logo;
