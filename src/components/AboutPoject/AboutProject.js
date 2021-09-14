import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <div className="about-project__main">
          <div className="about-project__main-column">
            <h3 className="about-project__main-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__main-description">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div>
            <h3 className="about-project__main-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__main-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__band">
          <div className="about-project__band-back">1 неделя</div>
          <div className="about-project__band-front">4 недели</div>
        </div>
        <div className="about-project__band">
          <div className="about-project__band-back about-project__band-back_bottom">Back-end</div>
          <div className="about-project__band-front about-project__band-front_bottom">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
