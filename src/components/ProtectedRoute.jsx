import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const authToken = sessionStorage.getItem("Auth Token");
  if (!authToken) {
    return <Navigate to="/" replace />;
  }

  return children
};

export default ProtectedRoute;
