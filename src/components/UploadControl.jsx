// CONFIG IMPORTS
import React, {useState} from 'react';

// ASSETS IMPORTS
import plus_icon from '../assets/logos/plus_logo.svg';

const UploadControl = ({value, onChange}) => {
  const hiddenFileInput = document.querySelector("#file")

  const handleClick = e => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="upload-control d-flex flex-column">
      <label htmlFor="ID" className="mb-1">ID&nbsp;<small className="caption">(jpeg, png only)</small></label>
      <div className="d-flex align-items-center">
        <img src={plus_icon} alt="plus_icon" className="plus-icon pointer" onClick={handleClick} />
        <p className="m-0 ps-3">{value}</p>
      </div>
      <input type="file" className="" id="file" aria-describedby="file input field" accept="image/png, image/jpeg" ref={hiddenFileInput} />
    </div>
  );
};

export default UploadControl;