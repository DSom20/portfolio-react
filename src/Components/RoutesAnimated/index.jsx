import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group';
import About from '../About';
import Projects from '../Projects';
import NotFound from '../NotFound';
import Home from '../Home';
import './RoutesAnimated.scss'

function RoutesAnimated() {
  let location = useLocation();
  return (
    // <TransitionGroup component={null}>
    <SwitchTransition mode='out-in' >
      <CSSTransition
        key={location.key}
        classNames="slide"
        timeout={1000}
      >
        <Switch location={location}>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route><NotFound /></Route>
        </Switch>
        
      </CSSTransition>
    </SwitchTransition>
  )
}

export default RoutesAnimated;