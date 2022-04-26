// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';

// PIGEON MAPS IMPORTS
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers';

// REACT LOADING IMPORTS
import ReactLoading from 'react-loading';

// COMPONENTS IMPORTS
import EditRequestModal from '../components/EditRequestModal';
import ShowRequestModal from '../components/ShowRequestModal';

// DATA IMPORTS
import requests from '../data/Requests';

const maptilerProvider = maptiler('IwympTEN2FYbP2g5qdck', 'streets')

const MapRequests = () => {
  const [center, setCenter] = useState([40.014984, -105.270546]); // default center: Boulder, Colorado
  const [zoom, setZoom] = useState(12);
  const [currentRequest, setCurrentRequest] = useState("");

  const colorMaterial = "#F4A896";
  const colorService = "#262F53"

  const MarkerColorChoice = (request) => {
    return request.request.type === "material" ? colorMaterial : colorService;
  }

  const displayBubbleRequestInfo = (request) => {
    const bubbleRequest = document.querySelector(".bubble-request");

    bubbleRequest.style.visibility = 'visible';
    setCurrentRequest(request);
    setCenter([request.request.position.lat, request.request.position.lgn]);
    setZoom(13);
  }

  const closeBubbleRequestInfo = () => {
    const bubbleRequest = document.querySelector(".bubble-request");

    bubbleRequest.style.visibility = 'hidden';
    setZoom(12);
  }

  const openShowRequestModal = () => {
    const newRequestModal = document.querySelector(".new-user-request-modal");
    const showRequestModal = document.querySelector(".show-user-request-modal");
    const editRequestModal = document.querySelector(".edit-user-request-modal");

    newRequestModal.style.visibility = 'hidden';
    showRequestModal.style.visibility = 'visible';
    editRequestModal.style.visibility = 'hidden';
    document.querySelector("body").classList.add("clicked");
  }

  const openEditRequestModal = () => {
    const newRequestModal = document.querySelector(".new-user-request-modal");
    const showRequestModal = document.querySelector(".show-user-request-modal");
    const editRequestModal = document.querySelector(".edit-user-request-modal");

    newRequestModal.style.visibility = 'hidden';
    showRequestModal.style.visibility = 'hidden';
    editRequestModal.style.visibility = 'visible';
    document.querySelector("body").classList.add("clicked");
  }

  const markRequestAsFulfilled = () => {
    alert(currentRequest.request.title + " marked as fulfilled");
  }

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

          <div className="caption d-flex flex-column flex-md-row align-self-start my-4">
            <div className="d-flex align-items-center my-2 pe-md-5">
              <span className="me-2" id="material"></span><p className="h5 m-0">Material need</p>
            </div>
            <div className="d-flex align-items-center my-2">
              <span className="me-2" id="service"></span><p className="h5 m-0">Punctual service</p>
            </div>
          </div>
          <div className="map d-flex justify-content-center align-items-center mb-4">
            { requests && requests.length > 0 ? 
              (
                <Map provider={maptilerProvider} dprs={[1, 2]} center={center} defaultZoom={12} zoom={zoom}>
                  <ZoomControl />
                  {
                    requests.map((request) => {
                      return (
                        <Marker width={100} anchor={[request.request.position.lat, request.request.position.lgn]} color={MarkerColorChoice(request)} onClick={() => displayBubbleRequestInfo(request)} key={request.requester.first_name + request.requester.last_name} />
                      )
                    })
                  }
                  <Overlay offset={[0, 0]} anchor={[currentRequest.request.position.lat, currentRequest.request.position.lgn]}>
                    <div className="bubble-request">
                      <div className="bubble-pointer"></div>
                      <div className="bubble d-flex flex-column justify-content-between align-items-center p-4">
                        {
                          currentRequest && 
                          <>
                            <p className="close-button pointer h5 text-secondary" onClick={() => closeBubbleRequestInfo()}>x</p>
                            <h5 className="">{currentRequest.request.title}</h5>
                            <p className="m-0"><strong>Type: </strong>{currentRequest.request.type}</p>
                            <p className="m-0"><strong>Location: </strong>{currentRequest.request.location}</p>
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