import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../../pages/Movies';
import SavedMovies from '../../pages/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  }

  const handleCloseMenuClick = () => {
    setIsMenuActive(false)
  }

  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
        >
          <div className="app__header">
            <Header
              handleMenuClick={handleMenuClick}
            />
          </div>
          <Main />
          <Footer />
        </Route>
        <Route
          path="/movies"
        >
          <div className="app__wrapper">
            <BurgerMenu
              isActive={isMenuActive}
              handleCloseBurgerClick={handleCloseMenuClick}
            />
            <Header
              handleMenuClick={handleMenuClick}
              isActive={isMenuActive}
            />
            <Movies />
            <Footer />
          </div>
        </Route>
        <Route
          path="/saved-movies"
        >
          <div className="app__wrapper">
            <BurgerMenu
              isActive={isMenuActive}
              handleCloseBurgerClick={handleCloseMenuClick}
            />
            <Header
              handleMenuClick={handleMenuClick}
              isActive={isMenuActive}
            />
            <SavedMovies />
            <Footer />
          </div>
        </Route>
        <Route
          path="/signin"
          component={Login}
        />
        <Route
          path="/signup"
          component={Register}
        />
        <Route
          path="/profile"
        >
          <BurgerMenu
            isActive={isMenuActive}
            handleCloseBurgerClick={handleCloseMenuClick}
          />
          <Header
            handleMenuClick={handleMenuClick}
            isActive={isMenuActive}
          />
          <Profile />
        </Route>
        <Route
          path="*"
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

export default App;
