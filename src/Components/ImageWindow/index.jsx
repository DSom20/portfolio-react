import React from 'react';
import './ImageWindow.scss';

function ImageWindow(props) {
  return (
    <div className={'ImageWindow ' + (props.className || '')} id={props.id} style={props.style}>
      {props.children}
    </div>
  )
}

export default ImageWindow;