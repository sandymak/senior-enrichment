'use strict'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store'

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddCampus from './components/AddCampus';
import SingleCampus from './components/SingleCampus';
import AllCampi from './components/AllCampi';
import AddStudent from './components/AddStudent';
import SingleStudent from './components/SingleStudent';
import EditStudent from './components/EditStudent';
import AllStudents from './components/AllStudents';


render(
  <Provider store = {store} >
    <Router>
      <div>
        <Navbar />
          <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/campi/addCampus" component={AddCampus} />
          <Route exact path="/campi/:campusId" component={SingleCampus} />
          <Route path="/campi" component={AllCampi} />
          <Route exact path="/students/addStudent" component={AddStudent} />
          <Route exact path="/students/editStudent/:studentId" component={EditStudent} />
          <Route exact path="/students/:studentId" component={SingleStudent} />
          <Route path="/students" component={AllStudents} />
          <Route component={Home} />
          </Switch>
        </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)
