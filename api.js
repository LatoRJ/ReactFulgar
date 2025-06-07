import axios from 'axios';

const BASE_URL = 'http://192.168.31.152:8000/api'; // ✅ Correct IP now

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
