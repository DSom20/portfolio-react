import React, { useRef, useEffect } from 'react';

function withIntersectionObserver(WrappedComponent) {
  return function WithIntersectionObserver({ transitionCallback, transitionOptions, ...props }) {
    const observer = useRef();
    const observable = useRef();
  
    useEffect(() => {
      let options = transitionOptions || {};
      observer.current = new IntersectionObserver(transitionCallback, options);
      observer.current.observe(observable.current);
      return () => observer.current.disconnect();
    }, [observable, observer, transitionCallback, transitionOptions])

    // return React.forwardRef((props, observableRef) => {
      return <WrappedComponent  ref={observable} {...props}/>;
    // })
    // return (
    //   <WrappedComponent ref={forwardedObservableRef} {...props} />
    // );
  }

  // return React.forwardRef((props, ref) => {
  //   return <WithIntersectionObserver {...props} forwardedObservableRef={ref} />;
  // })
  // const observableRef = React.createRef();
  // return <WithIntersectionObserver ref={observableRef} {...props}
}

export default withIntersectionObserver;