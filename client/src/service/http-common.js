import axios from "axios";
import NProgress from "nprogress";

export const HTTP = axios.create({
  baseURL: `/api`,
  headers: {
    Authorization:
      "Bearer "+process.env.AUTH_KEY,
  },
});

// before a request is made start the nprogress
HTTP.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

// before a response is returned stop nprogress
HTTP.interceptors.response.use((response) => {
  NProgress.done();

  return response;
});

// export default HTTP;