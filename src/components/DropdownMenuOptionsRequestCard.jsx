import React from 'react';

const DropdownMenuOptionsRequestCard = ({request, setOpenEditModal}) => {
  return (
    <div className="dropdown-menu-options-request-card ms-2">
      <ul className = "list-unstyled m-0 p-0">
        <li className="m-0 p-2 pointer">Mark as fulfilled</li>
        <li className="m-0 p-2 pointer" onClick={() => setOpenEditModal(request)}>Edit request</li>
        <hr className="m-0"></hr>
        <li className="m-0 p-2 pointer">Delete request</li>
      </ul>

    </div>
  );
};

export default DropdownMenuOptionsRequestCard;