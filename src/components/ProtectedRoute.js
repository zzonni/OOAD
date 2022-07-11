import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
   const isAuthenticated = localStorage.getItem('is_authenticated')
   return (
      isAuthenticated ? children : <Redirect to="/api/auth/login" />
   )
}

export default ProtectedRoute