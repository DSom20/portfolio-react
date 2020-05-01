import React from 'react';
import './About.scss';
import WhiteboardLg from '../WhiteboardLg';
import WhiteboardMd from '../WhiteboardMd';
import WhiteboardSm from '../WhiteboardSm';
import ProjectorScreen from '../ProjectorScreen';
import ImageWindow from '../ImageWindow';
import ImageLineup from '../ImageLineup';
import ImageSlide from '../ImageSlide';

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
        entry.target.classList.add("slide-up");
        observer.unobserve(entry.target);
      }
    })
  }

  let slideRightIntersectionCallback = (entries,observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-right");
        observer.unobserve(entry.target);
      }
    })
  }
  let slideLeftIntersectionCallback = (entries,observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-left");
        observer.unobserve(entry.target);
      }
    })
  }

  let slideUpIntersectionOptions = {
    root: null,
    rootMargin: "100px",
    threshold: 0
  }

  return (
    <WhiteboardLg className="About">
      {/* p rather than div to allow :nth-child to work properly in WhiteboardMd css */}
      <p className="About-profile-image-container">
        <img  src={profilePic} alt="headshot of david sommers" height="800px" width="800px"/>
      </p>
      <WhiteboardMd>
        <WhiteboardSm transitionCallback={slideLeftIntersectionCallback} id="wb-1">
          <h3>What do I do?</h3>
          <p>I'm a software engineer based in the San Francisco Bay Area.
            I love creating cleanly coded, well tested, buttery smooth web apps.
            My go to tech stack is React, Node / Express, and PostgreSQl. I've also
            built apps with Python / Flask as well as Ruby on Rails.
          </p>
        </WhiteboardSm>
        <WhiteboardSm id="wb-3">
          <ProjectorScreen frame transitionOnScroll animationDelay={3000}>
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
        </WhiteboardSm>
      </WhiteboardMd>
      <WhiteboardMd id="wbh-2">
        <WhiteboardSm id="wb-2">
          <ProjectorScreen frame>
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
        </WhiteboardSm>
        <WhiteboardSm transitionCallback={slideRightIntersectionCallback} id="wb-4">
          <h3>What have I done?</h3>
          <p>Studied humanities at Pepperdine to explore the big ideas.
            Graduated Summa Cum Laude. Then, in search of adventure, an opportunity to help people, and a secure career path, I became an EMT. Say what? Yeah. First on an ambulance, then in SF General's emergency department. Got to work with tons of awesome people along the way. Then I pursued nursing for a bit.
          </p>
          <p>
          Craving for a career I was passionate about, I looked into software engineering in my spare time. Did some self-study to confirm I loved it, then made the big switch! Dove into Rithm School's full stack immersive bootcamp. Towards the end, I got an internship with JumpOffCampus, overhauling a near decade-old Ruby on Rails web app from Rails v2 to v5 and incorporating React into the frontend.
          </p>
          <p>
          Now, I'm on the hunt for new coding opportunities!
          </p>
        </WhiteboardSm>
      </WhiteboardMd>
      <WhiteboardMd  transitionCallback={slideUpIntersectionCallback} transitionOptions={slideUpIntersectionOptions}>
        <WhiteboardSm transitionCallback={slideLeftIntersectionCallback} transitionOptions={slideUpIntersectionOptions}>
          <h3>What else do I do?</h3>
          <p>
            I enjoy playing basketball and volleyball, particularly the dunking and spiking parts. 
            I enjoy lifting weights. 
            I am a board game enthusiast (and have been known to dabble in the video type as well). 
            I enjoy escape rooms. 
            I enjoy ice cream.
            And I enjoy being married to my amazing wife.
          </p>
        </WhiteboardSm>
        <WhiteboardSm transitionCallback={slideRightIntersectionCallback} transitionOptions={slideUpIntersectionOptions}>
          <ProjectorScreen frame transitionOnScroll animationDelay={3000}>
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
        </WhiteboardSm>
      </WhiteboardMd>
    </WhiteboardLg>
    
  )
}

export default About;