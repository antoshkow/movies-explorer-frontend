import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationLink.css';

function NavigationLink({ linkTo, linkText }) {

  return (
    <NavLink
      exact
      to={linkTo}
      className="link"
      activeClassName="link_active"
    >
      {linkText}
    </NavLink>
  );
}

export default NavigationLink;
