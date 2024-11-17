import axios, { AxiosRequestConfig } from "axios";

const HTTP_HEADER = {
    'Content-Type': 'application/json;charset=utf-8',
    accept: "*/*",
    // Must have a valid API KEY at https://developer.themoviedb.org/docs/getting-started
    Authorization : import.meta.env.VITE_API_KEY
};


const HTTP_CLIENT_CONFIG: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_URL,
    headers: HTTP_HEADER
  };

  const HttpClient = axios.create(HTTP_CLIENT_CONFIG);
  //HttpClient.defaults.withCredentials = true;

  export { HttpClient };
