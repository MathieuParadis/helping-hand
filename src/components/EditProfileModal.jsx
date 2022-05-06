// CONFIG IMPORTS
import React, {useEffect, useState, useRef, useContext} from 'react';

// CONTEXT IMPORTS
import FlashContext from './Context/FlashContext';
import UserContext from '../components/Context/UserContext';

import id_card_default from '../assets/images/rules/id_check.svg';

// ASSETS IMPORTS
import profile_icon from '../assets/logos/profile_logo.svg';
import plus_icon from '../assets/logos/plus_logo.svg';

const EditProfileModal = () => {
  const { setFlash } = useContext(FlashContext);
  const { user, setUser } = useContext(UserContext);
  const { id, first_name, last_name } = user;

  const [loaded, setLoaded] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [id_card, setId_card] = useState(id_card_default);
  const hiddenFileInput = useRef(null);

  const closeEditProfileModal = () => {
    const editProfileModal = document.querySelector(".edit-profile-modal");
    editProfileModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
    setFname(first_name);
    setLname(last_name);
    setId_card(id_card_default);
    setLoaded(false); 
  }

  const updateProfile = (e) => {
    e.preventDefault();

    const data = {
      first_name: fname,
      last_name: lname
    };

    const url = `http://localhost:3000/users/${id}`;
    const token = localStorage.getItem('jwt_token');

    fetch(url, {
      method: "PUT",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
        setUser(response.user);
        setFlash({
          type: 'success',
          message: "Profile updated successfully",
          display: true,
        })
      } else {
        console.log(response)
        setFlash({
          type: 'danger',
          message: response.error,
          display: true,
        })
      }
      closeEditProfileModal();
    })
    .catch(error => {
      closeEditProfileModal();
      setFlash({
        type: 'danger',
        message: error,
        display: true,
      })
    })
  }

  const handleClick = e => {
    hiddenFileInput.current.click();
  };

  const getFileName = (file) => {
    const indexSlash = file.lastIndexOf("/");
    const indexBackSlash = file.lastIndexOf("\\");
    file = file.slice(indexSlash + 1).slice(indexBackSlash + 1);

    const array = file.split(".");
    const fileName = array[0] + "." + array[array.length-1];
    return fileName;
  }

  const handleChange = () => {
    const labelHiddenFileInput = document.querySelector("#labelHiddenFileInput");
    labelHiddenFileInput.textContent = getFileName(id_card);
  }

  const scrollTopComponent = () => {
    const modalTitle = document.querySelector(".edit-profile-modal-title");
    modalTitle.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    if (user.first_name && !loaded) {
      setFname(user.first_name);
      setLname(user.last_name); 
      setLoaded(true);    
    }
  }, [user]);

  useEffect(() => {
    handleChange();
  }, [id_card]);

  useEffect(() => {
    scrollTopComponent();
  }, [user]);

  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-modal-overlay"></div>
      <div className="edit-profile-modal-white-bg">
        <div className="edit-profile-modal-content d-flex flex-column align-items-center w-100 p-4 p-md-5">
          <h2 className="edit-profile-modal-title text-primary fw-bold mb-5">Edit my information</h2>
          <div className="form-container d-flex flex-grow-1 w-100">
            <form onSubmit={updateProfile} className="d-flex flex-column justify-content-between w-100">
              <div>
                <div className="input mb-3">
                  <label htmlFor="first_name" className="mb-1">First name</label>
                  <input type="text" className="form-control" id="first-name" aria-describedby="first_name input field" placeholder="First name" minLength="2" maxLength="100" value={fname} onChange={(e) => setFname(e.target.value)} required />
                  <img src={profile_icon} alt="profile_icon" className="profile-icon" />
                </div>
                <div className="input my-3">
                  <label htmlFor="last_name" className="mb-1">Last name</label>
                  <input type="text" className="form-control" id="last-name" aria-describedby="last_name input field" placeholder="Last name" minLength="2" maxLength="100" value={lname} onChange={(e) => setLname(e.target.value)} required />
                  <img src={profile_icon} alt="profile_icon" className="profile-icon" />
                </div>
                <div className="file-input my-3">
                  <label htmlFor="ID" className="mb-1">ID&nbsp;<small className="caption">(.jpg, .png, and .pdf only)</small></label>
                  <div className="d-flex align-items-center">
                    <img src={plus_icon} alt="plus_icon" className="plus-icon pointer" onClick={handleClick} />
                    <p className="m-0 ps-3" id="labelHiddenFileInput">{getFileName(id_card_default)}</p>
                  </div>
                  <input type="file" className="" id="hiddenFileInput" aria-describedby="file input field" onInput={(e) => setId_card(e.target.value)} onChange={(e) => handleChange()} accept="image/png, image/jpeg, application/pdf" ref={hiddenFileInput} />
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-md-center mt-4">
                <button type="submit" className="btn button-success button-modal me-0 me-md-2 mb-3 mb-md-0 p-1">Update profile</button>
                <button type="reset" className="btn button-warning button-modal ms-0 ms-md-2 p-1" onClick={() => closeEditProfileModal()}>Back</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;