// CONFIG IMPORTS
import React from 'react';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ASSETS IMPORTS
import logo from '../assets/logos/helping_hand_logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <img src={logo} alt="Boulder Bike Tour logo" className="logo mb-4 mb-lg-0" />
        <div className="align-self-lg-start col-7 col-xl-8 mb-4 mb-lg-0">
          <h4 className="mb-3 text-center text-lg-start"><strong>About us</strong></h4>
          <p className="mb-0 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="align-self-lg-start">
          <h4 className="mb-3 text-center text-lg-start"><strong>Follow us</strong></h4>
          <div className="mb-3 text-center text-lg-start">
            <a href="https://twitter.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-twitter-square" size="3x" className="navlink"/>
            </a>
            <a href="https://facebook.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-facebook-square" size="3x" className="navlink mx-3"/>
            </a>
            <a href="https://instagram.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-instagram" size="3x" className="navlink"/>
            </a>
          </div>
          <div className="mb-4 mb-lg-0 text-center text-lg-start">
            <a href="https://twitter.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-twitter-square" size="3x" className="navlink"/>
            </a>
            <a href="https://facebook.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-facebook-square" size="3x" className="navlink mx-3"/>
            </a>
            <a href="https://instagram.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-instagram" size="3x" className="navlink"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;