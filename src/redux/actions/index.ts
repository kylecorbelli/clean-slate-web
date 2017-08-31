import axios from 'axios'
import { authUrl } from '../../constants'
import { Dispatch } from 'redux'
import {
  User,
  UserRegistrationDetails,
  REGISTRATION_REQUEST_SENT,
  REGISTRATION_REQUEST_SUCCEEDED,
  REGISTRATION_REQUEST_FAILED,
  RegistrationRequestSentAction,
  RegistrationRequestSucceededAction,
  RegistrationRequestFailedAction,
} from '../types'

export const registrationRequestSent = (): RegistrationRequestSentAction => ({
  type: REGISTRATION_REQUEST_SENT,
})

export const registrationRequestSucceeded = (user: User): RegistrationRequestSucceededAction => ({
  type: REGISTRATION_REQUEST_SUCCEEDED,
  payload: {
    user,
  },
})

export const registrationRequestFailed = (): RegistrationRequestFailedAction => ({
  type: REGISTRATION_REQUEST_FAILED,
})

export const registerUser = (
  userRegistrationDetails: UserRegistrationDetails
) => async function (dispatch: Dispatch<{}>): Promise<void> {
  dispatch(registrationRequestSent())
  const {
    firstName,
    email,
    password,
    passwordConfirmation,
  } = userRegistrationDetails
  try {
    await axios({
      method: 'POST',
      url: authUrl,
      data: {
        email,
        name: firstName,
        password,
        password_confirmation: passwordConfirmation,
      },
    })
    const user: User = {
      firstName,
      isLoggedIn: false,
      isLoading: false,
    }
    dispatch(registrationRequestSucceeded(user))
  } catch (error) {
    dispatch(registrationRequestFailed())
    throw error
  }
}
