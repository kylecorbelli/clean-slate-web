import * as React from 'react'
import {
  Dispatch,
} from 'redux'
import {
  UserRegistrationDetails,
} from '../../redux/types'
import './RegisterScreen.css'

interface Props {
  readonly registerUser: (userRegistrationDetails: UserRegistrationDetails) => (dispatch: Dispatch<{}>) => Promise<void>
  readonly history: {
    readonly replace: (path: string) => void
  }
}

interface State {
  readonly firstName: string
  readonly email: string
  readonly password: string
  readonly passwordConfirmation: string
  readonly formErrors: Array<string>
}

export default class RegisterScreen extends React.Component<Props, State> {
  public constructor (props: Props) {
    super(props)
    this.state = {
      firstName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      formErrors: [],
    }
    this.updateFirstName = this.updateFirstName.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updatePasswordConfirmation = this.updatePasswordConfirmation.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  public updateFirstName (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      firstName: event.currentTarget.value,
    })
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

  public updatePasswordConfirmation (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      passwordConfirmation: event.currentTarget.value,
    })
  }

  public async submitForm (event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    const {
      registerUser,
      history,
    } = this.props
    const {
      firstName,
      email,
      password,
      passwordConfirmation,
    } = this.state
    try {
      await registerUser({
        firstName,
        email,
        password,
        passwordConfirmation,
      })
      history.replace('/')
    } catch (error) {
      this.setState({
        formErrors: error.response.data.errors.full_messages,
      })
    }
  }

  public render (): JSX.Element {
    const {
      formErrors,
    } = this.state
    const hasFormErrors: boolean = Boolean(formErrors.length)
    return (
      <div className="RegisterScreen">
        <h2>Register</h2>
        <form className="RegisterScreen__form" onSubmit={this.submitForm}>
          <div className="RegisterScreen__input-group">
            <label>
              <p>First Name:</p>
              <input
                type="string"
                className="RegisterScreen__input-field"
                onChange={this.updateFirstName}
              />
            </label>
          </div>
          <div className="RegisterScreen__input-group">
            <label>
              <p>Email:</p>
              <input
                type="email"
                className="RegisterScreen__input-field"
                onChange={this.updateEmail}
              />
            </label>
          </div>
          <div className="RegisterScreen__input-group">
            <label>
              <p>Password:</p>
              <input
                type="password"
                className="RegisterScreen__input-field"
                onChange={this.updatePassword}
              />
            </label>
          </div>
          <div className="RegisterScreen__input-group">
            <label>
              <p>Password Cofirmation:</p>
              <input
                type="password"
                className="RegisterScreen__input-field"
                onChange={this.updatePasswordConfirmation}
              />
            </label>
          </div>
          {hasFormErrors &&
            <ul>
              {formErrors.map((errorMessage, index) => (
                <li className="RegisterScreen__form-error" key={`form-error-${index}`}>
                  {errorMessage}
                </li>
              ))}
            </ul>}
          <button className="RegisterScreen__form-submit-button" type="submit">Register</button>
        </form>
      </div>
    )
  }
}
