import { api } from "../server/Api";
import { Alert } from "react-st-modal";

export const axiosLogInUser = async (dataTosubmit, setCookies) => {
  try {
    const response = await api.post("/api/v1/login", JSON.stringify(dataTosubmit));

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
    return true;
  } catch (error) {
    Alert("로그인에 실패하였습니다.");
    return false;
  }
};
