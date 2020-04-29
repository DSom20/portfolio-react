import React from 'react';
import './Projects.scss';
import WhiteboardLg from '../WhiteboardLg';
import WhiteboardMd from '../WhiteboardMd';
import WhiteboardSm from '../WhiteboardSm';

function Projects() {
  return (
    <WhiteboardLg className="Projects">
      <WhiteboardMd >
        <WhiteboardSm>
          <p>This is board 1</p>
        </WhiteboardSm>
        <WhiteboardSm>
          <p>This is board 2</p>
        </WhiteboardSm>
      </WhiteboardMd>
      <WhiteboardMd id="wbh-2">
        <WhiteboardSm>
          <p>This is board 3</p>
        </WhiteboardSm>
        <WhiteboardSm>
          <p>This is board 4</p>
        </WhiteboardSm>
      </WhiteboardMd>
    </WhiteboardLg>
  )
}

export default Projects;