const version = '/dev'

const config = {
  host: '1s77eum0vb.execute-api.ap-northeast-1.amazonaws.com',
  apiKey: 'CoPwMAcCcb2hw7HoCxXWN7okVjlzYqnz9sn3IvyE',
  contentType: 'application/json',
  resource: {
    login: `${version}/member/login`,
    refresh: `${version}/member/refresh-token`,
    userInfo: `${version}/member/userinfo`
  },
  option: {
    method: 'POST',
    headers: new Headers({
      'X-Api-Key': 'CoPwMAcCcb2hw7HoCxXWN7okVjlzYqnz9sn3IvyE',
      'Content-Type': 'application/json'
    })
  }
}

export default config