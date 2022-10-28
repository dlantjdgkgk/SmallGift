import axios, { AxiosRequestConfig } from "axios";
import { useCookies } from "react-cookie";
import moment from "moment";

export const useReIssueToken = async () => {
  const [cookies] = useCookies([]);

  const refreshToken = cookies.reissue_token;
  const expire = window.localStorage.getItem("expireAccessToken");
  const accessToken = window.localStorage.getItem("accessToken");
  // 토큰이 만료 10초전이고, refreshToken 이 저장되어 있을 때
  if (moment(expire).diff(moment()) < 0 && refreshToken) {
    const body = {
      jwtAccessToken: accessToken,
      jwtRefreshToken: refreshToken,
    };

    try {
      const response = await axios.post(`../${process.env.REACT_APP_BASE_URL}/api/user/reissueAccessToken`, body);
      if (response.code === 200) {
        const today = new Date();
        const TOKEN_TIME_OUT = 600 * 1000;
        const expireAccessToken = today.getTime() + TOKEN_TIME_OUT;

        window.localStorage.setItem("expireAccessToken", expireAccessToken);
        window.localStorage.setItem("accessToken", response.data.jwtAccessToken);
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert("token이 갱신되지 않았습니다.");
    }
  }
};

export const useReIssueErrorHandle = () => {
  const [removeCookies] = useCookies([]);
  removeCookies("refresh_token");
};
