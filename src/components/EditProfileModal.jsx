// CONFIG IMPORTS
import React, { useEffect, useState, useRef, useContext } from 'react';

// CONTEXT IMPORTS
import FlashContext from './Context/FlashContext';
import UserContext from '../components/Context/UserContext';

// ASSETS IMPORTS
import position_icon from '../assets/logos/position_logo.svg';
import profile_icon from '../assets/logos/profile_logo.svg';
import plus_icon from '../assets/logos/plus_logo.svg';

// DATA IMPORTS
import baseURL from '../data/BaseURL';

const EditProfileModal = () => {
  const { setFlash } = useContext(FlashContext);
  const { user, setUser } = useContext(UserContext);
  const { id, first_name, last_name, id_card_url, position } = user;

  const acceptedFileTypes = ['pdf', 'png', 'jpg', 'jpeg'];

  const [loaded, setLoaded] = useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [idCardFile, setIdCardFile] = useState(null);
  const [idCardFileName, setIdCardFileName] = useState('');
  const [idCardFileType, setIdCardFileType] = useState(null);
  const hiddenFileInput = useRef(null);

  const closeEditProfileModal = () => {
    const editProfileModal = document.querySelector(".edit-profile-modal");
    editProfileModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
    setFname(first_name);
    setLname(last_name);
    setLat(position.lat);
    setLong(position.lng);
    setIdCardFile('');
    setIdCardFileName(getFileName(id_card_url));
    setLoaded(false); 
  }

  const updateProfile = (e) => {
    e.preventDefault();
    
    let form_data = new FormData();
    form_data.append('first_name', fname);
    form_data.append('last_name', lname);

    let geoPosition = JSON.stringify({lat: lat, lng: long});
    form_data.append('position_attributes', geoPosition);

    if (idCardFile) {
      form_data.append('id_card', idCardFile, idCardFile.name);
    }

    if (idCardFileName) {
      if ( acceptedFileTypes.includes(idCardFileType)) {

        const url = `${baseURL}/users/${id}`;
        
        const token = localStorage.getItem('jwt_token');
    
        fetch(url, {
          method: "PUT",
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
          body: form_data,
        })
        .then(response => {
          // console.log(response);
          return response.json()
        })
        .then(response => {
          // console.log(response);
          if (response.user) {
            localStorage.setItem('user', JSON.stringify(response.user));
            console.log(response)
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
      } else {
        setFlash({
          type: 'danger',
          message: "The file type you uploaded is incorrect",
          display: true,
        })
      }
    } else {
      setFlash({
        type: 'danger',
        message: "File with your ID card is missing",
        display: true,
      })
    }
  }

  const handleClick = e => {
    hiddenFileInput.current.click();
  };

  const handleChange = () => {
    if (idCardFile && idCardFile.name) {
      setIdCardFileName(idCardFile.name);
      setIdCardFileType(idCardFile.name.split(".").slice(-1)[0].toLowerCase());
    } 
  }

  const scrollTopComponent = () => {
    const modalTitle = document.querySelector(".edit-profile-modal-title");
    modalTitle.scrollIntoView({ behavior: 'smooth' });
  }

  const getFileName = (fileURL) => {
    const name = fileURL.split("/").slice(-1)[0];
    return name
  }

  const getFileType = (fileURL) => {
    const name = fileURL.split(".").slice(-1)[0];
    return name
  }

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    } else {
      alert("Your browser does not support this functionality");
    }
  }

  useEffect(() => {
    if (user.first_name && !loaded) {
      setFname(user.first_name);
      setLname(user.last_name); 
      setLat(user.position.lat); 
      setLong(user.position.lng); 
      setIdCardFileName(getFileName(user.id_card_url));
      setIdCardFileType(getFileType(id_card_url).toLowerCase());
      setLoaded(true);  
    }
  }, [user, loaded]);

  useEffect(() => {
    handleChange();
  }, [idCardFile]);

  useEffect(() => {
    scrollTopComponent();
  }, [user]);

  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-modal-overlay"></div>
      <div className="edit-profile-modal-white-bg">
        <div className="edit-profile-modal-content d-flex flex-column align-items-center w-100 p-4 p-md-5">
          <h2 className="edit-profile-modal-title text-primary text-center fw-bold mb-5">Edit my information</h2>
          <div className="form-container d-flex flex-grow-1 w-100">
            <form onSubmit={updateProfile} className="d-flex flex-column justify-content-between w-100">
              <div>
                <div className="input mb-3">
                  <label htmlFor="first_name" className="mb-1">First name</label>
                  <input type="text" className="form-control" id="first-name" aria-describedby="first_name input field" placeholder="First name" minLength="2" maxLength="100" value={fname} onChange={(e) => setFname(e.target.value)} required />
                  <img src={profile_icon} alt="profile icon" className="profile-icon" />
                </div>
                <div className="input my-3">
                  <label htmlFor="last_name" className="mb-1">Last name</label>
                  <input type="text" className="form-control" id="last-name" aria-describedby="last_name input field" placeholder="Last name" minLength="2" maxLength="100" value={lname} onChange={(e) => setLname(e.target.value)} required />
                  <img src={profile_icon} alt="profile icon" className="profile-icon" />
                </div>
                <div className="geo-position-section d-flex flex-column my-4">
                  <h5 className="mb-2">Geographical coordinates</h5>
                  <div className="d-flex flex-column flex-md-row mb-0 mb-md-3">
                    <div className="input mb-3 mb-md-0 me-0 me-md-2">
                      <label htmlFor="latitude" className="mb-1">Latitude</label>
                      <input type="number" className="form-control" id="latitude-user-profile" aria-describedby="latitude input field" placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} required />
                      <img src={position_icon} alt="position icon" className="position-icon" />
                    </div>
                    <div className="input mb-3 mb-md-0 ms-0 ms-md-2">
                      <label htmlFor="longitude" className="mb-1">Longitude</label>
                      <input type="number" className="form-control" id="longitude-user-profile" aria-describedby="longitude input field" placeholder="Longitude" value={long} onChange={(e) => setLong(e.target.value)} required />
                      <img src={position_icon} alt="position icon" className="position-icon" />
                    </div>
                  </div>
                  <button type="reset" className="btn button-outline-primary button-w150 p-1" onClick={() => getPosition()}>Use my position</button>
                </div>
                <div className="file-input my-3">
                  <label htmlFor="ID" className="mb-1">ID&nbsp;<small className="caption">(.jpg, .png, and .pdf only)</small></label>
                  <div className="d-flex align-items-center">
                    <img src={plus_icon} alt="plus_icon" className="plus-icon pointer" onClick={handleClick} />
                    <p className="m-0 ps-3" id="labelHiddenFileInput">{idCardFileName}</p>
                  </div>
                  <input type="file" className="" id="hiddenFileInput" aria-describedby="file input field" onInput={(e) => setIdCardFile(e.target.files[0])} onChange={(e) => handleChange()} accept="image/png, image/jpeg, application/pdf" ref={hiddenFileInput} />
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