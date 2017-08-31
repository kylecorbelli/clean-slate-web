import { combineReducers } from 'redux'
import currentUser from './current-user'

const rootReducer = combineReducers({
  currentUser,
})

export default rootReducer
