import { createAsyncThunk } from "@reduxjs/toolkit";
import $host from "../../http";
import { IAuthResponse, IUserResponse } from "../../interfaces/authResponse";
import axios from "axios";
interface IRegistrationData {
   email: string;
   password: string;
   name: string;
}
interface IinputData {
   data: IRegistrationData;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
   setIsAuth: Function;
}
interface ILoginData {
   data: ILoginInputData;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
   setIsAuth: Function;
}
interface ILoginInputData {
   email: string;
   password: string;
}
interface ICheckAuthData {
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
   setIsAuth: Function;
}
export const fetchRegistration = createAsyncThunk<
   IUserResponse,
   IinputData,
   { rejectValue?: string }
>("authSlice/fetchRegistration", async (inputData, { rejectWithValue }) => {
   const { email, password, name } = inputData.data;
   try {
      const responseReg = await $host<IAuthResponse>({
         url: "/api/Auth/register",
         method: "POST",
         params: {
            email: email,
            password: password,
         },
      });

      if (
         responseReg.data.errorMessage === "EmailExist" &&
         responseReg.data.hasError
      ) {
         inputData.setError(true);
         throw new Error("пользовтель уже существует");
      }
      localStorage.setItem("token", responseReg.data.token.value);
      localStorage.setItem("refreshToken", responseReg.data.refreshToken.value);

      const responseUserUpdate = await $host<IAuthResponse>({
         url: `/api/Users/updateName/${responseReg.data.user.id}`,
         method: "PUT",
         params: {
            name: name,
         },
         headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
      });
      inputData.setIsAuth(true);
      return responseUserUpdate.data.user;
   } catch (error: any) {
      inputData.setError(true);
      return rejectWithValue(error.message);
   }
});

export const fetchLogin = createAsyncThunk<
   IUserResponse,
   ILoginData,
   { rejectValue?: string }
>("authSlice/fetchLogin", async (loginData, { rejectWithValue }) => {
   const { email, password } = loginData.data;
   try {
      const response = await $host<IAuthResponse>({
         url: "/api/Auth/login",
         method: "POST",
         params: {
            email: email,
            password: password,
         },
      });
      if (!response.data.hasError) {
         localStorage.setItem("token", response.data.token.value);
         localStorage.setItem("refreshToken", response.data.refreshToken.value);
      } else if (response.data.errorMessage === "PasswordWrong") {
         loginData.setError(true);
         throw new Error("неверный пароль");
      } else if (response.data.errorMessage === "UserNotExist") {
         loginData.setError(true);
         throw new Error("такого пользователя не существует");
      }
      loginData.setIsAuth(true);
      return response.data.user;
   } catch (error: any) {
      loginData.setError(true);
      return rejectWithValue(error.message);
   }
});
export const checkAuth = createAsyncThunk<
   IUserResponse,
   ICheckAuthData,
   { rejectValue?: string }
>("authSlice/checkAuth", async (data, { rejectWithValue }) => {
   try {
      const response = await axios<IAuthResponse>({
         method: "POST",
         url: `http://194.87.238.163/api/Auth/refreshToken`,
         params: {
            refreshToken: localStorage.getItem("refreshToken"),
         },
         withCredentials: true,
      });
      if (!response.data.hasError) {
         localStorage.setItem("token", response.data.token.value);
         localStorage.setItem("refreshToken", response.data.refreshToken.value);
         data.setIsAuth(true);
      } else {
         data.setIsAuth(false);
         localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");

         throw new Error(
            "Ваш токен авторизации истек пожалуйста авторизуйтесь еще раз"
         );
      }

      return response.data.user;
   } catch (error: any) {
      data.setError(true);
      console.log(error);
      return rejectWithValue(error.message);
   }
});

export const confirmEmail = createAsyncThunk<
   IUserResponse,
   ICheckAuthData,
   { rejectValue?: string }
>("authSlice/checkAuth", async (data, { rejectWithValue }) => {
   try {
      const response = await axios<IAuthResponse>({
         method: "POST",
         url: `http://194.87.238.163/api/Auth/refreshToken`,
         params: {
            refreshToken: localStorage.getItem("refreshToken"),
         },
         withCredentials: true,
      });

      if (!response.data.hasError) {
         localStorage.setItem("token", response.data.token.value);
         localStorage.setItem("refreshToken", response.data.refreshToken.value);
         data.setIsAuth(true);
      } else {
         data.setIsAuth(false);
         throw new Error(response.data.errorMessage);
      }

      return response.data.user;
   } catch (error: any) {
      data.setError(true);
      console.log(error);
      return rejectWithValue(error.message);
   }
});
