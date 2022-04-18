// CONFIG IMPORTS
import React, {useEffect} from 'react';

const Requests = () => {
  const openNewRequestModal = (e) => {
    alert("opening new request modal");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="requests bg2 margin-mobile">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="box border-radius-5 d-flex flex-column align-items-center p-3 my-3">
          <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">My Requests</h1>
          <button className="profile-button btn button-w150 button-outline-primary" id="signup-btn" onClick={(e) => openNewRequestModal()}>Request help</button>
          <div className="caption d-flex align-self-start my-5">
            <span className="me-2" id="material"></span><p className="pe-5 h5">Material need</p>
            <span className="ms-5 me-2" id="service"></span><p className="h5">Punctual service</p>
          </div>
          <ul>
            <li className="mb-2">Can't ask for money or donations</li>
            <li className="mb-2">All help is free. Nobody gets paid, ever</li>
            <li className="mb-2">The "ask" has to be well defined in advance. Anyone signing up to help you has to know exactly what they are getting into</li>
            <li className="mb-2">Spammers or salesmen abusing the platform get banned</li>
            <li className="mb-2">Reviewing how the encounter went is mandatory for everyone involved</li>
            <li className="mb-2">People's identities should be verified to ensure accountability and prevent abuse</li>
            <li className="mb-2">The one getting the help has to participate and help the helpers in every way they can</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Requests;