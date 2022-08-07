import axios from "axios";
import React, { useState } from "react";
import { LOGIN_USER, SIGNUP_USER } from "./types";
import { axiosLogInUser } from "../../api/user/logIn";
import { axiosSignUpUser } from "../../api/user/signUp";

type Object = {
  type: any;
  payload: any;
};
// 로그인
export const logInUser = (dataTosubmit): Object => {
  return {
    type: LOGIN_USER,
    payload: axiosLogInUser(dataTosubmit),
  };
};

// 회원가입
export const signUpUser = (dataTosubmit): Object => {
  return {
    type: SIGNUP_USER,
    payload: axiosSignUpUser(dataTosubmit),
  };
};
