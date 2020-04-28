import React from 'react';
import './WhiteboardMd.scss';

function WhiteboardMd(props) {
  return (
    <div className='WhiteboardMd'>
      {props.children}
    </div>
  )
}

export default WhiteboardMd;