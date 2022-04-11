// CONFIG IMPORTS
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// COMPONENTS IMPORTS

// ASSETS IMPORTS
// import logo from '../assets/logos/logo_name.svg';

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
    <div className="navigation">
      navbar
    </div>    
  );
};

export default Navigation;