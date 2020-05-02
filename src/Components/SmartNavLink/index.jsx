import React, { useRef, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './SmartNavLink.scss';

function SmartNavLink({ propClassNames = '', exact, toPath, ...props}) {
  // INITIALIZE stateClassNames with ignore-active-animation
  // Remove it later by just reassigning state to propClassNames + whatever
  const [stateClassNames, setStateClassNames] = useState(`${propClassNames} ignore-active-animation`);
  let firstTimeActive = useRef(true);
  let justMounted = useRef(true);
  let location = useLocation();
  let wasActiveOnLoadAndNeedsIgnoreAnimationRemovedWhenLocationChanges = useRef(false);
  

  useEffect(() => {
    // If was active link on page load and now changing pages, add flip-to-non-active
    // and remove ignore-active-animation so it animates next time around
    if (wasActiveOnLoadAndNeedsIgnoreAnimationRemovedWhenLocationChanges.current) {
      setStateClassNames(`${propClassNames} flip-to-non-active`);
    }
    // if the active link on page load, don't change stateClassNames yet
    else if (justMounted.current && location.pathname === toPath) {
      wasActiveOnLoadAndNeedsIgnoreAnimationRemovedWhenLocationChanges.current = true;
      firstTimeActive.current = false;
    }
    // if not active on page load, and now has become active for first time,
    // add flip-to-non-active to animate backk once no longer active
    else if (location.pathname === toPath && firstTimeActive.current) {
      firstTimeActive.current = false;
      setStateClassNames(`${propClassNames} flip-to-non-active`);
    }
    // need to know whether useEffect triggered on mounting or later updates
    // just for sake of dealing with if link is active initially on page load
    justMounted.current = false;
  }, [setStateClassNames, firstTimeActive, location, propClassNames, toPath])

  return (
      <NavLink 
        className={stateClassNames}
        exact={exact}
        to={toPath}>
          {props.children}
      </NavLink>
  )
}

export default SmartNavLink;