import React from 'react';
import './NotFound.scss';
import WhiteboardLg from '../WhiteboardLg';
import WhiteboardSm from '../WhiteboardSm';

function NotFound() {
  return (
    <WhiteboardLg className="NotFound">
      <WhiteboardSm className="NotFound-wb-sm">
        <h1>
          Welcome to CS 404:
        </h1>
        <h1>
          Page Not Found
        </h1>
      </WhiteboardSm>
    </WhiteboardLg>
  )
}

export default NotFound;