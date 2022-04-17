// CONFIG IMPORTS
import React from 'react';

// DATA IMPORTS
import testimonials from '../data/Testimonials';

// ASSETS IMPORTS
import bg from '../assets/images/pattern2.svg';

const TestimonyCard = () => {
  return (
    <div className="testimony-card col-12 col-md-6 col-lg-4 px-4 py-3">
      <div className="card-content d-flex flex-column">

        <div className="card-top">
          <img src={bg} id="test" />
          <img src={testimonials[0].img_url} alt={testimonials[0].name + " photo"} className="pic" />
        </div>

        <div className="card-bottom col-8">
          <p>Content bootom</p>
          <p>Content bootom</p>
          <p>Content bootom</p>
          <p>Content bootom</p>
          <p>Content bootom</p>
          <p>Content bootom</p>
          <p>Content bootom</p>


        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;