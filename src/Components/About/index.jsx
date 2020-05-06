import React, { useRef } from 'react';
import './About.scss';
import WhiteboardLg from '../WhiteboardLg';
import WhiteboardMd from '../WhiteboardMd';
import WhiteboardSm from '../WhiteboardSm';
import IntersectionObserverWhiteboardMd from '../IntersectionObserverWhiteboardMd';
import IntersectionObserverWhiteboardSm from '../IntersectionObserverWhiteboardSm';
import ProjectorScreen from '../ProjectorScreen';
import ImageWindow from '../ImageWindow';
import ImageLineup from '../ImageLineup';
import ImageSlide from '../ImageSlide';
import AnimatedOpacityText from '../AnimatedOpacityText';


import profilePic from "../../images/profile/david_profile_pic_square_800.jpg";
import booksIcon from "../../images/aboutme/icons8-books-2-100.png";
import ambulanceIcon from "../../images/aboutme/icons8-ambulance-reverse-100.png";
import graduationIcon from "../../images/aboutme/icons8-graduation-cap-100.png";
import hospitalIcon from "../../images/aboutme/icons8-hospital-100.png";
import googleIcon from "../../images/aboutme/icons8-google-code-100.png";
import lockIcon from "../../images/aboutme/icons8-lock-100-2.png";
import gameIcon from "../../images/aboutme/icons8-strategy-game-100.png"; 
import basketballIcon from "../../images/aboutme/icons8-basketball-net-100.png";
import volleyballIcon from "../../images/aboutme/icons8-volleyball-player-100.png"; 
import iceCreamIcon from "../../images/aboutme/icons8-melting-ice-cream-100.png";
import javaIcon from "../../images/aboutme/icons8-java-100.png"; 
import racketIcon from "../../images/aboutme/Racket-logo.svg"; 
import cIcon from "../../images/aboutme/icons8-c-programming-100.png"; 
import githubIcon from "../../images/aboutme/icons8-github-100.png"; 
import htmlIcon from "../../images/aboutme/icons8-html-5-100.png";
import cssIcon from "../../images/aboutme/icons8-css3-100.png"; 
import javascriptIcon from "../../images/aboutme/icons8-javascript-logo-100.png";
import weddingRingsIcon from "../../images/aboutme/icons8-wedding-rings-100.png"


