import React, { useState } from 'react';
import './PopupButton.scss';


// I only ever use for credits link in footer, so css ends
// up being hacky to accomodate that specific instance
// should definitely refactor if ever want to use in
// multiple spots
function PopupButton({popupContent, className = '', ...props}) {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(old => !old);
  }

  const setInactive = () => {
    setIsActive(false);
  }

  return (
    <div className="Popup Popup-container">
      <button className={`Popup-button ${className}`} onClick={toggleIsActive}>
        {props.children}
      </button>
      {isActive && (
        <div className="Popup-popup">
          <button className="Popup-inner-button" onClick={setInactive}>X</button>
          {popupContent}
        </div>
      )}
    </div>
  )
}

export default PopupButton;