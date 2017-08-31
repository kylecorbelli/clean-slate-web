export interface ReduxState {
  readonly currentUser: {
    readonly isLoggedIn: boolean
    readonly firstName: string | null
    readonly lastName: string | null
  }
}

export interface ReduxAction {
  readonly type: string
}
