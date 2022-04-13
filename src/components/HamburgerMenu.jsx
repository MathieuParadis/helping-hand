// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = () => {
  let loggedIn = true;

  const handleMenu = () => {
    document.querySelector(".span1").classList.toggle("clicked");
    document.querySelector(".span2").classList.toggle("clicked");
    document.querySelector(".span3").classList.toggle("clicked");
    document.querySelector(".overlay").classList.toggle("clicked");
    document.querySelector(".menu").classList.toggle("clicked");
    document.querySelector("body").classList.toggle("clicked");
  };

  const openModalNewRequest = () => {
    handleMenu();
    alert("new request");
  }

  const signOut = () => {
    handleMenu();
    alert("logging out");
  }

  return (
    <div>
      <div className="hamburger-box" onClick={handleMenu}>
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
      </div>
      <div className="overlay"></div>
      {!loggedIn ? 
        (
          <div className="menu">
            <NavLink className="menu-link my-2" exact="true" to="/" onClick={handleMenu}>Home</NavLink>
            <NavLink className="menu-link my-2" exact="true" to="/how-it-works" onClick={handleMenu}>How it works</NavLink>
            <NavLink exact="true" to="/signup" className="btn button-w200 button-primary h4 my-2 py-2" onClick={handleMenu}>Sign up</NavLink>
            <NavLink exact="true" to="/signin" className="btn button-w200 button-outline-primary h4 my-2 py-2" onClick={handleMenu}>Sign in</NavLink>
          </div>
        ) :
        (
          <div className="menu">
            <NavLink className="menu-link my-2" exact="true" to="/" onClick={handleMenu}>Home</NavLink>
            <NavLink className="menu-link my-2" exact="true" to="/how-it-works" onClick={handleMenu}>How it works</NavLink>
            <p className="menu-item my-2" onClick={() => openModalNewRequest()}>New request</p>
            <NavLink className="menu-link my-2" exact="true" to="/my-profile" onClick={handleMenu}>My profile</NavLink>
            <NavLink className="menu-link my-2" exact="true" to="/my-requests" onClick={handleMenu}>My requests</NavLink>
            <p className="btn button-w200 button-danger h4 my-2 py-2" onClick={() => signOut()}>Log out</p>
          </div>
        )
      }
    </div>
  );
};

export default HamburgerMenu;