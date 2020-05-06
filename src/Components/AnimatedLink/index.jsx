import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AnimatedLink.scss';

function AnimatedLink({to, exact, className = '', ...props}) {
  const [stateClassName, setStateClassName] = useState(`AnimatedLink ${className}`);

  function clickHandler() {
    setStateClassName(old => `${old} AnimatedLink-animate-underline`)
  }

  return (
    <Link onClick={clickHandler} to={to} exact={exact} className={stateClassName}>
      {props.children}
    </Link>
  )
}

export default AnimatedLink;