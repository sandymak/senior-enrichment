'use strict'
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import store from './store'
// import Root from './components/Root'
import CampiContainer from './components/Campi';

render(
  <Provider store = {store} >
    <CampiContainer />
  </Provider>,
  document.getElementById('main')
)
