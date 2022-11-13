import axios from "axios";
import { accessApi, api } from "../server/Api";

export const axiosKakaoLogin = async (dataTosubmit, setCookies): any => {
  try {
    const response = await accessApi.get(`./api/user/oauth/kakao/token?code=${dataTosubmit}`, {});
    if (response.status === 200) {
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
    }
  } catch (error) {
    console.log(error);
    alert(error);
    console.log(error);
  }
};
