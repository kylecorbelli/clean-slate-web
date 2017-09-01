import {
  User,
  ReduxAction,
  REGISTRATION_REQUEST_SENT,
  REGISTRATION_REQUEST_SUCCEEDED,
  REGISTRATION_REQUEST_FAILED,
  VERIFY_TOKEN_REQUEST_SENT,
  VERIFY_TOKEN_REQUEST_SUCCEEDED,
  VERIFY_TOKEN_REQUEST_FAILED,
} from '../../types'
import initialState from '../../initial-state'

const {
  currentUser: initialUser,
} = initialState

const currentUser = (state: User = initialUser, action: ReduxAction): User => {
  switch (action.type) {
    case REGISTRATION_REQUEST_SENT:
    case VERIFY_TOKEN_REQUEST_SENT:
      return {
        ...state,
        isLoading: true,
      }
    case REGISTRATION_REQUEST_SUCCEEDED:
    case VERIFY_TOKEN_REQUEST_SUCCEEDED:
      const { userAttributes } = action.payload
      return {
        ...state,
        attributes: { ...userAttributes },
        isLoading: false,
        isLoggedIn: true,
      }
    case REGISTRATION_REQUEST_FAILED:
    case VERIFY_TOKEN_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      }
    default:
      return state
  }
}

export default currentUser
