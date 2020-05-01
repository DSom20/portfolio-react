import React, { useRef, useEffect } from 'react';
import './WhiteboardMd.scss';

function WhiteboardMd(props) {
  const observable = useRef();
  const observer = useRef();

  useEffect(() => {
    if (props.transitionCallback) {
      let options = props.transitionOptions || {};
      observer.current = new IntersectionObserver(props.transitionCallback, options);
      observer.current.observe(observable.current);
      return () => observer.current.disconnect();
    }
  }, [observable, observer, props.transitionCallback, props.transitionOptions])
  return (
    <div ref={observable} className={'WhiteboardMd ' + (props.className || '')} id={props.id} style={props.style}>
      {props.children}
    </div>
  )
}

export default WhiteboardMd;