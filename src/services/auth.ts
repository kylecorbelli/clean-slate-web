import axios from 'axios'
import { AuthHeaders } from '../types'

export const setAuthHeaders = (headers: AuthHeaders): void => {
  const {
    'access-token': accessToken,
    'token-type': tokenType,
    client,
    expiry,
    uid,
  } = headers
  axios.defaults.headers.common['access-token'] = accessToken
  axios.defaults.headers.common['token-type'] = tokenType
  axios.defaults.headers.common.client = client
  axios.defaults.headers.common.expiry = expiry
  axios.defaults.headers.common.uid = uid
}

export const persistAuthHeadersInLocalStorage = (headers: AuthHeaders): void => {
  const {
    'access-token': accessToken,
    'token-type': tokenType,
    client,
    expiry,
    uid,
  } = headers
  localStorage.setItem('access-token', accessToken)
  localStorage.setItem('token-type', tokenType)
  localStorage.setItem('client', client)
  localStorage.setItem('expiry', expiry)
  localStorage.setItem('uid', uid)
}

export const deleteAuthHeaders = (): void => {
  delete axios.defaults.headers.common['access-token']
  delete axios.defaults.headers.common['token-type']
  delete axios.defaults.headers.common.client
  delete axios.defaults.headers.common.expiry
  delete axios.defaults.headers.common.uid
}

export const deleteAuthHeadersFromLocalStorage = (): void => {
  localStorage.remove('accessToken')
  localStorage.remove('tokenType')
  localStorage.remove('client')
  localStorage.remove('expiry')
  localStorage.remove('uid')
}
