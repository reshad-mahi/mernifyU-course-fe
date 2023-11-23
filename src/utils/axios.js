import axios from 'axios';

export const axiosSecure = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('userToken')}`,
  },
});

export const axiosOpen = axios.create({
  baseURL: 'https://fatimafytechapi.managedcoder.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const axiosSecureInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
});
export const axiosNonSecureInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
});

axiosSecureInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.userToken
      ? localStorage.getItem('userToken')
      : null;
    config.headers.Authorization = `Bearer ${userToken}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);
