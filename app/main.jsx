'use strict'
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import store from './store'
// import Root from './components/Root'
import StudentsContainer from './components/Students'

render(
  <Provider store = {store} >
    <StudentsContainer />
  </Provider>,
  document.getElementById('main')
)
