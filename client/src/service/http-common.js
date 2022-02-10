import axios from "axios";
import NProgress from "nprogress";

export const HTTP = axios.create({
  baseURL: `/api`,
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwMWNlZWQ1MDUxOGMzN2Q5ZmMyNzgzIiwiaWF0IjoxNjQ0MjkwNjA5fQ.MNViG65d1mtCNvKIjw_8gx7mAA7dAOzJlgrEAVJ9by4",
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
