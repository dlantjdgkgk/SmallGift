import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isLogin } from "../utils/isLogin";

export const PublicRoute = ({ element: Element }) => {
  return !isLogin() ? Element : <Navigate to="/" />;
};
