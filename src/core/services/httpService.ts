import _axios from "axios";

const API_ROOT = "http://timitimi.site";

const axios = _axios.create();

axios.defaults.baseURL = API_ROOT;

let accessToken: string | null = null;

axios.interceptors.request.use(config => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

const setAccessToken = (token: string) => {
  if (token) {
    accessToken = token;
    return;
  }

  throw new Error("access token not saved");
};

export default {
  baseAxios: axios,
  rawAxios: _axios,
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
  request: axios.request,
  setAccessToken,
};
