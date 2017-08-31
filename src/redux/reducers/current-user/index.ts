import {
  User,
  ReduxAction,
  REGISTRATION_REQUEST_SENT,
  REGISTRATION_REQUEST_SUCCEEDED,
  REGISTRATION_REQUEST_FAILED,
} from '../../types'
import initialState from '../../initial-state'

const {
  currentUser: initialUser,
} = initialState

const currentUser = (state: User = initialUser, action: ReduxAction): User => {
  switch (action.type) {
    case REGISTRATION_REQUEST_SENT:
      return {
        ...state,
        isLoading: true,
      }
    case REGISTRATION_REQUEST_SUCCEEDED:
      const { user } = action.payload
      return {
        ...user,
        isLoading: false,
        isLoggedIn: false,
      }
    case REGISTRATION_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export default currentUser
