// CONFIG IMPORTS
import React, { useContext } from 'react';

// CONTEXT IMPORTS
import FlashContext from './Context/FlashContext';

// DATA IMPORTS
import baseURL from '../data/BaseURL';

const DropdownMenuOptionsRequestCard = ({request, setOpenEditModal, setMarkRequestAsFulfilled, setRepublishRequest}) => {
  const { setFlash } = useContext(FlashContext);
  const { id } = request;

  const deleteRequest = () => {
    if (window.confirm("You are about to delete this request. \n\nAre you sure?")) {
      const url = `${baseURL}/requests/${id}`;
      const token = localStorage.getItem('jwt_token');

      fetch(url, {
        method: "DELETE",
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
      })
      .then(response => response.json())
      .then(response => {
        if (response.message) {
          setFlash({
            type: 'success',
            message: response.message,
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
        setFlash({
          type: 'danger',
          message: error,
          display: true,
        })
      })
    }
  }

  return (
    <div className="dropdown-menu-options-request-card ms-2">
      <ul className = "list-unstyled m-0 p-0">
        {
          request.status == 'fulfilled' ? 
          (
            <>
              <li className="m-0 p-2 disabled">Mark as fulfilled</li>
              <li className="m-0 p-2 disabled">Edit request</li>
            </>
          ) : 
          (
            <>
              <li className="m-0 p-2 pointer" onClick={() => setMarkRequestAsFulfilled(request)}>Mark as fulfilled</li>
              <li className="m-0 p-2 pointer" onClick={() => setOpenEditModal(request)}>Edit request</li>
            </>
          )
        }
        {
          request.status == 'expired' &&
          <li className="m-0 p-2 pointer" onClick={() => setRepublishRequest(request)}>Republish</li>
        }
        <hr className="m-0"></hr>
        <li className="m-0 p-2 pointer" onClick={() => deleteRequest()}>Delete request</li>
      </ul>
    </div>
  );
};

export default DropdownMenuOptionsRequestCard;