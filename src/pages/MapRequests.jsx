// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import FlashContext from '../components/Context/FlashContext';
import UserContext from '../components/Context/UserContext';

// PIGEON MAPS IMPORTS
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers';

// REACT LOADING IMPORTS
import ReactLoading from 'react-loading';

// COMPONENTS IMPORTS
import EditRequestModal from '../components/EditRequestModal';
import ShowRequestModal from '../components/ShowRequestModal';

// DATA IMPORTS
import baseURL from '../data/BaseURL';

const maptilerProvider = maptiler('IwympTEN2FYbP2g5qdck', 'streets')

const MapRequests = () => {
  const { setFlash } = useContext(FlashContext);
  const { user } = useContext(UserContext);
  const { position } = user

  const [loaded, setLoaded] = useState(false);
  const [requests, setRequests] = useState();
  const [center, setCenter] = useState(false); 
  const [zoom, setZoom] = useState(16);
  const [currentRequest, setCurrentRequest] = useState("");

  let centerLat = 0;
  let centerLng = 0;

  if (center) {
    [centerLat, centerLng] = center;
  }

  const colorMaterial = "#F4A896";
  const colorService = "#262F53";

  const getRequests = () => {
    const url = `${baseURL}/requests/${centerLat}/${centerLng}`;
    console.log(url);

    const token = localStorage.getItem('jwt_token');

    fetch(url, {
      method: "GET",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    })
    .then(response => {
      // console.log(response);
      return response.json()
    })
    .then(response => {
      // console.log(response);
      setRequests(response);
    })
    .catch(errors => {
      // console.log(errors);
      setFlash({
        type: 'danger',
        message: "An error occured, please try again",
        display: true,
      })
    })
  }

  const MarkerColorChoice = (request) => {
    return request.request_type === "material" ? colorMaterial : colorService;
  }

  const displayBubbleRequestInfo = (request) => {
    setCurrentRequest(request);
    setCenter([request.lat, request.lng]);
    setZoom(13);

    const bubbleRequest = document.querySelector(".bubble-request");
    bubbleRequest.style.visibility = 'visible';
  }

  const closeBubbleRequestInfo = () => {
    const bubbleRequest = document.querySelector(".bubble-request");

    bubbleRequest.style.visibility = 'hidden';
    setZoom(12);
  }

  const openShowRequestModal = () => {
    const newRequestModal = document.querySelector(".new-request-modal");
    const showRequestModal = document.querySelector(".show-request-modal");
    const editRequestModal = document.querySelector(".edit-request-modal");

    newRequestModal.style.visibility = 'hidden';
    showRequestModal.style.visibility = 'visible';
    editRequestModal.style.visibility = 'hidden';
    document.querySelector("body").classList.add("clicked");
  }

  const openEditRequestModal = () => {
    const newRequestModal = document.querySelector(".new-request-modal");
    const showRequestModal = document.querySelector(".show-request-modal");
    const editRequestModal = document.querySelector(".edit-request-modal");

    newRequestModal.style.visibility = 'hidden';
    showRequestModal.style.visibility = 'hidden';
    editRequestModal.style.visibility = 'visible';
    document.querySelector("body").classList.add("clicked");
  }

  const closeShowRequestModal = () => {
    const showRequestModal = document.querySelector(".show-request-modal");
    showRequestModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  const markRequestAsFulfilled = (request) => {
    setCurrentRequest(request);

    const { id } = request

    const data = {
      status: "fulfilled"
    };

    const url = `${baseURL}/requests/${id}`;
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
      // console.log(response);
      return response.json();
    })
    .then(response => {
      // console.log(response);
      closeShowRequestModal();
      closeBubbleRequestInfo();
      if (response.message) {
        setFlash({
          type: 'success',
          message: 'Request marked as fulfilled',
          display: true,
        });
      } else {
        setFlash({
          type: 'danger',
          message: response.error,
          display: true,
        })
      }
    })
    .catch(error => {
      // console.log(error);
      closeShowRequestModal();
      closeBubbleRequestInfo();
      setFlash({
        type: 'danger',
        message: error,
        display: true,
      })
    })
  }
  
  useEffect(() => {
    if (position && !loaded) {
      setCenter([parseFloat(position.lat), parseFloat(position.lng)]);
      setLoaded(true);
    }
  }, [position]);

  useEffect(() => {
    getRequests();
  }, [requests]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ShowRequestModal request={currentRequest} setOpenEditModal={openEditRequestModal} setMarkRequestAsFulfilled={markRequestAsFulfilled} />
      <EditRequestModal request={currentRequest} />
      <div className="map-requests">
        <div className="d-flex flex-column justify-content-center align-items-center mx-0 my-3 py-3">
          <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">Requests around me</h1>
            { requests &&
              <h5 className="counter align-self-md-start text-center text-md-start">
                There are <strong>{requests.length}</strong> help requests around you.<br></br>Start volunteering now!
              </h5>
            }
          <div className="caption d-flex flex-column flex-md-row align-self-start mb-4">
            <div className="d-flex align-items-center my-2 pe-md-5">
              <span className="me-2" id="material"></span><p className="h5 m-0">Material need</p>
            </div>
            <div className="d-flex align-items-center my-2">
              <span className="me-2" id="service"></span><p className="h5 m-0">Punctual service</p>
            </div>
          </div>
          <div className="map d-flex justify-content-center align-items-center mb-4">
            { requests && loaded ? 
              ( 
                <Map provider={maptilerProvider} dprs={[1, 2]} center={center} zoom={zoom} onBoundsChanged={({ center, zoom }) => { setCenter(center); setZoom(zoom) }}>
                  <ZoomControl />
                  {
                    requests.map((request) => {
                      return (
                        <Marker width={100} anchor={[request.lat, request.lng]} color={MarkerColorChoice(request)} onClick={() => displayBubbleRequestInfo(request)} key={request.id} />
                      )
                    })
                  }
                  <Overlay offset={[0, 0]} anchor={currentRequest !== "" ? [currentRequest.lat, currentRequest.lng] : [0, 0]}>
                    <div className="bubble-request">
                      <div className="bubble-pointer"></div>
                      <div className="bubble d-flex flex-column justify-content-between align-items-center p-4">
                        {
                          currentRequest && 
                          <>
                            <p className="close-button pointer h5 text-secondary" onClick={() => closeBubbleRequestInfo()}>x</p>
                            <h5 className="">{currentRequest.title}</h5>
                            <p className="m-0"><strong>Type: </strong>{currentRequest.request_type}</p>
                            <p className="m-0"><strong>Location: </strong>{currentRequest.location}</p>
                            <button className="btn button-primary w-100 p-1" onClick={() => openShowRequestModal()}>See details</button>
                          </>
                        }
                      </div>
                    </div>
                  </Overlay>
                </Map>
              ) :
              (
                <div className="d-flex justify-content-center align-items-center w-100 p-3">
                  <ReactLoading type={"spinningBubbles"} color={"#358597"} height={'20%'} width={'20%'} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default MapRequests;