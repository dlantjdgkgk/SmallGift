import axios from "axios";
import React, { useState } from "react";
import { LOGIN_USER } from "./types";
import { axiosLogInUser } from "../../api/user/logIn";

type Object = {
  type: any;
  payload: any;
};

export const logInUser = (dataTosubmit): Object => {
  return {
    type: LOGIN_USER,
    payload: axiosLogInUser(dataTosubmit),
  };
};
