import React from 'react';
import './WhiteboardMd.scss';

function WhiteboardMd(props) {
  return (
    <div className={'WhiteboardMd ' + (props.className || '')} id={props.id} style={props.style}>
      {props.children}
    </div>
  )
}

export default WhiteboardMd;