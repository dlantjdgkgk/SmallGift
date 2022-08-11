import axios from "axios";
import React, { useState } from "react";
import { LOGIN_USER, SIGNUP_USER, KAKAO_OAUTH, NAVER_OAUTH } from "./types";
import { axiosLogInUser } from "../../api/user/logIn";
import { axiosSignUpUser } from "../../api/user/signUp";
import { axiosKakaoLogin } from "../../api/oAuth/kakaoOAuth";
import { axiosNaverLogin } from "../../api/oAuth/naverOAuth";

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

// 카카오 로그인
export const kakaoLogIn = (dataTosubmit): Object => {
  return {
    type: KAKAO_OAUTH,
    payload: axiosKakaoLogin(dataTosubmit),
  };
};

// 네이버 로그인
export const naverLogIn = (dataTosubmit): Object => {
  return {
    type: NAVER_OAUTH,
    payload: axiosNaverLogin(dataTosubmit),
  };
};

// 회원가입
export const signUpUser = (dataTosubmit): Object => {
  return {
    type: SIGNUP_USER,
    payload: axiosSignUpUser(dataTosubmit),
  };
};
