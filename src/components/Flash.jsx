// CONFIG IMPORTS
import React from 'react';

const Flash = () => {
  const hideFlash = () => {
    const flash = document.querySelector(".flash");
    const flashContent = document.querySelector(".flash-content");
    
    flash.classList.remove("flash-success", "flash-warning", "flash-danger");
    flashContent.innerText = "";
  }

  return (
    <div className="flash">
      <div className="d-flex justify-content-between">
        <div className="flash-content"></div>
        <div className="flash-close ps-5">X</div>
      </div>
    </div>
  );
};

export default Flash;