import request from '../request'

export function getLoginInfo(phone, password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password
    }
  })
}

export function getLoginStatus() {
  return request({
    url: '/login/status'
  })
}
