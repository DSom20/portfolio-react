import React from 'react';
import './ProjectorScreen.scss';


function ProjectorScreen(props) {
  let frameJSX;
  if (props.frame) {
    frameJSX = (
      <>
        <div className="ProjectorScreen-frame ProjectorScreen-frame-tr"></div>
        <div className="ProjectorScreen-frame ProjectorScreen-frame-bl"></div>
      </>
    )
  }
  return (
    <div className={'ProjectorScreen ' + (props.className || '')} id={props.id} style={props.style}>
      {frameJSX}
      {props.children}
    </div>
    )
}

export default ProjectorScreen;