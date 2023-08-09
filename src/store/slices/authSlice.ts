import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
   fetchLogin,
   fetchRegistration,
   checkAuth,
   confirmEmail
} from "../actions/authActions";
import { IUserResponse } from "../../interfaces/authResponse";
interface IAuthState {
   errorMessage: string;
   user: IUserResponse;
}
const initialState: IAuthState = {
   errorMessage: "",
   user: {
      id: null,
      email: "",
      password: "",
      emailConfirmed: false,
      name: "",
      isAdmin: false,
      createdAt: "",
      isBlocked: false,
      isDeleted: false,
   },
};

export const authSlice = createSlice({
   name: "authSlice",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(
         fetchRegistration.fulfilled,
         (state, action: PayloadAction<IUserResponse>) => {
            state.user = action.payload;
         }
      );
      builder.addCase(
         fetchRegistration.rejected,
         (state, action: PayloadAction<any>) => {
            state.errorMessage = action.payload;
         }
      );
      builder.addCase(
         fetchLogin.rejected,
         (state, action: PayloadAction<any>) => {
            state.errorMessage = action.payload;
         }
      );
      builder.addCase(
         fetchLogin.fulfilled,
         (state, action: PayloadAction<any>) => {
            state.user = action.payload;
         }
      );
      builder.addCase(
         checkAuth.rejected,
         (state, action: PayloadAction<any>) => {
            state.errorMessage = action.payload;
         }
      );
      builder.addCase(
         checkAuth.fulfilled,
         (state, action: PayloadAction<any>) => {
            state.user = action.payload;
         }
      );
      builder.addCase(
         confirmEmail.rejected,
         (state, action: PayloadAction<any>) => {
            state.errorMessage = action.payload;
         }
      );
      builder.addCase(
         confirmEmail.fulfilled,
         (state, action: PayloadAction<any>) => {
            state.user = action.payload;
         }
      );
   },
});

export const { } = authSlice.actions;
export default authSlice.reducer;
