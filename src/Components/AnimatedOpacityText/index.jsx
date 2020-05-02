import React, { useRef, useEffect, useState } from 'react';
import './AnimatedOpacityText.scss';

function AnimatedOpacityText({ transitionOnScroll, transitionOptions, animationDelay = 0, ...props }) {
  const [animationActivated, setAnimationActivated] = useState(false);
  const observable = useRef();
  const observer = useRef();

  useEffect(() => {
    if (transitionOnScroll) {
      let options = transitionOptions || {}
      let intersectionHandler = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimationActivated(true);
            observer.unobserve(entry.target);
          }
        })
      }
      observer.current = new IntersectionObserver(intersectionHandler, options);
      observer.current.observe(observable.current);

      return () => observer.current.disconnect();
    } else {
      setAnimationActivated(true);
    }
  }, [setAnimationActivated, observable, observer, transitionOnScroll, transitionOptions, animationDelay])

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
      <p ref={observable} className={'AnimatedOpacityText ' + (props.className || '')} id={props.id} style={props.style}>
        {props.children}
      </p>
      <div className={`AnimatedOpacityText-overlay animation-delay-${animationDelay} ${animationActivated ? "AnimatedOpacityText-animation" : ''}`} ></div>
    </div>
  )
}

export default AnimatedOpacityText;