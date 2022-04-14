// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

// ASSETS IMPORTS
import profile_illustration from '../assets/images/my_profile_illustration.svg';

const Profile = () => {
  const postResetPasswordRequest = (e) => {
    alert("reset password request");
  }
  
  return (
    <div className="profile">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="box box-shadow border-radius-5 p-3 d-flex flex-row-reverse my-3">
          <div className="box-left d-none d-md-flex flex-column justify-content-center align-items-center col-md-6 ps-md-3">
            <img src={profile_illustration} alt="Profile illustration" className="illustration" />
          </div>
          <div className="box-right d-flex flex-column justify-content-center col-12 col-md-6 pe-md-3">
            <h1 className="text-primary fw-bold pb-3">My profile</h1>
            <div>
              <p><strong>First name</strong>: Mathieu</p>
              <p><strong>Last name</strong>: Paradis</p>
              <p><strong>Email</strong>: mathieu@gmail.com</p>
              <div className="d-flex">
                <p><strong>ID</strong>:&nbsp;</p>
                <div id="id-card">
fg
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Profile;
