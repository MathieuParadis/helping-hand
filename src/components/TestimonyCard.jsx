// CONFIG IMPORTS
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// DATA IMPORTS
import testimonials from '../data/Testimonials';

// ASSETS IMPORTS
import bg from '../assets/images/pattern1.svg';
import pic from '../assets/images/pattern2.svg';

const TestimonyCard = () => {
  return (
    <div className="testimony-card col-12 col-md-6 col-lg-4 px-2">

      <div className="card-content">
        <img src={testimonials[0].img_url} alt={testimonials[0].name + " photo"} />
        {/* <div className="rider-info">
          <h3 className="name text-center h2">{rider.first_name}</h3>
          <h3 className="name text-center mb-4 h2">{rider.last_name}</h3>
          <p className="text-center mt-2 mb-3 h5"><strong>City: </strong>{rider.city}</p>
          <p className="text-center h5"><strong>State: </strong>{rider.state}</p>
          <p className="btn-locate-rider text-center h5 my-3 p-3 mb-0" onClick={() => setOpenModal(rider)}>Locate {rider.first_name}</p>
        </div> */}
      </div>


    </div>
  );
};

export default TestimonyCard;