import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import JeopardyAppRoot from './components/jeopardy_app_root.js'

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={JeopardyAppRoot}/>
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
