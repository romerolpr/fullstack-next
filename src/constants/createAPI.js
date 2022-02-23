import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 5000,
});

export { API }