// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <p className="title fw-bold text-primary">Oops!</p>
        <p className="h3 text-center">We can't seem to find the page you're looking for.</p>
        <p className="pt-2">Error code: 404</p>
        <NavLink exact="true" to="/" className="btn button-outline-primary border-radius-50 h4 mb-0">Back to homepage</NavLink>
      </div>
    </div>
  );
};

export default NotFound;