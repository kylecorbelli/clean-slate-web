import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import App from './components/App'
import SiteHeaderConnected from './containers/SiteHeaderConnected'
import RegisterScreenConnected from './containers/RegisterScreenConnected'
import SignInScreenConnected from './containers/SignInScreenConnected'

const Routes = (): JSX.Element => (
  <Router>
    <div>
      <SiteHeaderConnected />
      <Route exact={true} path="/" component={App} />
      <Route path="/register" component={RegisterScreenConnected} />
      <Route path="/signin" component={SignInScreenConnected} />
    </div>
  </Router>
)

export default Routes
