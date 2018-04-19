
const conn = (url, options) => {
  console.log(url)
  console.log(options.body)

  return fetch(url, options).then((response) => {
    if (response.errorMessage) {
      throw response.errorMessage
    }
    if (response.status !== 200) {
      const json = tryJson(response._bodyText)
      if (json && json.errorMessage) {
        throw json.errorMessage
      }
      switch (response.status) {
        case 401:
          throw 'AccessTokenHasExpired'

        case 403:
          throw 'PermissionDeny'

        case 500:
        case 501:
        case 503:
          throw 'TIME_OUT'

        default:
          throw 'SERVER_BUSY'
      }
    }
    return response.json()
  }).then((response) => {
    if (response.errorMessage) {
      throw response.errorMessage
    }
    return response
  })
}

const tryJson = (text) => {
  try {
    const json = JSON.parse(text)
    return json
  } catch (error) {
    return null
  }
}

export default conn