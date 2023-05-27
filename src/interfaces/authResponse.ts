export interface IUserResponse {
   id: number | null;
   email: string;
   password: string;
   emailConfirmed: boolean;
   name: string;
   isAdmin: boolean;
   createdAt: string;
   isBlocked: boolean;
   isDeleted: boolean;
}

export interface IAuthResponse {
   hasError: boolean;
   errorMessage: string;
   user: IUserResponse;
   token: {
      value: string;
      expireAt: string;
   };
   refreshToken: {
      value: string;
      expireAt: string;
   };
}
export interface IForgotPassword {
   hasError: boolean;
   errorMessage: string;
   user: IUserResponse;
   token: null;
   refreshToken: null;
}
export interface IResponseUserUpdateData {
   user: IUserResponse;
   token: {
      value: string;
      expireAt: string;
   };
   refreshToken: {
      value: string;
      expireAt: string;
   };
}
