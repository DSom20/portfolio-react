import React from 'react';
import './WhiteboardLg.scss';

function WhiteboardLg(props) {
  return (
    <div className='WhiteboardLg'>
      {props.children}
    </div>
  )
}

export default WhiteboardLg;