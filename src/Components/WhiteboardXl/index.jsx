import React from 'react';
import './WhiteboardXl.scss';

function WhiteboardXl(props) {
  return (
    <div className={'WhiteboardXl ' + (props.className || '')} id={props.id} style={props.style}>
      {props.children}
    </div>
  )
}

export default WhiteboardXl;
