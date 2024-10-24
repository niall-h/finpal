import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

interface Props {
  children: React.ReactNode;
}

const AuthRoute = ({ children }: Props) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return !isLoggedIn() ? (
    <>{children}</>
  ) : (
    <Navigate to="/search" state={{ from: location }} replace />
  );
};

export default AuthRoute;
