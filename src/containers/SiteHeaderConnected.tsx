import { connect } from 'react-redux'
import SiteHeader from '../components/SiteHeader'
import { ReduxState } from '../redux/types'
import { signOutUser } from '../redux/actions'

const mapStateToProps = (state: ReduxState) => {
  const {
    currentUser,
  } = state
  return {
    currentUser,
  }
}

export default connect(
  mapStateToProps,
  { signOutUser },
)(SiteHeader)
