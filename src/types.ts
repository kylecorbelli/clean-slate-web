export interface AuthHeaders {
  readonly 'access-token': string
  readonly 'token-type': string
  readonly client: string
  readonly expiry: string
  readonly uid: string
}

export interface AuthResponse {
  readonly headers: AuthHeaders
}

export interface VerificationParams {
  readonly uid: string
  readonly client: string
  readonly 'access-token': string
}
