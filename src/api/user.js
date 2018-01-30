import request from '@/utils/request'
export default {
  login (params = {}) {
    return request('/user/login', params)
  },
  logout (params = {}) {
    return request('/user/logout', params)
  },
  getUser (params = {}) {
    return request('/user/get_user', params)
  },
  pages (params = {}) {
    return request('/user/pages', params)
  }
}
