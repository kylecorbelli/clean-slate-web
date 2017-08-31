let baseApiUrl: string

switch (process.env.NODE_ENV) {
  case 'development':
    baseApiUrl = 'http://localhost:3000'
    break
  case 'test':
    baseApiUrl = 'http://localhost:3000'
    break
  case 'production':
    baseApiUrl = 'https://blueberry-pudding-19740.herokuapp.com'
    break
  default:
    baseApiUrl = 'http://localhost:3000'
}

const authUrl: string = `${baseApiUrl}/auth`
const graphQlUrl: string = `${baseApiUrl}/graphql`

export {
  authUrl,
  graphQlUrl,
}
