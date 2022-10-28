import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const isLogin = () => {
  if (window.localStorage.getItem("accessToken") === "undefined") {
    return false;
  }
  return window.localStorage.getItem("accessToken");
};
