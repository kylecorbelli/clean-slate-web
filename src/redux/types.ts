export interface UserAttributes {
  readonly firstName: string | null
}

export interface User {
  readonly isLoggedIn: boolean
  readonly isLoading: boolean
  readonly attributes: UserAttributes
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

export type SIGNIN_REQUEST_SENT = 'SIGNIN_REQUEST_SENT'
export const SIGNIN_REQUEST_SENT: SIGNIN_REQUEST_SENT = 'SIGNIN_REQUEST_SENT'

export type SIGNIN_REQUEST_SUCCEEDED = 'SIGNIN_REQUEST_SUCCEEDED'
export const SIGNIN_REQUEST_SUCCEEDED: SIGNIN_REQUEST_SUCCEEDED = 'SIGNIN_REQUEST_SUCCEEDED'

export type SIGNIN_REQUEST_FAILED = 'SIGNIN_REQUEST_FAILED'
export const SIGNIN_REQUEST_FAILED: SIGNIN_REQUEST_FAILED = 'SIGNIN_REQUEST_FAILED'

export type SIGNOUT_REQUEST_SENT = 'SIGNOUT_REQUEST_SENT'
export const SIGNOUT_REQUEST_SENT: SIGNOUT_REQUEST_SENT = 'SIGNOUT_REQUEST_SENT'

export type SIGNOUT_REQUEST_SUCCEEDED = 'SIGNOUT_REQUEST_SUCCEEDED'
export const SIGNOUT_REQUEST_SUCCEEDED: SIGNOUT_REQUEST_SUCCEEDED = 'SIGNOUT_REQUEST_SUCCEEDED'

export type SIGNOUT_REQUEST_FAILED = 'SIGNOUT_REQUEST_FAILED'
export const SIGNOUT_REQUEST_FAILED: SIGNOUT_REQUEST_FAILED = 'SIGNOUT_REQUEST_FAILED'

export interface UserRegistrationDetails {
  readonly firstName: string
  readonly email: string
  readonly password: string
  readonly passwordConfirmation: string
}

export interface UserSignInCredentials {
  readonly email: string
  readonly password: string
}

export interface UserSignOutCredentials {
  readonly 'access-token': string
  readonly client: string
  readonly uid: string
}

export interface RegistrationRequestSentAction {
  readonly type: REGISTRATION_REQUEST_SENT
}

export interface RegistrationRequestSucceededAction {
  readonly type: REGISTRATION_REQUEST_SUCCEEDED
  readonly payload: {
    readonly userAttributes: UserAttributes
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
    readonly userAttributes: UserAttributes
  }
}

export interface VerifyTokenRequestFailedAction {
  readonly type: VERIFY_TOKEN_REQUEST_FAILED
}

export interface SignInRequestSentAction {
  readonly type: SIGNIN_REQUEST_SENT
}

export interface SignInRequestSucceededAction {
  readonly type: SIGNIN_REQUEST_SUCCEEDED
  readonly payload: {
    readonly userAttributes: UserAttributes
  }
}

export interface SignInRequestFailedAction {
  readonly type: SIGNIN_REQUEST_FAILED
}

export interface SignOutRequestSentAction {
  readonly type: SIGNOUT_REQUEST_SENT
}

export interface SignOutRequestSucceededAction {
  readonly type: SIGNOUT_REQUEST_SUCCEEDED
}

export interface SignOutRequestFailedAction {
  readonly type: SIGNOUT_REQUEST_FAILED
}

export type ReduxAction = RegistrationRequestSentAction
  | RegistrationRequestSucceededAction
  | RegistrationRequestFailedAction
  | VerifyTokenRequestSentAction
  | VerifyTokenRequestSucceededAction
  | VerifyTokenRequestFailedAction
  | SignInRequestSentAction
  | SignInRequestSucceededAction
  | SignInRequestFailedAction
  | SignOutRequestSentAction
  | SignOutRequestSucceededAction
  | SignOutRequestFailedAction
