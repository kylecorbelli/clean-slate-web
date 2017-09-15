import { generateAuthActions } from 'redux-token-auth'
import { authUrl } from './constants'
const config = {
  authUrl,
  userAttributes: {
    firstName: 'name',
    imageUrl: 'image',
  },
  userRegistrationAttributes: {
    firstName: 'name',
    imageUrl: 'image',
  },
}
const {
  signInUser,
  signOutUser,
  registerUser,
  verifyCredentials,
} = generateAuthActions(config)

// is there a shorthand for this?
export {
  signInUser,
  signOutUser,
  registerUser,
  verifyCredentials,
}
