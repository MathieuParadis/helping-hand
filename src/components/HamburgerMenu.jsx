// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HamburgerMenu = () => {

  const handleMenu = () => {
    document.querySelector(".span1").classList.toggle("clicked");
    document.querySelector(".span2").classList.toggle("clicked");
    document.querySelector(".span3").classList.toggle("clicked");
    document.querySelector(".overlay").classList.toggle("clicked");
    document.querySelector(".menu").classList.toggle("clicked");
    document.querySelector("body").classList.toggle("clicked");
  };

  return (
    <div>
      <div className="hamburger-box" onClick={handleMenu}>
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
      </div>
      <div className="overlay"></div>
      <div className="menu">
        {/* <NavLink className="menu-link my-2" exact="true" to="/" onClick={handleMenu}>Home</NavLink>
        <NavLink className="menu-link my-2" exact="true" to="/race" onClick={handleMenu}>Race</NavLink>
        <NavLink className="menu-link my-2" exact="true" to="/area" onClick={handleMenu}>About the area</NavLink>
        <NavLink className="menu-link my-2" exact="true" to="/photos" onClick={handleMenu}>Gallery</NavLink> 
        <NavLink className="menu-link my-2" exact="true" to="/riders" onClick={handleMenu}>Riders</NavLink>
        <NavLink className="menu-link my-2" exact="true" to="/riders-locations" onClick={handleMenu}>Locate Riders</NavLink> */}

        hamburger menu

      </div>
    </div>
  );
};

export default HamburgerMenu;