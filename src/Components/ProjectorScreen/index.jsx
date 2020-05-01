import React, { useState, useEffect, useRef } from 'react';
import './ProjectorScreen.scss';

// Had major bug- was giving transitionOptions a defualt of empty object, which triggered
// the first useEffect (checking if transitionOnScroll) because technically it was recreating
// a new empty object each time!!!! (Crashed app because transitionOnScroll continues to be true,
// but observable has been unmounted at later point, so observer.current.observe(...) wasn't actually
// observing an Element, which TypeChecking picked up on and crashed app)
function ProjectorScreen({ animationDelay = 0, transitionOnScroll = null, 
    transitionOptions, ...props }) {
  const [willStartLoading, setWillStartLoading] = useState(false);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  let [count, setCount] = useState(5);

  const timerUntilLoadingEnds = useRef();
  const timerUntilLoadingStarts = useRef();
  const observable = useRef();
  const observer = useRef();

  // Check if expected to start transition only on scroll (ie when visible)
  // If so, setup IntersectionObserver to call setWillStartLoading once visible
  // Else call setWillStartLoading right away
  useEffect(() => {
    if (transitionOnScroll) {
      let options = transitionOptions || {}
      let intersectionHandler = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setWillStartLoading(true);
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
  }, [setWillStartLoading, observable, observer, transitionOnScroll, transitionOptions])

  // Set up timer to delay the start of project loading animation based on animationDelay prop (or 0)
  useEffect(() => {
    if (willStartLoading) {
      timerUntilLoadingStarts.current = setTimeout(() => {
        setHasStartedLoading(true);
      }, animationDelay);
  
      return () => {
        clearInterval(timerUntilLoadingStarts.current);
      };
    }
  }, [willStartLoading, animationDelay])

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
    <div className="ProjectorScreen ProjectScreen-loading">
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
  
  // if (isLoaded) return loadedJSX;
  if (isLoaded) return loadedJSXWrapper;
  if (hasStartedLoading) return loadingJSX;
  return notYetLoadingJSX;
}

export default ProjectorScreen;