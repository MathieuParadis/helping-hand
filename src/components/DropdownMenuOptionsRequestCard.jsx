// CONFIG IMPORTS
import React from 'react';

const DropdownMenuOptionsRequestCard = ({request, setOpenEditModal, setMarkRequestAsFulfilled}) => {
  const markAsFulfilled = () => {
  alert("marking request as fulfilled");
}

  const deleteRequest = () => {
    window.confirm("You are about to delete this request. \n\nAre you sure?");
  }
  return (
    <div className="dropdown-menu-options-request-card ms-2">
      <ul className = "list-unstyled m-0 p-0">
        <li className="m-0 p-2 pointer" onClick={() => setMarkRequestAsFulfilled(request)}>Mark as fulfilled</li>
        <li className="m-0 p-2 pointer" onClick={() => setOpenEditModal(request)}>Edit request</li>
        <hr className="m-0"></hr>
        <li className="m-0 p-2 pointer" onClick={() => deleteRequest()}>Delete request</li>
      </ul>
    </div>
  );
};

export default DropdownMenuOptionsRequestCard;