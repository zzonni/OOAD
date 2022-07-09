import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
   const isAuthenticated = localStorage.getItem('is_authenticated')
   return (
      <Route
         {...restOfProps}
         render={(props) => isAuthenticated ? <Component {...props} /> : <Redirect to="/api/auth/login" />}
      />
   )
}

export default ProtectedRoute