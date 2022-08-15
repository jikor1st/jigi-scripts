import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// const NEED_REFRESH_TOKEN = 'NEED_REFRESH_TOKEN';

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {},
};

const instance = axios.create(config);

instance.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    throw new Error(error);
  },
);

instance.interceptors.response.use(
  async response => {
    const url = response.config.url;
    return response;
  },
  async error => {
    const {
      config: originConfig,
      response: {
        status,
        data: { message },
      },
    } = error;
    // if (message === NEED_REFRESH_TOKEN) {
    //   const result = await instance.get(`${originConfig.baseURL}/auth/refresh`);
    //   return axios(originConfig);
    // }
    throw new Error(
      `${error.code} ${error.message} on Method:${error.config.method} Url:${error.config.baseURL}/${error.config.url}`,
    );
  },
);

const responseBody = (response: AxiosResponse) => response.data;

const axiosController = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: BodyInit, config: AxiosRequestConfig) =>
    instance.post(url, body, config).then(responseBody),
  put: (url: string, body: BodyInit) =>
    instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export { axiosController };
