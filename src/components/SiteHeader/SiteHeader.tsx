import * as React from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../redux/types'

interface Props {
  readonly currentUser: User
}

const SiteHeader = ({ currentUser }: Props): JSX.Element => {
  const {
    firstName,
    isLoading,
    isLoggedIn,
  } = currentUser
  return (
    <div className="SiteHeader">
      <Link to="/"><h1>Clean Slate</h1></Link>
      {isLoggedIn && (
        <p>Welcome {firstName}!</p>
      )}
      {!isLoggedIn && !isLoading && (
        <div>
          <Link to="/register">Register</Link>
          <br />
          <Link to="/signin">Sign In</Link>
        </div>
      )}
    </div>
  )
}

export default SiteHeader
