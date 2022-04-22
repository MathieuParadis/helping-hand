// CONFIG IMPORTS
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// REACT BOOTSTRAP IMPORTS
import { DropdownButton, Dropdown } from 'react-bootstrap';

// COMPONENTS IMPORTS
import HamburgerMenu from './HamburgerMenu';

// ASSETS IMPORTS
import logo from '../assets/logos/helping_hand_logo_with_text.svg';
import profile_round_logo from '../assets/logos/profile_round_logo.svg';
import logout_logo from '../assets/logos/logout_logo.svg';

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

  const openNewUserRequestModal = (e) => {
    const newUserRequestModal = document.querySelector(".new-user-request-modal");
    newUserRequestModal.style.visibility = 'visible';
    document.querySelector("body").classList.add("clicked");
  }

  const signOut = () => {
    alert("logging out");
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
                <NavLink exact="true" to="/signup" className="btn button-w150 button-primary border-radius-50 h4 me-3 mb-0">Sign up</NavLink>
                <NavLink exact="true" to="/signin" className="btn button-w150 button-outline-primary border-radius-50 h4 mb-0">Log in</NavLink>
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
                  <p className="navlink h4 mb-0" onClick={() => openNewUserRequestModal()}>New request</p>
                </div>
              </div>           
              <DropdownButton 
                className="d-none d-lg-flex"
                title={<img src={profile_round_logo} alt="logout logo" className="profile-logo pointer me-2" />}
              >
                <Dropdown.Item href="/my-profile">My profile</Dropdown.Item>
                <Dropdown.Item href="/my-requests">My requests</Dropdown.Item>
                <Dropdown.Item href="/my-chats">My chats</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <div className="d-flex" onClick={() => signOut()}>
                    <img src={logout_logo} alt="logout logo" className="logout-logo pointer me-2" />
                    <p className="mb-0">Log out</p>
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