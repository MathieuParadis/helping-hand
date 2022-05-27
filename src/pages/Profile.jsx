// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import UserContext from '../components/Context/UserContext';

// ASSETS IMPORTS
import profile_illustration from '../assets/images/my_profile_illustration.svg';
import pdf_icon from '../assets/logos/pdf_icon.svg';

// COMPONENTS IMPORTS
import EditProfileModal from '../components/EditProfileModal';
import ModifyCredentialsModal from '../components/ModifyCredentialsModal';

const Profile = () => {
  const { user } = useContext(UserContext);
  const { first_name, last_name, email, id_card_url, position } = user;

  const [idCardFileName, setIdCardFileName] = useState("");
  const [idCardFileType, setIdCardFileType] = useState("");

  const openEditProfileModal = () => {
    const editProfileModal = document.querySelector(".edit-profile-modal");
    editProfileModal.style.visibility = 'visible';
    document.querySelector("body").classList.add("clicked");
  }

  const openModifyCredentialsModal = () => {
    const modifyCredentialsModal = document.querySelector(".modify-credentials-modal");
    modifyCredentialsModal.style.visibility = 'visible';
    document.querySelector("body").classList.add("clicked");
  }

  const getFileName = (fileURL) => {
    const name = fileURL.split("/").slice(-1)[0];
    return name
  }

  const getFileType = (fileURL) => {
    const name = fileURL.split(".").slice(-1)[0];
    return name
  }

  useEffect(() => {
    if (id_card_url) {
      setIdCardFileName(getFileName(id_card_url));
      setIdCardFileType(getFileType(id_card_url).toLowerCase());
    }
  }, [user, id_card_url]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <EditProfileModal />
      <ModifyCredentialsModal />
      <div className="profile bg2 margin-mobile">
        <div className="container d-flex justify-content-center align-items-center mx-0 w-100">
          <div className="box box-shadow border-radius-5 p-3 d-flex flex-row-reverse my-3">
            <div className="box-left d-none d-sm-flex flex-column justify-content-center align-items-center col-sm-6 ps-sm-3">
              <img src={profile_illustration} alt="Profile illustration" className="illustration" />
            </div>
            <div className="box-right d-flex flex-column justify-content-center col-12 col-sm-6 pe-sm-3">
              <h1 className="text-primary fw-bold pb-3 pb-md-4">My profile</h1>
              {
                user && (
                  <div>
                    <p><strong>First name</strong>: {first_name}</p>
                    <p><strong>Last name</strong>: {last_name}</p>
                    <p><strong>Latitude, Longitude</strong>: [{position.lat}°, {position.lng}°]</p>
                    <p><strong>Email</strong>: {email}</p>
                    <div className="d-flex">
                      <p><strong>ID</strong>:&nbsp;</p>
                      <div>
                        <p>{idCardFileName}</p>
                        <div className="id-card-box border-radius-5">
                          {
                            idCardFileType === "pdf" ? 
                            <img className="id-card" src={pdf_icon} alt="pdf icon"/> :
                            <img className="id-card" src={id_card_url} alt="ID card"/>
                          }
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-xl-row justify-content-xl-between mt-5">
                      <button className="profile-button btn button-primary border-radius-50 text-white mb-3 mb-xl-0" onClick={(e) => openEditProfileModal()}>Edit my profile</button>
                      <button className="profile-button btn button-outline-primary border-radius-50" onClick={(e) => openModifyCredentialsModal()}>Modify my credentials</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
