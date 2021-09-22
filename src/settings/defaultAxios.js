import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://62.109.0.18/api/'
})

export default instance