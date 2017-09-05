import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Store } from 'redux'
import Routes from './Routes'
import './index.css';
import configureStore from './redux/configure-store'
// import { VerificationParams } from './types'
import { verifyCredentials } from './redux-token-auth-config'
// import { verifyToken } from './redux/actions'

const store: Store<{}> = configureStore()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// An example of how redux-token-auth will make this easy:

// import { authUrl } from '../constants'
// const config = {
//   authUrl,
//   userAttributes: {
//     firstName: 'name',
//   },
//   userRegistrationAttributes: {
//     firstName: 'name',
//   },
// }
// const { verifyCredentials } = generateAuthActions(config)
verifyCredentials(store)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if (localStorage.getItem('access-token')) {
//   const verificationParams: VerificationParams = {
//     'access-token': localStorage.getItem('access-token') as string,
//     client: localStorage.getItem('client') as string,
//     uid: localStorage.getItem('uid') as string,
//   }
//   store.dispatch(verifyToken(verificationParams))
// }

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
