import {
  ReduxState
} from './types'

const initialState: ReduxState = {
  currentUser: {
    isLoggedIn: false,
    isLoading: false,
    firstName: null,
  }
}

export default initialState
