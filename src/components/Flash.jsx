// CONFIG IMPORTS
import React, { useEffect, useContext } from 'react';

// CONTEXT IMPORTS
import FlashContext from './Context/FlashContext';

const Flash = () => {
  const { flash, setFlash } = useContext(FlashContext);
  let { type, message, display } = flash;

  const hideFlash = () => {
    setFlash(
      type = "",
      message = "",
      display = false
    )

    const flash = document.querySelector(".flash");   
    flash.classList.remove("flash-success", "flash-warning", "flash-danger");
  }

  useEffect(() => {
    if (display) {
      window.scrollTo(0, 0);
      setTimeout(function() { hideFlash(); }, 4000);
    } else {
      hideFlash();
    }
  }, [flash, display])

  return (
    <div className={`flash flash-${type}`}>
      <div className="d-flex justify-content-between">
        <div className="flash-content">{message}</div>
        <div className="flash-close ps-5" onClick={() => hideFlash()}>X</div>
      </div>
    </div>
  );
};

export default Flash;