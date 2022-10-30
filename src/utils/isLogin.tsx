import { Cookies } from "react-cookie";

export const isLogin = (): boolean | string | null => {
  if (window.localStorage.getItem("accessToken") === "undefined") {
    return false;
  }
  return window.localStorage.getItem("accessToken");
};
