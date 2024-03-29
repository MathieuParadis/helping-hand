// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import FlashContext from './Context/FlashContext';
import UserContext from './Context/UserContext';

// ASSETS IMPORTS
import position_icon from '../assets/logos/position_logo.svg';

// CONSTANTS IMPORTS
import { API_ROOT } from '../constants/index';

const UserPositionModal = ({firstConnection}) => {
  const { setFlash } = useContext(FlashContext);
  const { user, setUser } = useContext(UserContext);
  const { id, first_name } = user;

  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

  const sharePosition = (e) => {
    e.preventDefault();
    
    var form_data = new FormData();
 
    let geoPosition = JSON.stringify({lat: lat, lng: long});
    form_data.append('position_attributes', geoPosition);

    const url = `${API_ROOT}/users/${id}`;
    
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
        // console.log(response);
        setUser(response.user);
        setFlash({
          type: 'success',
          message: "Position updated successfully",
          display: true,
        });
      } else {
        // console.log(response);
        setFlash({
          type: 'danger',
          message: response.error,
          display: true,
        });
      }
    })
    .catch(error => {
      // console.log(error);
      setFlash({
        type: 'danger',
        message: error,
        display: true,
      })
    })
  }
    
  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLat(Math.round(position.coords.latitude * 100000) / 100000);
          setLong(Math.round(position.coords.longitude * 100000) / 100000);
        },
        function (error) {
            // alert(error.code + ": " + error.message);
            console.log(error.code + ": " + error.message);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 10000,
          timeout: 5000
        }
      );
    } else {
      alert("Your browser does not support this functionality");
    }
  }

  const closeUserPositionModal = () => {
    const userPositionModal = document.querySelector(".user-position-modal");
    userPositionModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  const updateAndClose = () => {
    setLat(48.86472);
    setLong(2.34901);
    closeUserPositionModal();
  }

  const scrollTopComponent = () => {
    const modalTitle = document.querySelector(".user-position-modal-title");
    modalTitle.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    scrollTopComponent();
  }, []);

  return (
    <div className="user-position-modal">
      <div className="user-position-modal-overlay"></div>
      <div className="user-position-modal-white-bg">
        <div className="user-position-modal-content d-flex flex-column justify-content-between align-items-center w-100 p-4 p-md-5">
          <h2 className="user-position-modal-title text-primary text-center fw-bold mb-5">Set up your position</h2>
          <div className="form-container d-flex flex-grow-1 w-100">
            <form onSubmit={sharePosition} className="d-flex flex-column justify-content-between w-100">
              <p>Dear <strong>{first_name}</strong>,</p>
              {
                firstConnection ? 
                (
                  <p>
                    Thank you for joining the Helping Hand community.<br></br>
                    Before continuing to the app, we need you to share your position with us in order to be able to show you requests around you.<br></br>
                    If you choose to update your position later, we will assign you a default position. Though, this window will keep popping as long as your saved position and actual location do not match.<br></br>
                  </p>
                ) :
                (
                  <p>
                    Seems your saved position and your actual location do not match. Please update it so that we can show you requests around you.<br></br>
                  </p>
                )
              }
              <p>
                For information, you can change your position anytime by going to <em className="fst-italic">my profile</em>, and then click on <em className="fst-italic">edit my profile</em>.
              </p>
              <div className="geo-position-section d-flex flex-column my-4">
                <div className="d-flex flex-column flex-md-row mb-0 mb-md-3">
                  <div className="input mb-3 mb-md-0 me-0 me-md-2">
                    <label htmlFor="latitude" className="mb-1">Latitude&nbsp;<small className="caption">[-90; +90]°</small></label>
                    <input type="number" className="form-control" id="latitude-user-profile" aria-describedby="latitude input field" min="-90" max="90" step="0.00001" placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} required />
                    <img src={position_icon} alt="position icon" className="position-icon" />
                  </div>
                  <div className="input mb-3 mb-md-0 ms-0 ms-md-2">
                    <label htmlFor="longitude" className="mb-1">Longitude&nbsp;<small className="caption">[-180; +180]°</small></label>
                    <input type="number" className="form-control" id="longitude-user-profile" aria-describedby="longitude input field" min="-180" max="180" step="0.00001" placeholder="Longitude" value={long} onChange={(e) => setLong(e.target.value)} required />
                    <img src={position_icon} alt="position icon" className="position-icon" />
                  </div>
                </div>
                <button type="reset" className="btn button-outline-primary button-w150 p-1" onClick={() => getPosition()}>Use my position</button>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-md-center mt-4">
                <button type="submit" className="btn button-success button-modal me-0 me-md-2 mb-3 mb-md-0 p-1">Update position</button>
                <button type="submit" className="btn button-warning button-modal ms-0 ms-md-2 p-1" onClick={() => updateAndClose()}>Update later</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPositionModal;