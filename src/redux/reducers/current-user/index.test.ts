import currentUser from './index'
import {
  RegistrationRequestSentAction,
  RegistrationRequestSucceededAction,
  RegistrationRequestFailedAction,
  VerifyTokenRequestSentAction,
  VerifyTokenRequestSucceededAction,
  VerifyTokenRequestFailedAction,
  User,
} from '../../types'
import {
  registrationRequestSent,
  registrationRequestSucceeded,
  registrationRequestFailed,
  verifyTokenRequestSent,
  verifyTokenRequestSucceeded,
  verifyTokenRequestFailed,
} from '../../actions'

describe('currentUser', () => {
  const alreadyLoadingState: User = {
    firstName: null,
    isLoading: true,
    isLoggedIn: false,
  }

  describe('REGISTRATION_REQUEST_SENT', () => {
    it('indicates that the current user is loading', () => {
      const action: RegistrationRequestSentAction = registrationRequestSent()
      const newState: User = currentUser(undefined, action)
      expect(newState.isLoading).toBe(true)
    })
  })

  describe('REGISTRATION_REQUEST_SUCCEEDED', () => {
    it('sets the current user and indicates that it is no longer loading but not yet logged in', () => {
      const newUser: User = {
        firstName: 'Rick',
        isLoading: false,
        isLoggedIn: true,
      }
      const action: RegistrationRequestSucceededAction = registrationRequestSucceeded(newUser)
      const newState: User = currentUser(alreadyLoadingState, action)
      expect(newState).toEqual(newUser)
    })
  })

  describe('REGISTRATION_REQUEST_FAILED', () => {
    it('indicates that the current user is no longer loading', () => {
      const action: RegistrationRequestFailedAction = registrationRequestFailed()
      const newState: User = currentUser(alreadyLoadingState, action)
      expect(newState.isLoading).toBe(false)
    })
  })

  describe('VERIFY_TOKEN_REQUEST_SENT', () => {
    it('indicates that the current user is loading', () => {
      const action: VerifyTokenRequestSentAction = verifyTokenRequestSent()
      const newState: User = currentUser(undefined, action)
      expect(newState.isLoading).toBe(true)
    })
  })

  describe('VERIFY_TOKEN_REQUEST_SUCCEEDED', () => {
    it('sets the current user and indicates that it is no longer loading but not yet logged in', () => {
      const newUser: User = {
        firstName: 'Rick',
        isLoading: false,
        isLoggedIn: true,
      }
      const action: VerifyTokenRequestSucceededAction = verifyTokenRequestSucceeded(newUser)
      const newState: User = currentUser(alreadyLoadingState, action)
      expect(newState).toEqual(newUser)
    })
  })

  describe('VERIFY_TOKEN_REQUEST_FAILED', () => {
    it('indicates that the current user is no longer loading and is not logged in', () => {
      const loggedInState: User = {
        ...alreadyLoadingState,
        isLoggedIn: true,
      }
      const action: VerifyTokenRequestFailedAction = verifyTokenRequestFailed()
      const newState: User = currentUser(loggedInState, action)
      expect(newState.isLoading).toBe(false)
      expect(newState.isLoggedIn).toBe(false)
    })
  })
})
