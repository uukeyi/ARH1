import React, { createContext, useContext, useState } from "react";
interface IAuthContext {
   isAuthSettings: {
      isAuth: boolean;
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
   }>({ isAuth: false, isAdmin: false });
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
