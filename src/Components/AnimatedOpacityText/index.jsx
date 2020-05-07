// import React, { useRef, useEffect, useState } from 'react';
import React from 'react';
import './AnimatedOpacityText.scss';

function AnimatedOpacityText({ startAnimationOnMounting = false, animationDuration = 5, animationDelay = 0, ...props }) {
  /* I was using IntersectionObserver to trigger animation, but there will always be a parent
    with its own IntersectionObserver. I changed it so the parent, when intersected initially,
    gets a classname "play". AnimatedOpacityText animation starts paused, but it has a selector
    such that when it is a child of a "play"ed element, its animated transitions to "running"
  */

  // const [animationActivated, setAnimationActivated] = useState(false);
  // const observable = useRef();
  // const observer = useRef();

  // useEffect(() => {
  //   if (transitionOnScroll) {
  //     let options = transitionOptions || {}
  //     let intersectionHandler = (entries, observer) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           setAnimationActivated(true);
  //           observer.unobserve(entry.target);
  //         }
  //       })
  //     }
  //     observer.current = new IntersectionObserver(intersectionHandler, options);
  //     observer.current.observe(observable.current);

  //     return () => observer.current.disconnect();
  //   } else {
  //     setAnimationActivated(true);
  //   }
  // }, [setAnimationActivated, observable, observer, transitionOnScroll, transitionOptions, animationDelay])

  // useEffect(() => {
  //   if (props.transitionCallback) {
  //     let options = props.transitionOptions || {};
  //     observer.current = new IntersectionObserver(props.transitionCallback, options);
  //     observer.current.observe(observable.current);
  //     return () => observer.current.disconnect();
  //   }
  // }, [observable, observer, props.transitionCallback, props.transitionOptions])

  return (
    <div className="AnimatedOpacityText-container">
      <div className={'AnimatedOpacityText ' + (props.className || '')} id={props.id} style={props.style}>
      {/* <div ref={observable} className={'AnimatedOpacityText ' + (props.className || '')} id={props.id} style={props.style}> */}
        {props.children}
      </div>
      {/* !!animation-delay is showing up as 3 separate identical rules in dev tools inspector...
      not sure why */}
      <div className={`AnimatedOpacityText-overlay AnimatedOpacityText-overlay-animation 
                      
                      ${startAnimationOnMounting && 'play'}`}
           style={{"animation-duration": `${animationDuration}s`, "animation-delay": `${animationDelay}s` }}>
      </div>
      {/* <div className={`AnimatedOpacityText-overlay animation-delay-${animationDelay} ${animationActivated ? "AnimatedOpacityText-overlay-animation" : ''}`} ></div> */}
    </div>
  )
}

export default AnimatedOpacityText;