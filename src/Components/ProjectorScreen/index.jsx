import React, { useState, useEffect, useRef } from 'react';
import './ProjectorScreen.scss';

// Had major bug- was giving transitionOptions a default of empty object, which triggered
// the first useEffect (checking if transitionOnScroll) because technically it was recreating
// a new empty object each time!!!! (Crashed app because transitionOnScroll continues to be true,
// but observable has been unmounted at later point, so observer.current.observe(...) wasn't actually
// observing an Element, which TypeChecking picked up on and crashed app)
function ProjectorScreen({ animationDelayForLargeScreen, animationDelayForSmallScreen, transitionOnScroll = null, 
    transitionOptions, ...props }) {
  const [willStartLoading, setWillStartLoading] = useState(false);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const INITIAL_COUNT = 3;
  let [count, setCount] = useState(INITIAL_COUNT);
  const [finalAnimationDelay, setFinalAnimationDelay] = useState(0);

  const timerUntilLoadingEnds = useRef();
  const timerUntilLoadingStarts = useRef();
  const observable = useRef();
  const observer = useRef();

  // Check if expected to start transition only on scroll (ie when visible)
  // If so, setup IntersectionObserver to call setWillStartLoading once visible
  // Else call setWillStartLoading right away
  // (Would love to utilize the HOC I made...but its different b/c having to set state...
  // Maybe there's a way...)
  useEffect(() => {
    if (transitionOnScroll) {
      let options = transitionOptions || {}
      let intersectionHandler = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setWillStartLoading(true);
            // check window width to see which delay time to use
            if (window.innerWidth > 992) {
              console.log("big screen")
              setFinalAnimationDelay(animationDelayForLargeScreen);
            } else {
              console.log("lil screen")
              console.log(animationDelayForSmallScreen)
              setFinalAnimationDelay(animationDelayForSmallScreen);
            }
            observer.unobserve(entry.target);
          }
        })
      }
      observer.current = new IntersectionObserver(intersectionHandler, options);
      observer.current.observe(observable.current);

      return () => observer.current.disconnect();
    } else {
      setWillStartLoading(true)
    }
  }, [setWillStartLoading, observable, observer, transitionOnScroll, transitionOptions,
      setFinalAnimationDelay, animationDelayForLargeScreen, animationDelayForSmallScreen])

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
      <p>Project ready in</p>
      <p>{count}</p>
    </div>
  )

  const notYetLoadingJSX = (
    <div className="ProjectorScreen ProjectorScreen-preloading" ref={observable}></div>
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