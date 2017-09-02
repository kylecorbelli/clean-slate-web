import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import {
  User,
  UserSignOutCredentials,
} from '../../redux/types'
import './SiteHeader.css'

interface Props {
  readonly currentUser: User
  readonly signOutUser: (userSignOutCredentials: UserSignOutCredentials) => (dispatch: Dispatch<{}>) => Promise<void>
  readonly history : {
    readonly replace: (path: string) => void
  }
}

interface State {}

export default class SiteHeader extends React.Component<Props, State> {
  public constructor (props: Props) {
    super(props)
    this.signOut = this.signOut.bind(this)
  }

  public async signOut (): Promise<void> {
    const {
      history,
      signOutUser,
    } = this.props
    const userSignOutCredentials: UserSignOutCredentials = {
      'access-token': localStorage.getItem('access-token') as string,
      client: localStorage.getItem('client') as string,
      uid: localStorage.getItem('uid') as string,
    }
    try {
      await signOutUser(userSignOutCredentials)
      history.replace('/')
    } catch (error) {
      // Probably want to use the all-purpose alert system:
      console.log('oops')
    }
  }

  public render (): JSX.Element {
    const {
      currentUser: {
        attributes: {
          firstName,
        },
        isLoggedIn,
      },
    } = this.props
    return (
      <div className="SiteHeader">
        <Link to="/"><h1>Clean Slate</h1></Link>
        {isLoggedIn && (
          <div>
            <p>Welcome {firstName}!</p>
            <p className="SiteHeader__sign-out" onClick={this.signOut}>Sign Out</p>
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <Link to="/register">Register</Link>
            <br />
            <Link to="/signin">Sign In</Link>
          </div>
        )}
      </div>
    )
  }
}
