import * as React from 'react'
import { Dispatch } from 'redux'
import { UserSignInCredentials } from '../../redux/types'
import './SignInScreen.css'

interface Props {
  readonly signInUser: (userSignInCredentials: UserSignInCredentials) => (dispatch: Dispatch<{}>) => Promise<void>
  readonly history: {
    readonly replace: (path: string) => void
  }
}

interface State {
  readonly email: string
  readonly password: string
  readonly formErrors: Array<string>
}

export default class SignInScreen extends React.Component<Props, State> {
  public constructor (props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      formErrors: [],
    }
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  public updateEmail (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      email: event.currentTarget.value,
    })
  }

  public updatePassword (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      password: event.currentTarget.value,
    })
  }

  public async submitForm (event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    const {
      email,
      password,
    } = this.state
    const {
      history,
      signInUser,
    } = this.props
    const userSignInCredentials: UserSignInCredentials = {
      email,
      password,
    }
    try {
      await signInUser(userSignInCredentials)
      history.replace('/')
    } catch (error) {
      this.setState({
        formErrors: error.response.data.errors,
      })
    }
    console.log('submitting form')
  }

  public render (): JSX.Element {
    const {
      formErrors,
    } = this.state
    const hasFormErrors: boolean = Boolean(formErrors.length)
    return (
      <div className="SignInScreen">
        <h2>Sign In</h2>
        <form className="SignInScreen__form" onSubmit={this.submitForm}>
          <div className="SignInScreen__input-group">
            <label>
              <p>Email:</p>
              <input
                type="email"
                className="SignInScreen__input-field"
                onChange={this.updateEmail}
              />
            </label>
          </div>
          <div className="SignInScreen__input-group">
            <label>
              <p>Password:</p>
              <input
                type="password"
                className="SignInScreen__input-field"
                onChange={this.updatePassword}
              />
            </label>
          </div>
          {hasFormErrors &&
            <ul>
              {formErrors.map((errorMessage, index) => (
                <li className="SignInScreen__form-errors" key={`form-error-${index}`}>
                  {errorMessage}
                </li>
              ))}
            </ul>}
          <button className="SignInScreen__form-submit-button">Sign In</button>
        </form>
      </div>
    )
  }
}
