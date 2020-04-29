import React from 'react';
import './CorkEdge.scss';

function CorkEdge(props) {
  return (
    <div className={'CorkEdge ' + (props.className || '')} id={props.id} style={props.style}>
      {props.children}
    </div>
  )
}

export default CorkEdge