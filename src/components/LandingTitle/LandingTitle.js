import React from 'react';
import './LandingTitle.css';

function LandingTitle({ title, mod }) {
  return (
    <div className="landing-title">
      <h2 className={`landing-title__title ${mod}`}>
        {title}
      </h2>
    </div>
  );
}

export default LandingTitle;
