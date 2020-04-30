import React from 'react';
import './ImageLineup.scss';

function ImageLineup({flexRow, ...props}) {
  // Defaults to flex-direction column if not passed flexRow prop
  const classes = 
    `ImageLineup 
    ${flexRow ? 'ImageLineup-row' : ''} 
    ${props.className || ''}`

  return (
    <div className={classes} id={props.id} style={props.style}>
      {props.children}
    </div>
    )
}

export default ImageLineup;