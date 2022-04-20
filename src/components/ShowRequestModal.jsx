// CONFIG IMPORTS
import React, {useState, useEffect} from 'react';

const ShowRequestModal = ({request}) => {
  const modal = document.querySelector(".show-request-modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalContent = document.querySelector(".modal-content");

  const closeModal = () => {
    modal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  window.onclick = (event) => {
    event.target === document.querySelector('.modal-overlay') &&
    event.target !== document.querySelector('.modal-content') &&
    closeModal();
  };

  return (
    <div className="show-request-modal">
      <div className="modal-overlay"></div>
      <div className="modal-content p-3">
        {request && (
          <>
          {request.request.title}
          </>
        )}
      </div>
    </div>
  );
};

export default ShowRequestModal;