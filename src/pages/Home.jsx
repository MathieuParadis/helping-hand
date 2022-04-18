// CONFIG IMPORTS
import React, {useEffect} from 'react';

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
        <div className="hero-content">
        </div>
      </div>

      <div className="rules-section">
        <div className="colored-bg">

        

        </div>
      </div>

      <div className="testimonials-section row row-cols-1 row-cols-md-3 g-4 py-4">
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