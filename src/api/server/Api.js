import axios from "axios";

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
