'use strict'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store'

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllCampi from './components/AllCampi';
import AllStudents from './components/AllStudents';
import SingleStudent from './components/SingleStudent';
import SingleCampus from './components/SingleCampus';

render(
  <Provider store = {store} >
    <Router>
      <div>
        <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/campi/:campusId" component={SingleCampus} />
            <Route path="/campi" component={AllCampi} />
            <Route exact path="/students/:studentId" component={SingleStudent} />
            <Route path="/students" component={AllStudents} />
            <Route component={Home} />
          </Switch>
        </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)
