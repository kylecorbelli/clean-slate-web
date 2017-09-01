import { connect } from 'react-redux'
import SiteHeader from '../components/SiteHeader'
import { ReduxState } from '../redux/types'

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
  null,
)(SiteHeader)
