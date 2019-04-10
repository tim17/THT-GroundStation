import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    // url: '/login/login',
    url: 'http://localhost:8080/tht/user/v1/login',
    // url: 'http://123.57.211.167:8080/tht/user/v1/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    // url: '/user/info',
    url: 'http://localhost:8080/tht/user/v1/info',
    method: 'get',
    params: { token }
  })
}

