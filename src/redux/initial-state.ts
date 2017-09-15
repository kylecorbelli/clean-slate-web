import {
  ReduxState
} from './types'

const initialState: ReduxState = {
  reduxTokenAuth: {
    currentUser: {
      isLoggedIn: false,
      isLoading: false,
      attributes: {
        firstName: null,
        imageUrl: null,
      },
    },
  },
}

export default initialState
