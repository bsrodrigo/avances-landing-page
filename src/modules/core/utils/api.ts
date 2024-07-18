import axios from "axios";

// export const API_ENDPOINT = `https://avances-service.netlify.app`;
export const API_ENDPOINT = "http://localhost:3333";

// axios.defaults.withCredentials = true;

// export const HEADERS = { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` };

const apiConfig = axios.create({
  baseURL: API_ENDPOINT,
  //   headers: HEADERS,
});

// apiConfig.interceptors.response.use(
//   (response: any) => response,
//   (error: { response: { status: number } }) => {
//     if (error.response && error.response.status === 401) {
//       //   window.localStorage.removeItem('access_token');
//       //   window.localStorage.removeItem('refresh_token');
//       //   window.localStorage.removeItem('user');
//       //   window.location = `${process.env.API_HOST}/logout`;
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export const api = apiConfig;
