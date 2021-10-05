import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import LandingTitle from '../LandingTitle/LandingTitle';
import AboutProject from '../AboutPoject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
  return (
    <main className="main">
      <div className="main__promo">
        <Promo />
      </div>
      <LandingTitle
        title="О проекте"
        mod=""
      />
      <AboutProject />
      <div className="main__techs">
        <LandingTitle
          title="Технологии"
          mod="landing-title__title_techs"
        />
        <Techs />
      </div>
      <LandingTitle
          title="Студент"
          mod=""
        />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
