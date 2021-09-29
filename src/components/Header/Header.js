import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Navigation from '../Navigation/Navigation';

function Header({ handleMenuClick, isActive, isLoggedIn }) {

  const location = useLocation();

  return (
    <header
      className={
        location.pathname === '/' ? 'header header_landing' : 'header'
      }
    >
      <Logo />
      <Route
        exact
        path="/"
      >
        {
          isLoggedIn ?
            <Navigation
              handleMenuClick={handleMenuClick}
              isActive={isActive}
            /> :
            <AuthNavigation />
        }
      </Route>
      <Route
        exact
        path="/movies"
      >
        <Navigation
          handleMenuClick={handleMenuClick}
          isActive={isActive}
        />
      </Route>
      <Route
        exact
        path="/saved-movies"
      >
        <Navigation
          handleMenuClick={handleMenuClick}
          isActive={isActive}
        />
      </Route>
      <Route
        exact
        path="/profile"
      >
        <Navigation
          handleMenuClick={handleMenuClick}
          isActive={isActive}
        />
      </Route>
    </header>
  );
}

export default Header;
