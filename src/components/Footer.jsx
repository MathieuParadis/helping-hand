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
        <div className="d-none d-md-block align-self-lg-start col-7 col-xl-8 mb-4 mb-lg-0">
          <h4 className="mb-3 text-center text-lg-start"><strong>About us</strong></h4>
          <p className="mb-0 text-justify">
            Helping Hand is a local charity whose mission is to help to build a strong community by promoting the good.
            We aim to educate, and inspire people to embrace kindness and charitable giving, and in doing so, be the change they want to be in the world.
            To achieved this goal, we have developed a plateform to help connecting people in need with volunteers within the community.
            We believe that by making it easier for people to give and reach out to help those less fortunate than themselves, they will feel empowered and are more likely to volunteer. 
          </p>
        </div>
        <div className="align-self-lg-start">
          <h4 className="mb-3 text-center text-lg-start"><strong>Follow us</strong></h4>
          <div className="mb-3 text-center text-lg-start">
            <a href="https://twitter.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-twitter-square" size="3x" className="navlink"/>
            </a>
            <a href="https://facebook.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-facebook-square" size="3x" className="navlink mx-4"/>
            </a>
            <a href="https://instagram.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-instagram" size="3x" className="navlink"/>
            </a>
          </div>
          <div className="mb-4 mb-lg-0 text-center text-lg-start">
            <a href="https://twitter.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" size="3x" className="navlink"/>
            </a>
            <a href="https://facebook.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-pinterest" size="3x" className="navlink mx-4"/>
            </a>
            <a href="https://instagram.com/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-youtube-square" size="3x" className="navlink"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;