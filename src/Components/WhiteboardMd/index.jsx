import React from 'react';
import './WhiteboardMd.scss';

const WhiteboardMd = React.forwardRef((props, ref) => (
    <div ref={ref} className={'WhiteboardMd ' + (props.className || '')} id={props.id} style={props.style}>
      {props.children}
    </div>
));


export default WhiteboardMd;


// old way before I had intersection observer HOC

// ) {
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
//     <div ref={observable} className={'WhiteboardMd ' + (props.className || '')} id={props.id} style={props.style}>
//       {props.children}
//     </div>
//   )
// }
// function WhiteboardMd(props) {
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
//     <div ref={observable} className={'WhiteboardMd ' + (props.className || '')} id={props.id} style={props.style}>
//       {props.children}
//     </div>
//   )
// }
