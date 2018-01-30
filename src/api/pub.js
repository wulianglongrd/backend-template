import request from '@/utils/request'

export default {
  menus (params) {
    return request('/pub/menus', params)
  }
}
