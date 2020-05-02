import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Nav.scss';
import SmartNavLink from '../SmartNavLink';

function Nav() {
  /* Placeholder used to give card proper width based on text size, since
  card faces are positioned absolutely, but want width to be determined dynamically
  by text size. So placeholder and card-faces need to match margin's/paddings as well.
  Placeholder is given 0 opacity, otherwise it's text kept popping up after a transition... */
  return (
    <nav className='Nav'>
      <div className="Nav-scene">
        <SmartNavLink propClassNames="Nav-link Nav-card" exact toPath='/'>
          <div className="Nav-card-placeholder">David Sommers</div>
          <div className="Nav-card-face Nav-card-face-front">David Sommers</div>
          <div className="Nav-card-face Nav-card-face-back">David Sommers</div>
        </SmartNavLink>
      </div>
      <div className="Nav-scene">
        <SmartNavLink propClassNames="Nav-link Nav-card" exact toPath='/projects'>
          <div className="Nav-card-placeholder">Projects</div>
          <div className="Nav-card-face Nav-card-face-front">Projects</div>
          <div className="Nav-card-face Nav-card-face-back">Projects</div>
        </SmartNavLink>
      </div>
      <div className="Nav-scene">
        <SmartNavLink propClassNames="Nav-link Nav-card" exact toPath='/about'>
          <div className="Nav-card-placeholder">About</div>
          <div className="Nav-card-face Nav-card-face-front">About</div>
          <div className="Nav-card-face Nav-card-face-back">About</div>
        </SmartNavLink>
      </div>
    </nav>
  )
}

export default Nav;

/* 
  I was using simple nav links. Had to use SmartNavLink to handle special transition animation
  If want simple transition, like just rotate, can simply set .active to rotate(180deg) and set
  [transition: transform 3s] on base class so it does proper transition when .active is placed and removed.
  BUT, if want more complex animation, the transition property can't handle that. So you put
  an animate-from-active-to-normal animation on the base class, and animate-to-active animation
  on the .active class. When .active class is placed, it does its animation. When it is removed,
  the element sees its animation property has changed, so it runs what it thinks is its new one (
    which is actually its original one)
  BUTTTTT, that base class animation would trigger right away on page load for all non active
  classes. SOOOO, need to give the base class its animate-from-active-to-normal animation
  only once it's already been active once. Hence SmartNavLink.
  AND FINALLY, on page load, the .active class would trigger an animation right away. We
  need to prevent that, 

  If want to end up changing transition back to being simple, just use normal NavLink's like
  below
<NavLink className='Nav-link' exact to='/projects'>
  Projects
</NavLink>
*/