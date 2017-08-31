import {
  ReduxState
} from './types'

const initialState: ReduxState = {
  currentUser: {
    isLoggedIn: false,
    firstName: null,
    lastName: null,
  }
}

export default initialState
