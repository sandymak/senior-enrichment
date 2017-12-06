'use strict'
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import Students from './compnents/Students'

render( <Provider store = {
    store
  } > {
    /*
          <Root/>
        */
  }
  <Students />
  </Provider>,
  document.getElementById('main')
)
