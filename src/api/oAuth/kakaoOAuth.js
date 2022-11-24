import { accessApi } from "../server/Api";

export const axiosKakaoLogin = async (dataTosubmit, setCookies) => {
  try {
    const response = await accessApi.get(`./api/user/oauth/kakao/token?code=${dataTosubmit}`, {});
    console.log(response);
    if (response.status === 200) {
      const today = new Date();
      const TOKEN_TIME_OUT = 600 * 1000;
      const expireAccessToken = today.getTime() + TOKEN_TIME_OUT;
      const expireReissueToken = today.setDate(today.getDate() + 7);
      // 만료 시간 설정

      window.localStorage.setItem("acessToken", response.data.jwtAccessToken);
      window.localStorage.setItem("expireAccessToken", expireAccessToken);
      window.localStorage.setItem("memberId", response.data.memberId);
      setCookies("refresh_token", response.data.jwtRefreshToken, {
        expires: new Date(expireReissueToken),
      });
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
