// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';

// PIGEON MAPS IMPORTS
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers';

// REACT LOADING IMPORTS
import ReactLoading from 'react-loading';

// DATA IMPORTS
import requests from '../data/Requests';

const maptilerProvider = maptiler('IwympTEN2FYbP2g5qdck', 'streets')

const MapRequests = () => {
  const [center, setCenter] = useState([40.014984, -105.270546]); // default center: Boulder, Colorado
  const [zoom, setZoom] = useState(12);
  const [currentrequest, setCurrentrequest] = useState("");
  const [coordinatesBlueMarker, setCoordinatesBlueMarker] = useState([0, 0]);
  const [widthBlueMarker, setWidthBlueMarker] = useState(0);


  const colorMaterial = "#F4A896";
  const colorService = "#262F53"

  const colorChoice = (request) => {
    return request.request.type === "material" ? colorMaterial : colorService;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="map-requests">
      <div class="d-flex flex-column justify-content-center align-items-center mx-0 my-3 py-3">
        <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">Requests around me</h1>



          <div className="map d-flex justify-content-center align-items-center my-4">
            { requests && requests.length > 0 ? 
              (
                <Map provider={maptilerProvider} dprs={[1, 2]} center={center} defaultZoom={12} zoom={zoom}>
                  <ZoomControl />
                  {
                    requests.map((request) => {
                      return (
                        <Marker width={100} anchor={[request.request.position.lat, request.request.position.lgn]} color={colorChoice(request)} key={request.requester.first_name + request.requester.last_name} />
                      )
                    })
                  }
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
  );
};

export default MapRequests;