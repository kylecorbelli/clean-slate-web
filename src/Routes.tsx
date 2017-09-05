import * as React from 'react'
import {
  Router,
  Route,
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomeScreenConnected from './containers/HomeScreenConnected'
import SiteHeaderConnected from './containers/SiteHeaderConnected'
import RegisterScreenConnected from './containers/RegisterScreenConnected'
import SignInScreenConnected from './containers/SignInScreenConnected'

const history = createBrowserHistory({})

const Routes = (): JSX.Element => (
  <Router history={history}>
    <div>
      <SiteHeaderConnected history={history} />
      <Route exact={true} path="/" component={HomeScreenConnected} />
      <Route path="/register" component={RegisterScreenConnected} />
      <Route path="/signin" component={SignInScreenConnected} />
    </div>
  </Router>
)

export default Routes
