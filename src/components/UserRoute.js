import React from "react";
import { Redirect } from "react-router-dom";

const UserRoute = ({ children }) => {
   const userID = localStorage.getItem('userID')
   return (
      userID ? children : <Redirect to="/api/auth/login" />
   )
}

export default UserRoute