
export default config = {
  host: '1s77eum0vb.execute-api.ap-northeast-1.amazonaws.com',
  apiKey: 'CoPwMAcCcb2hw7HoCxXWN7okVjlzYqnz9sn3IvyE',
  contentType: 'application/json',
  version: 'prod_20180214',
  resource: {
    login: '/prod_20180214/member/login',
    refresh: '/prod_20180214/member/refresh-token',
    userInfo: '/prod_20180214/member/userinfo',
  },
  option: {
    method: 'POST',
    headers: new Headers({
      'X-Api-Key': 'CoPwMAcCcb2hw7HoCxXWN7okVjlzYqnz9sn3IvyE',
      'Content-Type': 'application/json',
    })
  }
}
