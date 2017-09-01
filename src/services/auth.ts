import axios from 'axios'
import { AuthHeaders } from '../types'

const authHeaderKeys: Array<string> = [
  'access-token',
  'token-type',
  'client',
  'expiry',
  'uid',
]

export const setAuthHeaders = (headers: AuthHeaders): void => {
  authHeaderKeys.forEach((key: string) => {
    axios.defaults.headers.common[key] = headers[key]
  })
}

export const persistAuthHeadersInLocalStorage = (headers: AuthHeaders): void => {
  authHeaderKeys.forEach((key: string) => {
    localStorage.setItem(key, headers[key])
  })
}

export const deleteAuthHeaders = (): void => {
  authHeaderKeys.forEach((key: string) => {
    delete axios.defaults.headers.common[key]
  })
}

export const deleteAuthHeadersFromLocalStorage = (): void => {
  authHeaderKeys.forEach((key: string) => {
    localStorage.remove(key)
  })
}
