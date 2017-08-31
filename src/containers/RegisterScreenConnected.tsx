import { connect } from 'react-redux'
import RegisterScreen from '../components/RegisterScreen'
import {
  ReduxState,
} from '../redux/types'
import {
  registerUser,
} from '../redux/actions'

const mapStateToProps = (state: ReduxState) => ({

})

export default connect(
  mapStateToProps,
  { registerUser },
)(RegisterScreen)
