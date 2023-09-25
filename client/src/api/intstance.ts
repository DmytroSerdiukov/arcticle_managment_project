import axios from 'axios'

export const POSTS = axios.create({
  baseURL: 'http://localhost:5000',
})
