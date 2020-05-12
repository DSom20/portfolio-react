import React, { useRef, useEffect, useState } from 'react';

function withIntersectionObserver(WrappedComponent) {
  return function WithIntersectionObserver({ animationClassName, transitionCallback, transitionOptions, className = "", ...props }) {
    const observer = useRef();
    const observable = useRef();
    const [intersectedState, setIntersectedState] = useState({hasIntersected: false, windowWidthAtTimeOfIntersection: null });

    let classNamesBeforeIntersection = `${className} start-transparent`;
    let classNamesAfterIntersection; 
    if (intersectedState.hasIntersected) {
      if ((animationClassName === "slide-right" || animationClassName === "slide-left") 
            && intersectedState.windowWidthAtTimeOfIntersection <= 992) {
        classNamesAfterIntersection = `${className} slide-down play`;
      } else {
        classNamesAfterIntersection = `${className} ${animationClassName} play`;
      }
    }
  
    useEffect(() => {
      
      let basicIntersectionOptions = {
        root: null,
        rootMargin: "-80px", // might want to change this value at some point...
        threshold: 0
      }
      let options = transitionOptions || basicIntersectionOptions;
      let intersectionHandler = (entries,observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // // I only have slide-right and left on whiteboard smalls. I really wanted to avoid
            // // IntersectionObservers on smalls that are children of medium, ideally just having
            // // IO on the medium, and when it intersects it gets a "play" css rule which could
            // // trigger children's animations to play as well (after their appropriate delays).
            // // BUT, the small children need to slide vertically on small screens and horizontally
            // // on large screens. If I simply give them a different animation based on css media
            // // breakpoints, then whenever the viewport size changes, the other animation will retrigger.
            // // SO, I have to keep an IO on the children small whiteboards and give them an appropriate class
            // // right at the time where they get scrolled to, and that class will stay forever so 
            // // the animation only ever gets run once. (Could theoretically be problem if person changes
            // // viewport size right after they scroll to it...)
            // if ((animationClassName === "slide-right" || animationClassName === "slide-left") 
            //       && window.innerWidth <= 992) {
            //     entry.target.classList.add("slide-down", "play");
            // } else {
            //   entry.target.classList.add(animationClassName, "play");
            // }
            // // entry.target.classList.add(animationClassName, "play"); // play is to trigger AnimatedOpacityText
            // // technically animation still has transparent class, but animation ends with forwards on
            // // opacity 1, which overwrites underlying transparent class. Would be nice to clean up though, so:
            // entry.target.classList.remove("start-transparent"); 
            setIntersectedState(old => ({hasIntersected: true, windowWidthAtTimeOfIntersection: window.innerWidth }));
            observer.unobserve(entry.target);
          }
        })
      }
      observer.current = new IntersectionObserver(intersectionHandler, options);
      observer.current.observe(observable.current);
      return () => observer.current.disconnect();
    }, [observable, observer, setIntersectedState, animationClassName, transitionOptions])

    return (
      <WrappedComponent
        ref={observable}
        className={intersectedState.hasIntersected ? classNamesAfterIntersection : classNamesBeforeIntersection}
        intersectedState={intersectedState}
         {...props}/>);
  }
}

export default withIntersectionObserver;