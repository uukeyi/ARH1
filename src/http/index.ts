import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { IAuthResponse } from "../interfaces/authResponse";

const $host = axios.create({
   withCredentials: true,
   baseURL: "http://194.87.238.163",
   // headers : "here should be auth token"
});

$host.interceptors.request.use(
   (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
   }
);
$host.interceptors.response.use(
   (config) => {
      return config;
   },
   async (error) => {
      const originalRequest = error.config;
      if (
         error.response.status == 401 &&
         !originalRequest._isRetry &&
         error.config
      ) {
         originalRequest._isRetry = true;
         try {
            const response = await axios<IAuthResponse>({
               method: "POST",
               url: `http://194.87.238.163/api/Auth/refreshToken`,
               params: {
                  refreshToken: localStorage.getItem("refreshToken"),
               },
               withCredentials: true,
            });
            localStorage.setItem("token", response.data.token.value);
            localStorage.setItem(
               "refreshToken",
               response.data.refreshToken.value
            );
            return;
         } catch (error) {
            console.log("fron inter", error);
         }
      }
      throw error;
   }
);
export default $host;
