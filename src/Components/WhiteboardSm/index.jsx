import React from 'react';
import './WhiteboardSm.scss';

const WhiteboardSm = React.forwardRef(({intersectedState = null, ...props}, ref) => {
  // The following allows props.children to potentially initiate their own animations based on when
  // this parent whiteboard first intersected the viewport, rather than requiring their own intersection
  // observer. React.cloneElement takes each child and ADDS the intersectedState prop to the child's props object
  let children;
  if (intersectedState) {
    children = React.Children.map(props.children, (child) => (
      React.cloneElement(child, {intersectedState: intersectedState})
    ))
  } else {
    children = props.children;
  }

  return (
    <div ref={ref} className={'WhiteboardSm ' + (props.className || '')} id={props.id} style={props.style}>
      {children}
    </div>
  )
});


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