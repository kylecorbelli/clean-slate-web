import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import App from './components/App'
import SiteHeader from './components/SiteHeader'
import RegisterScreen from './components/RegisterScreen'
import SignInScreen from './components/SignInScreen'

const Routes = (): JSX.Element => (
  <Router>
    <div>
      <SiteHeader />
      <Route exact={true} path="/" component={App} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/signin" component={SignInScreen} />
    </div>
  </Router>
)

export default Routes
