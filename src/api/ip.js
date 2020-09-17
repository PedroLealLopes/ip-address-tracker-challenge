import axios from 'axios';

export default axios.create({
  baseURL: 'https://geo.ipify.org/api/v1',
  params: {
    apiKey: 'at_W32EXgMQxX6wgrZVytGBy6nfol6hM',
  }
})