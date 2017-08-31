import { connect } from 'react-redux'
import RegisterScreen from '../components/RegisterScreen'
import {
  registerUser,
} from '../redux/actions'

export default connect(
  null,
  { registerUser },
)(RegisterScreen)
