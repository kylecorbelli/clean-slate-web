import { connect } from 'react-redux'
import SignInScreen from '../components/SignInScreen'
import { signInUser } from '../redux/actions'

export default connect(
  null,
  { signInUser }
)(SignInScreen)
