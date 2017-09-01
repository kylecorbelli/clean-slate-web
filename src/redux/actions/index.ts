import axios from 'axios'
import { authUrl } from '../../constants'
import { Dispatch } from 'redux'
import {
  UserAttributes,
  UserRegistrationDetails,
  UserSignInCredentials,
  REGISTRATION_REQUEST_SENT,
  REGISTRATION_REQUEST_SUCCEEDED,
  REGISTRATION_REQUEST_FAILED,
  VERIFY_TOKEN_REQUEST_SENT,
  VERIFY_TOKEN_REQUEST_SUCCEEDED,
  VERIFY_TOKEN_REQUEST_FAILED,
  SIGNIN_REQUEST_SENT,
  SIGNIN_REQUEST_SUCCEEDED,
  SIGNIN_REQUEST_FAILED,
  RegistrationRequestSentAction,
  RegistrationRequestSucceededAction,
  RegistrationRequestFailedAction,
  VerifyTokenRequestSentAction,
  VerifyTokenRequestSucceededAction,
  VerifyTokenRequestFailedAction,
  SignInRequestSentAction,
  SignInRequestSucceededAction,
  SignInRequestFailedAction,
} from '../types'
import {
  AuthResponse,
  VerificationParams,
} from '../../types'
import {
  setAuthHeaders,
  persistAuthHeadersInLocalStorage,
} from '../../services/auth'

export const registrationRequestSent = (): RegistrationRequestSentAction => ({
  type: REGISTRATION_REQUEST_SENT,
})

export const registrationRequestSucceeded = (userAttributes: UserAttributes): RegistrationRequestSucceededAction => ({
  type: REGISTRATION_REQUEST_SUCCEEDED,
  payload: {
    userAttributes,
  },
})

export const registrationRequestFailed = (): RegistrationRequestFailedAction => ({
  type: REGISTRATION_REQUEST_FAILED,
})

export const registerUser = (
  userRegistrationDetails: UserRegistrationDetails,
) => async function (dispatch: Dispatch<{}>): Promise<void> {
  dispatch(registrationRequestSent())
  const {
    firstName,
    email,
    password,
    passwordConfirmation,
  } = userRegistrationDetails
  try {
    const response: AuthResponse = await axios({
      method: 'POST',
      url: authUrl,
      data: {
        email,
        name: firstName,
        password,
        password_confirmation: passwordConfirmation,
      },
    })
    setAuthHeaders(response.headers)
    persistAuthHeadersInLocalStorage(response.headers)
    const userAttributes: UserAttributes = {
      firstName,
    }
    dispatch(registrationRequestSucceeded(userAttributes))
  } catch (error) {
    dispatch(registrationRequestFailed())
    throw error
  }
}

export const verifyTokenRequestSent = (): VerifyTokenRequestSentAction => ({
  type: VERIFY_TOKEN_REQUEST_SENT,
})

export const verifyTokenRequestSucceeded = (userAttributes: UserAttributes): VerifyTokenRequestSucceededAction => ({
  type: VERIFY_TOKEN_REQUEST_SUCCEEDED,
  payload: {
    userAttributes,
  },
})

export const verifyTokenRequestFailed = (): VerifyTokenRequestFailedAction => ({
  type: VERIFY_TOKEN_REQUEST_FAILED,
})

export const verifyToken = (
  verificationParams: VerificationParams,
) => async function (dispatch: Dispatch<{}>): Promise<void> {
  dispatch(verifyTokenRequestSent())
  try {
    const response = await axios({
      method: 'GET',
      url: `${authUrl}/validate_token`,
      params: verificationParams,
    })
    const { name } = response.data.data
    setAuthHeaders(response.headers)
    persistAuthHeadersInLocalStorage(response.headers)
    const userAttributes: UserAttributes = {
      firstName: name,
    }
    dispatch(verifyTokenRequestSucceeded(userAttributes))
  } catch (error) {
    dispatch(verifyTokenRequestFailed())
  }
}

export const signInRequestSent = (): SignInRequestSentAction => ({
  type: SIGNIN_REQUEST_SENT,
})

export const signInRequestSucceeded = (userAttributes: UserAttributes): SignInRequestSucceededAction => ({
  type: SIGNIN_REQUEST_SUCCEEDED,
  payload: {
    userAttributes,
  },
})

export const signInRequestFailed = (): SignInRequestFailedAction => ({
  type: SIGNIN_REQUEST_FAILED,
})

export const signInUser = (
  userSignInCredentials: UserSignInCredentials,
) => async function (dispatch: Dispatch<{}>): Promise<void> {
  dispatch(signInRequestSent())
  const {
    email,
    password,
  } = userSignInCredentials
  try {
    const response = await axios({
      method: 'POST',
      url: `${authUrl}/sign_in`,
      data: {
        email,
        password,
      },
    })
    setAuthHeaders(response.headers)
    persistAuthHeadersInLocalStorage(response.headers)
    const { name } = response.data.data
    const userAttributes: UserAttributes = {
      firstName: name,
    }
    dispatch(signInRequestSucceeded(userAttributes))
  } catch (error) {
    dispatch(signInRequestFailed())
    throw error
  }
}
