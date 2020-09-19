import axios from 'axios';

export default axios.create({
  baseURL: 'https://geo.ipify.org/api/v1',
  params: {
    apiKey: `${process.env.REACT_APP_GEO_API_KEY}`,
  }
})