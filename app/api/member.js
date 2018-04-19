import config from './config'
import conn from './conn'

const login = (username, password) => {
  const url = `https://${config.host}${config.resource.login}`
  const options = Object.assign({}, config.option)
  options.body = JSON.stringify({
    email: username,
    password: password,
    app: 'property'
  })
  return conn(url, options)
}

const getNewAccessToken = (refreshToken) => {
  const url = `https://${config.host}${config.resource.refresh}`
  const options = { ...config.option }
  options.body = JSON.stringify({
    refreshToken: refreshToken,
    app: 'property'
  })
  return conn(url, options)
}

const getUserInfo = (accessToken) => {
  const url = `https://${config.host}${config.resource.userInfo}`
  const options = { ...config.option }
  options.headers.set('Authorization', accessToken)

  return conn(url, options)
}

export {
  login,
  getNewAccessToken,
  getUserInfo
}