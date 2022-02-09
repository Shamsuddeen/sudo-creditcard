import axios from "axios";
import NProgress from "nprogress";

export const HTTP = axios.create({
  baseURL: `http://localhost:5000/api`,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwMDBkNjI3YjIwM2UyYWY4NGYwYjBiIiwiaWF0IjoxNjQ0MTcwNTk0fQ.pyWOVV720lPpoZEubc1PvixoLAzyXxzyL1oGmRq841U",
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