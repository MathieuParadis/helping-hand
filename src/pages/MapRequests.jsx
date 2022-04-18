// CONFIG IMPORTS
import React, {useEffect} from 'react';

// PIGEON MAPS IMPORTS
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers';

// REACT LOADING IMPORTS
import ReactLoading from 'react-loading';


const MapRequests = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="map-requests">
      <h1>Requests around me</h1>

      {/* <div className="locations d-flex justify-content-center align-items-center my-4">
      { riders && riders.length > 0 ? 
        (
          <Map provider={maptilerProvider} dprs={[1, 2]} center={center} defaultZoom={12} zoom={zoom}>
            <ZoomControl />
            {
              riders.map((rider) => {
                return (
                  <Marker width={100} anchor={[rider.position.lat, rider.position.lgn]} color={'#ffd700'} onClick={() => displayBubbleRiderInfo(rider)} key={rider.first_name + rider.last_name} />
                )
              })
            }
            <Marker width={widthBlueMarker} anchor={coordinatesBlueMarker} color={'#3385d6'} />
            <Overlay offset={[0, 0]}>
              <div className="bubble-rider">
                <div className="pointer"></div>
                <div className="bubble d-flex flex-column justify-content-around align-items-center">
                  {
                    currentRider && 
                    <>
                      <img src={rider_logo} className="rider-logo" />
                      <h3 className="m-0">{currentRider.first_name}</h3>
                      <h3 className="m-0">{currentRider.last_name}</h3>
                      <p className="m-0"><strong>Lat: </strong>{currentRider.position.lat}</p>
                      <p className="m-0"><strong>Lgn: </strong>{currentRider.position.lgn}</p>
                    </>
                  }
                </div>
              </div>
            </Overlay>
          </Map>
        ) :
        (
        <div className="d-flex justify-content-center align-items-center w-100 p-3">
          <ReactLoading type={"spinningBubbles"} color={"#3385d6"} height={'20%'} width={'20%'} />
        </div>
        )
      }
    </div> */}



      
    </div>
  );
};

export default MapRequests;