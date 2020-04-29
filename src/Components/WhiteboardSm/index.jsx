import React from 'react';
import './WhiteboardSm.scss';

function WhiteboardSm(props) {
  return (
    <div className={'WhiteboardSm ' + (props.className || '')} id={props.id} style={props.style}>
      {props.children}
    </div>
  )
}

export default WhiteboardSm;