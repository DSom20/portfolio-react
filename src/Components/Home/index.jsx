import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group';
import './Home.scss';
// import Vara from '../../scripts/vara.js';
// import satisfyFontObj from "../../scripts/satisfySL.json"
import WhiteboardLg from '../WhiteboardLg';
import WhiteboardMd from '../WhiteboardMd';
import WhiteboardSm from '../WhiteboardSm';
import AnimatedOpacityText from '../AnimatedOpacityText';
import AnimatedLink from '../AnimatedLink';

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
      {/* props delay is really referring to total timeout allotted for router page transition.
      But currently the actual page transition animation is only using a portion of that time (1s) */}
      <CSSTransition in={true} appear={true} timeout={delay + 1000} classNames="Home-wb1-slide-down">
        <WhiteboardSm id="wb-1">
          {/* <h1 id="Home-vara-container-1"></h1> */}
          <AnimatedOpacityText startAnimationOnMounting animationDelay={2} animationDuration={2}>
            <h1>Hi!</h1>
          </AnimatedOpacityText>
          <AnimatedOpacityText startAnimationOnMounting animationDuration={2} animationDelay={3}>
            <h1>I'm David</h1>
          </AnimatedOpacityText>
          <AnimatedOpacityText startAnimationOnMounting animationDuration={2} animationDelay={4}>
            <h1>I'm a software engineer</h1>
          </AnimatedOpacityText>
        </WhiteboardSm>
      </CSSTransition>
      <CSSTransition in appear timeout={delay + 1000 + 5000} classNames="Home-wb2-slide-down">
        <WhiteboardSm id="wb-2">
          {/* <p>This is board 3</p> */}
          <AnimatedOpacityText startAnimationOnMounting animationDuration={2} animationDelay={6}>
            <h2>Check out some of my <AnimatedLink to='/projects'>Projects</AnimatedLink>&nbsp;</h2>
          </AnimatedOpacityText>
          <AnimatedOpacityText startAnimationOnMounting animationDuration={2} animationDelay={7}>
            <h2>Or read a bit <AnimatedLink to='/about'>About&nbsp;Me</AnimatedLink>&nbsp;</h2>
          </AnimatedOpacityText>
        </WhiteboardSm>
      </CSSTransition>

    </WhiteboardLg>
  )
}

export default Home;
