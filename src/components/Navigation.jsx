// CONFIG IMPORTS
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// REACT BOOTSTRAP IMPORTS
import { DropdownButton, Dropdown } from 'react-bootstrap';

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

  const openModalNewRequest = () => {
    alert("new request");
  }

  const signOut = () => {
    loggedIn = false;
  }

  let loggedIn = true;

  return (
    <>
      <HamburgerMenu />
      <div className="navigation">

        {!loggedIn ? 
          (
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={logo} alt="Helping Hand logo" className="logo pointer me-5" onClick={refreshPage} />
                <div className="d-none d-lg-flex">
                  <NavLink exact="true" to="/" className="navlink h4 me-4 me-xl-4 mb-0">Home</NavLink>
                  <NavLink exact="true" to="/how-it-works" className="navlink h4 mb-0">How it works</NavLink>
                </div>
              </div>
              <div className="connection-buttons d-none d-lg-flex">
                <NavLink exact="true" to="/signup" className="btn button-w150 button-primary h4 me-3 mb-0">Sign up</NavLink>
                <NavLink exact="true" to="/signin" className="btn button-w150 button-outline-primary h4 mb-0">Log in</NavLink>
              </div>
            </div>
          ) :
          (
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={logo} alt="Helping Hand logo" className="logo pointer me-5" onClick={refreshPage} />
                <div className="d-none d-lg-flex">
                  <NavLink exact="true" to="/" className="navlink h4 me-4 me-xl-4 mb-0">Home</NavLink>
                  <NavLink exact="true" to="/how-it-works" className="navlink h4 me-4 me-xl-4 mb-0">How it works</NavLink>
                  <p className="navlink h4 mb-0" onClick={() =>openModalNewRequest}>New Request</p>
                </div>
              </div>           
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item>
                  <NavLink exact="true" to="/my-profile" className="">My profile</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink exact="true" to="/my-requests" className="">My requests</NavLink>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <div onClick={() => signOut()}>
                  <i class="fa-solid fa-power-off"></i>


                  </div>
                </Dropdown.Item>
                

              </DropdownButton>
            </div>
          )
        }
      </div> 
    </>
  );
};

export default Navigation;