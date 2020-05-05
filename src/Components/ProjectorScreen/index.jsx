import React, { useState, useEffect, useRef } from 'react';
import './ProjectorScreen.scss';

// Had major bug- was giving transitionOptions a default of empty object, which triggered
// the first useEffect (checking if transitionOnScroll) because technically it was recreating
// a new empty object each time!!!! (Crashed app because transitionOnScroll continues to be true,
// but observable has been unmounted at later point, so observer.current.observe(...) wasn't actually
// observing an Element, which TypeChecking picked up on and crashed app)
function ProjectorScreen({ animationDelayForLargeScreen, animationDelayForSmallScreen,
   transitionOnScroll = null, transitionOptions, intersectedState = null, ...props }) {
  const [willStartLoading, setWillStartLoading] = useState(false);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const INITIAL_COUNT = 3;
  let [count, setCount] = useState(INITIAL_COUNT);
  const [finalAnimationDelay, setFinalAnimationDelay] = useState(0);

  const timerUntilLoadingEnds = useRef();
  const timerUntilLoadingStarts = useRef();


  useEffect(() => {
    if (transitionOnScroll) {
      if (intersectedState && intersectedState.hasIntersected) {
        setWillStartLoading(true);
        if (intersectedState.windowWidthAtTimeOfIntersection > 992) {
          setFinalAnimationDelay(animationDelayForLargeScreen);
        } else {
          setFinalAnimationDelay(animationDelayForSmallScreen);
        }
      }
    }
    else {
      setWillStartLoading(true);
    }
  }, [transitionOnScroll, intersectedState, animationDelayForLargeScreen, animationDelayForSmallScreen])



  // Set up timer to delay the start of project loading animation based on animationDelay prop (or 0)
  // (I realized I could technically just set off a css animation now but keep opacity at 0 for 
  // the animationDelay time, and just have the loading counter count down from higher...
  // but too late now)
  // (That makes me wonder if could just do this whole logic with CSS...but no, because I'm
  // changing the actual elements rendered based on timing...oh well)
  useEffect(() => {
    if (willStartLoading) {
      timerUntilLoadingStarts.current = setTimeout(() => {
        setHasStartedLoading(true);
      }, finalAnimationDelay);
  
      return () => {
        clearTimeout(timerUntilLoadingStarts.current);
      };
    }
  }, [willStartLoading, finalAnimationDelay])

  // When projector triggered to start loading, set interval timer to count down until loaded
  useEffect(() => {
    if (hasStartedLoading) {
      timerUntilLoadingEnds.current = setInterval(() => {
        if (count === 0) {
          clearInterval(timerUntilLoadingEnds.current);
          setIsLoaded(true);
        }
        else setCount(c => c - 1);
      }, 1000);
  
      return () => {
        clearInterval(timerUntilLoadingEnds.current);
      };
    }
  }, [hasStartedLoading, timerUntilLoadingEnds, count, setCount]);

  let frameJSX;
  if (props.frame) {
    frameJSX = (
      <>
        <div className="ProjectorScreen-frame ProjectorScreen-frame-tr"></div>
        <div className="ProjectorScreen-frame ProjectorScreen-frame-bl"></div>
      </>
    )
  }



  const loadedJSX = (
    <div className={'ProjectorScreen ProjectorScreen-loaded' + (props.className || '')} id={props.id} style={props.style}>
      {frameJSX}
      {props.children}
    </div>
  )

  const loadingJSX = (
    <div className={`ProjectorScreen ProjectorScreen-loading`}>
      <p className="ProjectorScreen-countdown">Projector ready in:</p>
      <p className="ProjectorScreen-countdown">{count}</p>
    </div>
  )

  const notYetLoadingJSX = (
    <div className="ProjectorScreen ProjectorScreen-preloading"></div>
  )


    // toying with cool transitiong once projector loaded...
  // const loadedJSXWrapper = (
  //   (<>
  //   <div className="tbWrapper"></div>
  //     <div className="rowOuterWrapper"> 
  //       <div className="rowWrapper">
  //         <div className="rlWrapper"></div>
  //         {loadedJSX}
  //         <div className="rlWrapper"></div>
  //       </div>
  //     </div>
  //   <div className="tbWrapper"></div>
  //   </>
  //   )
  // )
  // if (isLoaded) return loadedJSXWrapper;
  
  if (isLoaded) return loadedJSX;
  if (hasStartedLoading) return loadingJSX;
  return notYetLoadingJSX;
}

export default ProjectorScreen;

// Originally had intersection observer set up on projector too. But its whiteboard container
// could potentially trigger its animation without the projector triggering since the container
// is taller. This led to inconsistencies with the animation delays that looked awkward. (The delay
// is meant to prevent the projector from starting to load until the containing whiteboard(s) have gone
// through their animations. But with the problem stated, the whiteboard transitions would run, 
// and then the user would scroll to the projector and it would start its delay then...long delay
// for user.) So, I ended up passing down a prop from the whiteboard container if/when it has intersected
// as well as the width of the screen at that time, so that we initialize the projector animations then
// and also can apply the appropriate delays based on screen width right then
// (Note: on original, was setting ref={observable} on the notYetLoading JSX div)
  // // Check if expected to start transition only on scroll (ie when visible)
  // // If so, setup IntersectionObserver to call setWillStartLoading once visible
  // // Else call setWillStartLoading right away
  // // (Would love to utilize the HOC I made...but its different b/c having to set state...
  // // Maybe there's a way...)
  // const observable = useRef();
  // const observer = useRef();
  // useEffect(() => {
  //   if (transitionOnScroll) {
  //     let options = transitionOptions || {}
  //     let intersectionHandler = (entries, observer) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           setWillStartLoading(true);
  //           // check window width to see which delay time to use
  //           if (window.innerWidth > 992) {
  //             console.log("big screen")
  //             setFinalAnimationDelay(animationDelayForLargeScreen);
  //           } else {
  //             console.log("lil screen")
  //             console.log(animationDelayForSmallScreen)
  //             setFinalAnimationDelay(animationDelayForSmallScreen);
  //           }
  //           observer.unobserve(entry.target);
  //         }
  //       })
  //     }
  //     observer.current = new IntersectionObserver(intersectionHandler, options);
  //     observer.current.observe(observable.current);

  //     return () => observer.current.disconnect();
  //   } else {
  //     setWillStartLoading(true)
  //   }
  // }, [setWillStartLoading, observable, observer, transitionOnScroll, transitionOptions,
  //     setFinalAnimationDelay, animationDelayForLargeScreen, animationDelayForSmallScreen])