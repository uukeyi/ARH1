import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoutes(): JSX.Element {
  const { isAuthSettings } = useAuth();

  function isAllowed(): boolean {
    if (isAuthSettings.isAuth) return true;
    // return false;
    return false;
  }

  return isAllowed() ? <Outlet /> : <Navigate to="login" />;
}
