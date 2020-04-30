import React from 'react';
import './ImageSlide.scss';

function ImageSlide(props) {
  if (props.placeholder) {
    return <span className={'ImageSlide ' + (props.className || '')} id={props.id} style={props.style} />
  } else {
    return (
      <img className={'ImageSlide ' + (props.className || '')} id={props.id} style={props.style} alt={props.alt} src={props.src}/>
    )
  }
}

export default ImageSlide;