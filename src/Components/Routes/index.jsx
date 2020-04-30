import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../About';
import Projects from '../Projects';
import NotFound from '../NotFound';
import Home from '../Home';
import RoutesAnimated from '../RoutesAnimated';

function Routes() {
  return (
    <Switch>
      {/* <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/projects'>
        <Projects />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route><NotFound /></Route> */}
      <Route path="*">
        <RoutesAnimated />
      </Route>
    </Switch>
  )
}

export default Routes;

