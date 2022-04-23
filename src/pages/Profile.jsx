// CONFIG IMPORTS
import React, {useEffect} from 'react';

// DATA IMPORTS
import user from '../data/User';

// COMPONENTS IMPORTS
import EditProfileModal from '../components/EditProfileModal';
import ModifyCredentialsModal from '../components/ModifyCredentialsModal';

// ASSETS IMPORTS
import profile_illustration from '../assets/images/my_profile_illustration.svg';

const Profile = () => {
  const {first_name, last_name, email, id} = user[0];

  const openEditProfileModal = (e) => {
    const editProfileModal = document.querySelector(".edit-profile-modal");
    editProfileModal.style.visibility = 'visible';
    document.querySelector("body").classList.add("clicked");
  }

  const openModifyCredentialsModal = (e) => {
    const modifyCredentialsModal = document.querySelector(".modify-credentials-modal");
    modifyCredentialsModal.style.visibility = 'visible';
    document.querySelector("body").classList.add("clicked");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <EditProfileModal userData={user[0]} />
      <ModifyCredentialsModal userData={user[0]} />
      <div className="profile bg2 margin-mobile">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="box box-shadow border-radius-5 p-3 d-flex flex-row-reverse my-3">
            <div className="box-left d-none d-sm-flex flex-column justify-content-center align-items-center col-sm-6 ps-sm-3">
              <img src={profile_illustration} alt="Profile illustration" className="illustration" />
            </div>
            <div className="box-right d-flex flex-column justify-content-center col-12 col-sm-6 pe-sm-3">
              <h1 className="text-primary fw-bold pb-3 pb-md-4">My profile</h1>
              <div>
                <p><strong>First name</strong>: {first_name}</p>
                <p><strong>Last name</strong>: {last_name}</p>
                <p><strong>Email</strong>: {email}</p>
                <div className="d-flex">
                  <p><strong>ID</strong>:&nbsp;</p>
                  <div className="id-card-box border-radius-5">
                    <img className="id-card" src={id} alt="ID card"/>
                  </div>
                </div>
                <div className="d-flex flex-column flex-xl-row justify-content-xl-between mt-5">
                  <button className="profile-button btn button-primary border-radius-50 text-white mb-3 mb-xl-0" onClick={(e) => openEditProfileModal()}>Edit my profile</button>
                  <button className="profile-button btn button-outline-primary border-radius-50" onClick={(e) => openModifyCredentialsModal()}>Modify my credentials</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Profile;
