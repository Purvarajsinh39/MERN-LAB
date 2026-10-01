import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({children})=>{

  const isAuthnticate = localStorage.getItem('token')

  return isAuthnticate?children:<Navigate to="/login"></Navigate>
}
export default AuthRoute