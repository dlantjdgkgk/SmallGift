import axios from "axios";

import { useReIssueErrorHandle, useReIssueToken } from "../user/reIssueToken";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  params: {},

  headers: {
    "Content-Type": "application/json",
  },
});

export const accessApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  params: {},

  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
  },
});

// accessApi.interceptors.request.use(useReIssueToken, useReIssueErrorHandle);
