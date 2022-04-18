// CONFIG IMPORTS
import React from 'react';

// ASSETS IMPORTS
import pattern2 from '../assets/images/pattern2.svg';

const TestimonyCard = ({testimony}) => {
  return (
    <div className="testimony-card py-3">
      <div className="card-content d-flex flex-column">

        <div className="card-top">
          <img src={pattern2} className="card-pattern" alt="card decoration pattern" />
          <img src={testimony.img_url} alt={testimony.name + " photo"} className="picture" />
        </div>

        <div className="card-bottom d-flex flex-column justify-content-center align-items-center">
          <h4 className="fw-bold text-center mb-3">{testimony.name}</h4>
          <p className="mx-3 mb-0 text-justify">{testimony.testimony}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;