// CONFIG IMPORTS
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// COMPONENTS IMPORTS
import HamburgerMenu from './HamburgerMenu';

// ASSETS IMPORTS
import logo from '../assets/logos/helping_hand_logo_with_text.svg';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const refreshPage = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <HamburgerMenu />
      <div className="navigation">


        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={logo} alt="Helping Hand logo" className="logo pointer me-4 me-xl-5" onClick={refreshPage} />
            <div>
              <NavLink exact="true" to="/" className="navlink h4 me-2 me-xl-4 mb-0">Home</NavLink>
              <NavLink exact="true" to="/how-it-works" className="navlink h4 me-2 me-xl-4 mb-0">How it works</NavLink>
            </div>
          </div>
          fdsgfd
        </div>






      </div> 
    </>
  );
};

export default Navigation;