function About() {

  // pass in to IntersectionObserverWhiteboardMd/Sm like
  //  transitionOptions={slideBasicIntersectionOptions}
  // let slideBasicIntersectionOptions = {
  //   root: null,
  //   rootMargin: "0px", // might want to change this value at some point...
  //   threshold: 0
  // }

  return (
    <WhiteboardLg className="About">
      {/* p rather than div to allow :nth-child to work properly in WhiteboardMd css */}
      <p className="About-title-section-container">
        <p className="About-title-profile-image-container">
          <img  src={profilePic} alt="headshot of david sommers" height="800px" width="800px"/>
        </p>
        {/* <p className="About-title-filler"></p> */}
        <h1 className="About-title-text">
          About Me
        </h1>
      </p>
      <IntersectionObserverWhiteboardMd 
        animationClassName="slide-down-big"
        >
        <WhiteboardSm className="upper-z-board">
          <h3 className="About-header-text">What I Do</h3>
          <AnimatedOpacityText className="About-detail-text" animationDelay={1}>
            <p>
              I'm a software engineer based in the San Francisco Bay Area.
              I love creating cleanly coded, well tested, buttery smooth web apps.
              My go to tech stack is React, Node / Express, and PostgreSQl. I've also
              built apps with Python / Flask as well as Ruby on Rails.
            </p>
          </AnimatedOpacityText>
        </WhiteboardSm>
        <IntersectionObserverWhiteboardSm  animationClassName="slide-right">
          <ProjectorScreen frame transitionOnScroll animationDelayForLargeScreen={3500} animationDelayForSmallScreen={4000}>
            <ImageWindow>
              <ImageLineup className="About-coding-images">
                <ImageSlide src={javaIcon} alt="java logo"/>
                <ImageSlide src={racketIcon} alt="racket logo"/>
                <ImageSlide src={cIcon} alt="c logo"/>
                <ImageSlide src={githubIcon} alt="github logo"/>
                <ImageSlide src={htmlIcon} alt="html logo"/>
                <ImageSlide src={cssIcon} alt="css logo"/>
                <ImageSlide src={javascriptIcon} alt="javascript logo"/>
                <ImageSlide src={javaIcon} alt="java logo"/>
              </ImageLineup>
            </ImageWindow>
          </ProjectorScreen>
        </IntersectionObserverWhiteboardSm>
      </IntersectionObserverWhiteboardMd>
      <IntersectionObserverWhiteboardMd  animationClassName="slide-up" >
        <IntersectionObserverWhiteboardSm   animationClassName="slide-left" >
          <ProjectorScreen frame transitionOnScroll animationDelayForLargeScreen={3500} animationDelayForSmallScreen={1400}>
            <ImageWindow className="About-career-window">
              <ImageLineup className="About-career-images" flexRow>
                <ImageSlide placeholder={true}/>
                <ImageSlide src={booksIcon} alt="icon of university building" />
                <ImageSlide src={graduationIcon} alt="icon of graduation cap"/>
                <ImageSlide placeholder={true}/>
                <ImageSlide src={ambulanceIcon} alt="icon of ambulance"/>
                <ImageSlide src={hospitalIcon} alt="icon of hospital"/>
                <ImageSlide placeholder={true}/>
                <ImageSlide src={googleIcon} alt="icon of computer with code on screen"/>
              </ImageLineup>
            </ImageWindow>
          </ProjectorScreen>
        </IntersectionObserverWhiteboardSm>
        <WhiteboardSm className="upper-z-board">
          <h3 className="About-header-text">My Journey</h3>
          <AnimatedOpacityText className="About-detail-text" transitionOnScroll animationDelay={1}>
            <p>I studied humanities at Pepperdine to explore the big ideas.
              Graduated Summa Cum Laude. Then, in search of adventure, an opportunity to help people, and a secure career path, I became an EMT. First on an ambulance, then in SF General's emergency department. Got to work with tons of awesome people along the way. Then I pursued nursing for a bit.
            </p>
            <p>
            Being a healthcare provider was an amazing experience. However, I was lacking a certain passion for it. So, craving for a career I intrinsically enjoyed, I looked into software engineering in my spare time. Did some self-study to confirm I loved it, then made the big switch! Dove into Rithm School's full stack immersive bootcamp. Towards the end, I got an internship with JumpOffCampus, overhauling a near decade-old Ruby on Rails web app from Rails v2 to v5 and incorporating React into the frontend.
            </p>
            <p>
            Now, I'm on the hunt for new coding opportunities!
            </p>
          </ AnimatedOpacityText>
        </WhiteboardSm>
      </IntersectionObserverWhiteboardMd>
      <IntersectionObserverWhiteboardMd  animationClassName="slide-up" >
        <WhiteboardSm  className="upper-z-board">
          <h3 className="About-header-text">Things I Enjoy<span>(Besides coding)</span></h3>
          <AnimatedOpacityText className="About-detail-text" transitionOnScroll animationDelay={1}>
            <ul>
              <li>Playing Basketball and Volleyball <span>(especially the dunking and spiking parts)</span></li> 
              <li>Wightlifting <span>(especially the parts...that help me dunk and spike better)</span></li> 
              <li>Board Games <span>(Recent Favorite: Cryptid. Classic Favorite: Cosmic Encounter)</span> </li> 
              <li>Video Games <span>(Recent Favorite: Overcooked 2. Wish I had time for but probably never will again: 7 Days to Die)</span></li>
              <li>Escape Rooms </li> 
              <li>Ice Cream <span>(Salt & Straw, please open in the East Bay)</span></li> 
              <li>Being Married to My Amazing Wife. <span>(She's the best)</span></li> 
            </ul>
          </AnimatedOpacityText>
        </WhiteboardSm>
        <IntersectionObserverWhiteboardSm  animationClassName="slide-right" >
          <ProjectorScreen frame transitionOnScroll animationDelayForLargeScreen={3500} animationDelayForSmallScreen={1400}>
              <ImageWindow>
                  <ImageLineup className="About-interests-images">
                    <ImageSlide src={basketballIcon} alt="icon of basketball hoop"/>
                    <ImageSlide src={volleyballIcon} alt="icon of volleyball player"/>
                    <ImageSlide src={gameIcon} alt="icon of strategy game"/>
                    <ImageSlide src={lockIcon} alt="icon of keylock"/>
                    <ImageSlide src={iceCreamIcon} alt="icon of ice cream"/>
                    <ImageSlide src={weddingRingsIcon} alt="icon of wedding rings"/>
                    <ImageSlide src={basketballIcon} alt="icon of basketball hoop"/>
                  </ImageLineup>
              </ImageWindow>
          </ProjectorScreen>
        </IntersectionObserverWhiteboardSm>
      </IntersectionObserverWhiteboardMd>
    </WhiteboardLg>
    
  )
}

export default About;