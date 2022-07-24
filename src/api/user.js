import axios from 'axios'

const LOCAL = true
const baseUrl = LOCAL
  ? 'http://127.0.0.1:8095/api/'
  : 'https://api-user-my-project.herokuapp.com/api'

export const login = (param) => {
  return axios({
    method: 'post',
    url: baseUrl + '/user/login',
    data: {
      userName: param.username,
      password: param.password
    }
  })
}

export const logout = (param) => {
  return axios({
    method: 'post',
    url: baseUrl + '/user/logout',
    data: {
      userId: param
    }
  })
}

export const register = (param) => {
  return axios({
    method: 'post',
    url: baseUrl + '/user/create',
    data: {
      userName: param.username,
      password: param.password,
      firstName: param.firstName,
      lastName: param.lastName,
      email: param.email
    }
  })
}

export const checkUsername = (param) => {
  return axios({
    method: 'post',
    url: baseUrl + '/user/checkUsername',
    data: {
      userName: param
    }
  })
}
