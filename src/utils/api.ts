/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

let apiCall: AxiosInstance, authApiCall: AxiosInstance;
let baseURL: any;

if (process.env.REACT_APP_ENV?.toLowerCase() === 'dev') {
  baseURL = process.env.REACT_APP_API_URL_DEV;
} else if (process.env.REACT_APP_ENV?.toLowerCase() === 'uat') {
  baseURL = process.env.REACT_APP_API_URL_UAT;
} else if (process.env.REACT_APP_ENV?.toLowerCase() === 'prod') {
  baseURL = process.env.REACT_APP_API_URL_PROD;
} else {
  baseURL = process.env.REACT_APP_API_URL_LOCAL;
}

apiCall = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

authApiCall = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});



export {
  apiCall,
  authApiCall,
  baseURL
};
