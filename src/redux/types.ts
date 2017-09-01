export interface User {
  readonly isLoggedIn: boolean
  readonly isLoading: boolean
  readonly firstName: string | null
}

export interface ReduxState {
  readonly currentUser: User
}

export type REGISTRATION_REQUEST_SENT = 'REGISTRATION_REQUEST_SENT'
export const REGISTRATION_REQUEST_SENT: REGISTRATION_REQUEST_SENT = 'REGISTRATION_REQUEST_SENT'

export type REGISTRATION_REQUEST_SUCCEEDED = 'REGISTRATION_REQUEST_SUCCEEDED'
export const REGISTRATION_REQUEST_SUCCEEDED: REGISTRATION_REQUEST_SUCCEEDED = 'REGISTRATION_REQUEST_SUCCEEDED'

export type REGISTRATION_REQUEST_FAILED = 'REGISTRATION_REQUEST_FAILED'
export const REGISTRATION_REQUEST_FAILED: REGISTRATION_REQUEST_FAILED = 'REGISTRATION_REQUEST_FAILED'

export type VERIFY_TOKEN_REQUEST_SENT = 'VERIFY_TOKEN_REQUEST_SENT'
export const VERIFY_TOKEN_REQUEST_SENT: VERIFY_TOKEN_REQUEST_SENT = 'VERIFY_TOKEN_REQUEST_SENT'

export type VERIFY_TOKEN_REQUEST_SUCCEEDED = 'VERIFY_TOKEN_REQUEST_SUCCEEDED'
export const VERIFY_TOKEN_REQUEST_SUCCEEDED: VERIFY_TOKEN_REQUEST_SUCCEEDED = 'VERIFY_TOKEN_REQUEST_SUCCEEDED'

export type VERIFY_TOKEN_REQUEST_FAILED = 'VERIFY_TOKEN_REQUEST_FAILED'
export const VERIFY_TOKEN_REQUEST_FAILED: VERIFY_TOKEN_REQUEST_FAILED = 'VERIFY_TOKEN_REQUEST_FAILED'

export interface UserRegistrationDetails {
  readonly firstName: string
  readonly email: string
  readonly password: string
  readonly passwordConfirmation: string
}

export interface RegistrationRequestSentAction {
  readonly type: REGISTRATION_REQUEST_SENT
}

export interface RegistrationRequestSucceededAction {
  readonly type: REGISTRATION_REQUEST_SUCCEEDED
  readonly payload: {
    readonly user: User
  }
}

export interface RegistrationRequestFailedAction {
  readonly type: REGISTRATION_REQUEST_FAILED
}

export interface VerifyTokenRequestSentAction {
  readonly type: VERIFY_TOKEN_REQUEST_SENT
}

export interface VerifyTokenRequestSucceededAction {
  readonly type: VERIFY_TOKEN_REQUEST_SUCCEEDED
  readonly payload: {
    readonly user: User
  }
}

export interface VerifyTokenRequestFailedAction {
  readonly type: VERIFY_TOKEN_REQUEST_FAILED
}

export type ReduxAction = RegistrationRequestSentAction
  | RegistrationRequestSucceededAction
  | RegistrationRequestFailedAction
  | VerifyTokenRequestSentAction
  | VerifyTokenRequestSucceededAction
  | VerifyTokenRequestFailedAction
