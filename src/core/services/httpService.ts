import _axios from "axios";

const API_ROOT = "http://timitimi.site";

const axios = _axios.create();

axios.defaults.withCredentials = true;
axios.defaults.baseURL = API_ROOT;

let accessToken: string | null =
  "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwNmU0NjY1Mi05ZjA3LTQ2OGEtOTFiZS02YmViYWNhMzg1ZWUiLCJyb2xlIjoiVVNFUiIsImV4cCI6MTY3NTY3MjQ2MH0.SpfSBRHRQn1zYmuJrNm2pCbr20YjPohlrVA0D9SB5KY";
axios.interceptors.request.use(config => {
  axios.defaults.withCredentials = true;
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
