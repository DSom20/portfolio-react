import React, { useEffect } from 'react';
import './Home.scss';
import Vara from '../../scripts/vara.js';
import satisfyFontObj from "../../scripts/satisfySL.json"
import WhiteboardLg from '../WhiteboardLg';
import WhiteboardMd from '../WhiteboardMd';
import WhiteboardSm from '../WhiteboardSm';

function Home() {

  useEffect(() => {
    new Vara("#Home-vara-container-1",  satisfyFontObj,[{
      text:"Hi!",
      textAlign: "center"
    }],{
      fontSize: 46
    })
    console.log({satisfyFontObj});

  }, [])
  return (
    <div className="Home">
      <WhiteboardLg >
        <WhiteboardMd >
          <WhiteboardSm id="wb-1">
            <h1 id="Home-vara-container-1"></h1>
          </WhiteboardSm>
          <WhiteboardSm id="wb-3">
            <p>This is board 3</p>
          </WhiteboardSm>
        </WhiteboardMd>
        <div className="Home-whiteboard-container-horizontal" id="wbh-2">
          <div className="Home-whiteboard" id="wb-2">
            {/* <h1 id="Home-vara-container-1"></h1> */}
            <p>I'm David</p>
          </div>
          <div className="Home-whiteboard" id="wb-4">
            <p>This is board 4</p>
          </div>
        </div>
      </WhiteboardLg>
    </div>
    // <div className="Home">
    //   <div className="Home-whiteboard-container">
    //     <div className="Home-whiteboard-container-horizontal">
    //       <div className="Home-whiteboard" id="wb-1">
    //         <h1 id="Home-vara-container-1"></h1>
    //       </div>
    //       <div className="Home-whiteboard" id="wb-3">
    //         <p>This is board 3</p>
    //       </div>
    //     </div>
    //     <div className="Home-whiteboard-container-horizontal" id="wbh-2">
    //       <div className="Home-whiteboard" id="wb-2">
    //         {/* <h1 id="Home-vara-container-1"></h1> */}
    //         <p>I'm David</p>
    //       </div>
    //       <div className="Home-whiteboard" id="wb-4">
    //         <p>This is board 4</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Home;

      // {/* <h1>Hi!</h1> */}
      // <div className="Home-description vara-container-2">
      //   <h2 id="Home-header-name"></h2>
      //   <h2 id="Home-header-title"></h2>
      //   {/* <h2>I'm David</h2>
      //   <h2>I'm a software engineer</h2> */}
      // </div>
      // <div className="Home-description vara-container-3">
      //   <h3 id="Home-header-projects"></h3>
      //   <h3 id="Home-header-projects"></h3>
      //   {/* <h3>Check out my Projects</h3>
      //   <h3>Or learn more About Me</h3> */}
      // </div>