// CONFIG IMPORTS
import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';

// COMPONENTS IMPORTS
import TestimonyCard from '../components/TestimonyCard';

// DATA IMPORTS
import testimonials from '../data/Testimonials';

// ASSETS IMPORTS

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="bg-picture"></div>
        <div className="hero-content d-flex flex-column justify-content-center align-items-center justify-content-md-start align-items-md-start">
          <h1 className="hero-title text-white fw-bold">Make a difference right<br></br>outside your door</h1>
          <p className="hero-sub-title text-white my-2">Help someone in need</p>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-start mt-4 pt-4">
            <NavLink exact="true" to="/signup" className="btn button-w250 button-primary hero-button mb-3 mb-md-0 me-md-3">Join today</NavLink>
            <NavLink exact="true" to="/how-it-works" className="btn button-w250 button-secondary hero-button ms-md-3">Learn more</NavLink>
          </div>
        </div>
      </div>

      <div className="rules-section">
        <div className="colored-bg">

        

        </div>
      </div>

      <div className="testimonials-section row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-4">
        { 
          testimonials.map((testimony) => {
            return (
              <TestimonyCard testimony={testimony} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Home;