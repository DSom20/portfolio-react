import React from 'react';
import './WhiteboardLg.scss';

function WhiteboardLg(props) {
  return (
    <div className={'WhiteboardLg ' + (props.className || '')} id={props.id} style={props.style}>
      {props.children}
    </div>
  )
}

export default WhiteboardLg;