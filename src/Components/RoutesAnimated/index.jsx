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
  // This is total time allowed for transition, including delays. The transition doesn't
  // need to utilize all the time. I have exit delaying, utilizing almost full time.
  // But I have enter/appear not delaying, finishing in much less than time allotted
  const pageTransitionTime = 2000;
  return (
    // <TransitionGroup component={null}>
    <SwitchTransition mode='out-in' >
      <CSSTransition
        key={location.key}
        classNames="slide"
        timeout={pageTransitionTime}
        in
        appear
      >
        <Switch location={location}>
          <Route exact path='/about'>
            <About delay={pageTransitionTime}/>
          </Route>
          <Route exact path='/projects'>
            <Projects delay={pageTransitionTime}/>
          </Route>
          <Route exact path='/'>
            <Home delay={pageTransitionTime}/>
          </Route>
          <Route><NotFound /></Route>
        </Switch>
        
      </CSSTransition>
    </SwitchTransition>
  )
}

export default RoutesAnimated;