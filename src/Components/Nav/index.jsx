import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav className='Nav'>
      <NavLink className='Nav-link' exact to='/'>
        David Sommers
      </NavLink>
      <NavLink className='Nav-link' exact to='/projects'>
        Projects
      </NavLink>
      <NavLink className='Nav-link' exact to='/about'>
        About
      </NavLink>
    </nav>
  )
}

export default Nav;