import axios from "axios";
import { accessApi, api } from "../server/Api";

export const axiosLogInUser = async ({ dataTosubmit, setCookies }) => {
  try {
    const response = await api.post("./api/v1/login", JSON.stringify(dataTosubmit));
    if (!response.status === 200) {
      alert(response.message);
      return false;
    }
    const today = new Date();
    const TOKEN_TIME_OUT = 600 * 1000;
    const expireAccessToken = today.getTime() + TOKEN_TIME_OUT;
    const expireReissueToken = today.setDate(today.getDate() + 7);
    // 만료 시간 설정

    window.localStorage.setItem("acessToken", response.data.jwtAccessToken);
    window.localStorage.setItem("expireAccessToken", expireAccessToken);
    setCookies("refresh_token", response.data.jwtRefreshToken, {
      expires: new Date(expireReissueToken),
    });
    return true;
  } catch (error) {
    alert("Error");
    console.log("로그인에 실패하였습니다.");
    return false;
  }
  return false;
};
