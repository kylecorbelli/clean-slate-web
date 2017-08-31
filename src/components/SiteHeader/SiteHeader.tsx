import * as React from 'react'
import { Link } from 'react-router-dom'

const SiteHeader = (): JSX.Element => (
  <div className="SiteHeader">
    <Link to="/"><h1>Clean Slate</h1></Link>
    <Link to="/register">Register</Link>
    <br />
    <Link to="/signin">Sign In</Link>
  </div>
)

export default SiteHeader
