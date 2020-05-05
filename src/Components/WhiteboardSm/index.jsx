import React from 'react';
import './WhiteboardSm.scss';

const WhiteboardSm = React.forwardRef((props, ref) => (
  <div ref={ref} className={'WhiteboardSm ' + (props.className || '')} id={props.id} style={props.style}>
    {props.children}
  </div>
));


export default WhiteboardSm;

// old way before I had HOC intersection observer 

  // function WhiteboardSm(props) {
  //   const observable = useRef();
  //   const observer = useRef();
  
  //   useEffect(() => {
  //     if (props.transitionCallback) {
  //       let options = props.transitionOptions || {};
  //       observer.current = new IntersectionObserver(props.transitionCallback, options);
  //       observer.current.observe(observable.current);
  //       return () => observer.current.disconnect();
  //     }
  //   }, [observable, observer, props.transitionCallback, props.transitionOptions])
  
  //   return (
  //     <div ref={observable} className={'WhiteboardSm ' + (props.className || '')} id={props.id} style={props.style}>
  //       {props.children}
  //     </div>
  //   )
  // }