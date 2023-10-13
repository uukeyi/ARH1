import React, { createContext, useContext, useState } from "react";
import { IUserResponse } from "../interfaces/authResponse";
interface IAuthContext {
   isAuthSettings: {
      isAuth: boolean;
      isAdmin: boolean;
      user : IUserResponse
   };
   setIsAuth: Function;
}
interface IAuthProviderProps {
   children?: React.ReactNode;
}
export const AuthContext = createContext<IAuthContext | null>(null);
export function useAuth(): IAuthContext {
   const context = useContext(AuthContext);
   if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
   }
   return context;
}
export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
   const [isAuth, setIsAuth] = useState<{
      isAuth: boolean;
      isAdmin: boolean;
      user: IUserResponse;
   }>({
      isAuth: false,
      isAdmin: false,
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
   });
   return (
      <AuthContext.Provider
         value={{
            isAuthSettings: isAuth,
            setIsAuth: setIsAuth,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};
