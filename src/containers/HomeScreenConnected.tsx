import { connect } from 'react-redux'
import HomeScreen from '../components/HomeScreen'
import { ReduxState } from '../redux/types'

const mapStateToProps = (state: ReduxState) => ({
  currentUser: state.reduxTokenAuth.currentUser,
})

export default connect(
  mapStateToProps,
  null,
)(HomeScreen)
