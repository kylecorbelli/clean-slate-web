import { connect } from 'react-redux'
import RegisterScreen from '../components/RegisterScreen'
// import {
//   registerUser,
// } from '../redux/actions'
// import { generateAuthActions } from 'redux-token-auth'
import { registerUser } from '../redux-token-auth-config'

export default connect(
  null,
  { registerUser },
)(RegisterScreen)
