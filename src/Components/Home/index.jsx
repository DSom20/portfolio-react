import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group';
import './Home.scss';
import Vara from '../../scripts/vara.js';
import satisfyFontObj from "../../scripts/satisfySL.json"
import WhiteboardLg from '../WhiteboardLg';
import WhiteboardMd from '../WhiteboardMd';
import WhiteboardSm from '../WhiteboardSm';

function Home({ delay }) {

  // useEffect(() => {
  //   new Vara("#Home-vara-container-1",  satisfyFontObj,[{
  //     text:"Hi!",
  //     textAlign: "center"
  //   }],{
  //     fontSize: 46
  //   })
  //   console.log({satisfyFontObj});

  // }, [])
  return (
    <WhiteboardLg className="Home">
      <CSSTransition in={true} appear={true} timeout={delay + 1000} classNames="Home-wb1-slide-down">
        <WhiteboardSm id="wb-1">
          {/* <h1 id="Home-vara-container-1"></h1> */}
          <h1>Hi!</h1>
          <h1>I'm David</h1>
          <h1>I'm a software engineer</h1>
        </WhiteboardSm>
      </CSSTransition>
      <CSSTransition in appear timeout={delay + 1000 + 1000} classNames="Home-wb2-slide-down">
        <WhiteboardSm id="wb-3">
          {/* <p>This is board 3</p> */}
          <h2>Check out some of my <Link exact to='/projects'>Projects</Link></h2>
          <h2>Or read a bit <Link exact to='/about'>About Me</Link></h2>
        </WhiteboardSm>
      </CSSTransition>

    </WhiteboardLg>
  )
}

export default Home;
