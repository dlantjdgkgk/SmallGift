import axios from "axios";
import { accessApi, api } from "../server/Api";

export const axiosLogInUser = async (dataTosubmit, setCookies) => {
  try {
    const response = await api.post("./api/v1/login", JSON.stringify(dataTosubmit));

    if (!response.status === 200) {
      alert(response.msg);
      return false;
    }
    const today = new Date();
    const TOKEN_TIME_OUT = 600 * 1000;
    const expireAccessToken = today.getTime() + TOKEN_TIME_OUT;
    const expireReissueToken = today.setDate(today.getDate() + 7);
    // 만료 시간 설정

    window.localStorage.setItem("accessToken", response.data.jwtAccessToken);
    window.localStorage.setItem("expireAccessToken", expireAccessToken);
    window.localStorage.setItem("memberId", response.data.memberId);
    setCookies("refresh_token", response.data.jwtRefreshToken, {
      expires: new Date(expireReissueToken),
    });
    window.location.href = "/";
    return true;
  } catch (error) {
    console.log("로그인에 실패하였습니다.");
    return false;
  }
  return false;
};
