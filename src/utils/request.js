import Vue from 'vue'
import { stringify } from 'qs'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export default function request (url, params, options) {
  if (process.env.NODE_ENV !== 'production') {
    url = `/static/mock${url}.json`
  }
  url = `${url}?${stringify(params)}`

  const defaultOptions = {
    credentials: 'include'
  }
  const newOptions = { ...defaultOptions, ...options }
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers
    }
    newOptions.body = JSON.stringify(newOptions.body)
  }

  /**
   * @see https://github.com/github/fetch
   */
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .then(json => {
      if (json.errno === 0) {
        return json.data
      }
      throw new Error(JSON.stringify(json))
    })
    .catch((error) => {
      let data = JSON.parse(error.message)

      // TODO

      Vue.prototype.$notify.error({
        title: '错误',
        message: data.errmsg
      })
      throw new Error(error.message)
    })
}
