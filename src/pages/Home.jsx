// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import TestimonyCard from '../components/TestimonyCard';

// ASSETS IMPORTS

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="bg-picture"></div>
        <div className="hero-content">
        </div>
      </div>

      <div className="rules-section">
        <div className="colored-bg">
        </div>
      </div>

      <div className="testimonials-section">
        <TestimonyCard />
      </div>

    </div>
  );
};

export default Home;