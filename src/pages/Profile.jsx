// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

// ASSETS IMPORTS
import profile_illustration from '../assets/images/my_profile_illustration.svg';
import id_icon from '../assets/logos/id_logo.svg';

const Profile = () => {
  const openEditProfileModal = (e) => {
    alert("opening edit profile modal");
  }

  const openModifyCredentialsModal = (e) => {
    alert("opening modifiy credentials modal");
  }
  
  return (
    <div className="profile">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="box box-shadow border-radius-5 p-3 d-flex flex-row-reverse my-3">
          <div className="box-left d-none d-sm-flex flex-column justify-content-center align-items-center col-sm-6 ps-sm-3">
            <img src={profile_illustration} alt="Profile illustration" className="illustration" />
          </div>
          <div className="box-right d-flex flex-column justify-content-center col-12 col-sm-6 pe-sm-3">
            <h1 className="text-primary fw-bold pb-3 pb-md-4">My profile</h1>
            <div>
              <p><strong>First name</strong>: Mathieu</p>
              <p><strong>Last name</strong>: Paradis</p>
              <p><strong>Email</strong>: mathieu@gmail.com</p>
              <div className="d-flex">
                <p><strong>ID</strong>:&nbsp;</p>
                <div className="id-card-box border-radius-5">
                  <img className="id-card" src={id_icon} alt="ID card"/>
                </div>
              </div>
              <div className="d-flex flex-column flex-xl-row justify-content-xl-between mt-5">
                <button type="submit" className="profile-button btn button-primary text-white mb-3 mb-xl-0" id="signup-btn" onClick={(e) => openEditProfileModal()}>Edit my profile</button>
                <button type="submit" className="profile-button btn button-outline-primary" id="signup-btn" onClick={(e) => openModifyCredentialsModal()}>Modify my credentials</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Profile;
