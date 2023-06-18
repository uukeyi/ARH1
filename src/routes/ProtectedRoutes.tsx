import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext, useAuth } from '../contexts/AuthContext';

export default function ProtectedRoutes(): JSX.Element {
  const isAuth = useContext(AuthContext);

  function isAllowed(): boolean {
    if (isAuth?.isAuthSettings.isAuth) return true;
    return false;
  }

  return isAllowed() ? <Outlet /> : <Navigate to="login" />;
}
