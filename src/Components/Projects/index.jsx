import React from 'react';
import './Projects.scss';
import WhiteboardLg from '../WhiteboardLg';
import WhiteboardMd from '../WhiteboardMd';
import WhiteboardSm from '../WhiteboardSm';
import IntersectionObserverWhiteboardMd from '../IntersectionObserverWhiteboardMd';
import IntersectionObserverWhiteboardSm from '../IntersectionObserverWhiteboardSm';
import AnimatedOpacityText from '../AnimatedOpacityText';
import ProjectorScreen from '../ProjectorScreen';
import UnderlineOnHoverAnchor from '../UnderlineOnHoverAnchor';
import joblyGif from '../../images/projects/jobly.gif';
import microblogGif from '../../images/projects/microblog-gif-500.gif'
import whiteboardProjectGif from '../../images/projects/portfolio-whiteboard-gif-500.gif';

function Projects() {
  return (
    <WhiteboardLg className="Projects">
      <h1>Personal Projects</h1>
      <IntersectionObserverWhiteboardMd animationClassName="slide-down-big">
        <WhiteboardSm className="upper-z-board">
          <h2 className="Projects-title">Jobly</h2>
          <AnimatedOpacityText animationDelay={1}>
            <p className="Projects-tech">React, Express, RESTful API, PostgreSQL, JWT</p>
            <p className="Projects-description">
              Jobly is a mock job board where users can register, search for companies/jobs,
              and apply. The frontend is built with React, the backend with Node/Express and
              PostgreSQL. JSON Web Tokens are utilized for authentication and authorization.
              A couple interesting challenges on the frontend were implementing a pagination
              component and a debounce function for a search component.
            </p>
            <div className="Projects-links">
              <UnderlineOnHoverAnchor className="Projects-links-link" href="https://jobly.demo.davidcsommers.dev/">
                <span className="Projects-links-description">Live Demo </span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="Projects-links-icon Projects-links-icon-demo svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
              </UnderlineOnHoverAnchor>
              <UnderlineOnHoverAnchor className="Projects-links-link" href="https://github.com/DSom20/jobly-fullstack">
                <span className="Projects-links-description">Github Repo </span>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="Projects-links-icon Projects-links-icon-github svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              </UnderlineOnHoverAnchor>
            </div>
          </AnimatedOpacityText>
        </WhiteboardSm>
        <IntersectionObserverWhiteboardSm animationClassName="slide-right" fullBoardDisplay>
          <ProjectorScreen fullScreen transitionOnScroll animationDelayForLargeScreen={3500}
            animationDelayForSmallScreen={4000} style={{"background-color": "white"}}>
            {/* <p>This is board 2</p> */}
            <img className="Projects-image" src={joblyGif} alt="gif of jobly app demo usage"/>
          </ProjectorScreen>

        </IntersectionObserverWhiteboardSm>
      </IntersectionObserverWhiteboardMd>
      <IntersectionObserverWhiteboardMd animationClassName="slide-up">
        <IntersectionObserverWhiteboardSm animationClassName="slide-left">
          <ProjectorScreen fullScreen transitionOnScroll animationDelayForLargeScreen={3500}
            animationDelayForSmallScreen={1400} style={{"background-color": "white"}}>
            <img className="Projects-image" src={microblogGif} alt="gif of microblog app demo usage"/>
          </ProjectorScreen>
        </IntersectionObserverWhiteboardSm>
        <WhiteboardSm className="upper-z-board">
          <h2 className="Projects-title">Microblog</h2>
          <AnimatedOpacityText animationDelay={1}>
            <p className="Projects-tech">React, Redux, Redux-Thunk, React-Bootstrap, Express, RESTful API, PostgreSQL</p>
            <p className="Projects-description">
              Microblog is a blogging app where users can create, edit, and delete
              posts, create and delete comments for each post, and like/dislike posts.
              It uses Redux to prevent some prop-drilling and excessive API requests, utilizing Redux-Thunk for async action creators and the combineReducers function to use multiple reducers for separation of concerns.
              React-Bootstrap is used for styling, and there's even a little list
              reordering animation thanks to React-Flip-Toolkit for when the post
              voting hiearchy changes. [No authentication- fully open source blog :) ]
            </p>
            <div className="Projects-links">
              <UnderlineOnHoverAnchor className="Projects-links-link" href="https://microblog.demo.davidcsommers.dev/">
                <span className="Projects-links-description">Live Demo </span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="Projects-links-icon Projects-links-icon-demo svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
              </UnderlineOnHoverAnchor>
              <UnderlineOnHoverAnchor className="Projects-links-link" href="https://github.com/DSom20/react-redux-microblog">
                <span className="Projects-links-description">Github Repo </span>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="Projects-links-icon Projects-links-icon-github svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              </UnderlineOnHoverAnchor>
            </div>
          </AnimatedOpacityText>
        </WhiteboardSm>
      </IntersectionObserverWhiteboardMd>

      <IntersectionObserverWhiteboardMd animationClassName="slide-up">
        <WhiteboardSm className="upper-z-board">
          <h2 className="Projects-title">Portfolio: Sliding Whiteboards Style</h2>
          <AnimatedOpacityText animationDelay={1}>
            <p className="Projects-tech">React, React Router, React Transition Group, IntersectionObserver, Sass</p>
            <p className="Projects-description">
              This website! I had some fun with transitions and replicating a
              lecture-hall styled sliding whiteboard system. React Transition 
              Group handles transitions between routes (it's a single page app),
              and I tried out the IntersectionObserver Web API to initiate 
              animations on scroll (or technically on an element's intersection 
              with the viewport). I found some room for a higher order
              component, too.
            </p>
            <div className="Projects-links">
              <UnderlineOnHoverAnchor className="Projects-links-link" href="https://github.com/DSom20/portfolio-react">
                <span className="Projects-links-description">Github Repo </span>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="Projects-links-icon Projects-links-icon-github svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              </UnderlineOnHoverAnchor>
            </div>
          </AnimatedOpacityText>
        </WhiteboardSm>
        <IntersectionObserverWhiteboardSm animationClassName="slide-right">
          <ProjectorScreen fullScreen transitionOnScroll animationDelayForLargeScreen={3500}
            animationDelayForSmallScreen={1400}  style={{"background-color": "white"}}>
            <img className="Projects-image" src={whiteboardProjectGif} alt="gif of whiteboard portfolio app demo usage"/>
          </ProjectorScreen>
        </IntersectionObserverWhiteboardSm>

      </IntersectionObserverWhiteboardMd>
      
    </WhiteboardLg>
  )
}

export default Projects;