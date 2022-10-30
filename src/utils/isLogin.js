export const isLogin = () => {
  if (window.localStorage.getItem("accessToken") === "undefined") {
    return false;
  }
  return window.localStorage.getItem("accessToken");
};
