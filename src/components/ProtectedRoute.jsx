import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!isLoggedIn()) {
    return (
      <Navigate
        to="/auth"
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
};

export default ProtectedRoute;
