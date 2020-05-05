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

  let slideUpIntersectionCallback = (entries,observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-up", "play");
        observer.unobserve(entry.target);
      }
    })
  }
  let slideDownBigIntersectionCallback = (entries,observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-down-big", "play");
        observer.unobserve(entry.target);
      }
    })
  }

  // I only have slideRight and left on whiteboard smalls. I really wanted to avoid
  // IntersectionObservers on smalls that are children of medium, ideally just having
  // IO on the medium, and when it intersects it gets a "play" css rule which could
  // trigger children's animations to play as well (after their appropriate delays).
  // BUT, the small children need to slide vertically on small screens and horizontally
  // on large screens. If I simply give them a different animation based on css media
  // breakpoints, then whenever the viewport size changes, the other animation will retrigger.
  // SO, I have to keep an IO on the children small whiteboards and give them an appropriate class
  // right at the time where they get scrolled to, and that class will stay forever so 
  // the animation only ever gets run once. (Could theoretically be problem if person changes
  // viewport size right as they scroll to it...)
  let slideRightIntersectionCallback = (entries,observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // css breakpoint-md, when whiteboardMd becomes flex-column instead of 
        // flex-row like it is at larger at larger widths
        // 
        if (window.innerWidth > 992) { 
          entry.target.classList.add("slide-right");
        } else {
          entry.target.classList.add("slide-down");
        }
        observer.unobserve(entry.target);
      }
    })
  }
  let slideLeftIntersectionCallback = (entries,observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (window.innerWidth > 992) {
          entry.target.classList.add("slide-left");
        } else {
          entry.target.classList.add("slide-down");
        }

        observer.unobserve(entry.target);
      }
    })
  }

  let slideBasicIntersectionOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  }

  // const ref1 = useRef();

  return (
    <WhiteboardLg className="About">
      {/* p rather than div to allow :nth-child to work properly in WhiteboardMd css */}
      <p className="About-profile-image-container">
        <img  src={profilePic} alt="headshot of david sommers" height="800px" width="800px"/>
      </p>
      <IntersectionObserverWhiteboardMd className="transparent" transitionCallback={slideDownBigIntersectionCallback} transitionOptions={slideBasicIntersectionOptions}>
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
        <IntersectionObserverWhiteboardSm className="transparent" transitionCallback={slideRightIntersectionCallback}>
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
      <IntersectionObserverWhiteboardMd className="transparent" transitionCallback={slideUpIntersectionCallback} transitionOptions={slideBasicIntersectionOptions}>
        <IntersectionObserverWhiteboardSm  className="transparent" transitionCallback={slideLeftIntersectionCallback} transitionOptions={slideBasicIntersectionOptions}>
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
            Craving a career I was passionate about, I looked into software engineering in my spare time. Did some self-study to confirm I loved it, then made the big switch! Dove into Rithm School's full stack immersive bootcamp. Towards the end, I got an internship with JumpOffCampus, overhauling a near decade-old Ruby on Rails web app from Rails v2 to v5 and incorporating React into the frontend.
            </p>
            <p>
            Now, I'm on the hunt for new coding opportunities!
            </p>
          </ AnimatedOpacityText>
        </WhiteboardSm>
      </IntersectionObserverWhiteboardMd>
      <IntersectionObserverWhiteboardMd  transitionCallback={slideUpIntersectionCallback} transitionOptions={slideBasicIntersectionOptions}>
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
        <IntersectionObserverWhiteboardSm className="transparent" transitionCallback={slideRightIntersectionCallback} transitionOptions={slideBasicIntersectionOptions}>
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