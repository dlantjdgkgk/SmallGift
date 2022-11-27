import { accessApi } from "../server/Api";
import Swal from "sweetalert2";

export const axiosKakaoLogin = async (code) => {
  try {
    const response = await accessApi.get(`/api/user/oauth/kakao/token?code=${code}`);
    if (response.status === 200) {
      const today = new Date();
      const TOKEN_TIME_OUT = 600 * 1000;
      const expireAccessToken = today.getTime() + TOKEN_TIME_OUT;

      window.localStorage.setItem("acessToken", response.data.jwtAccessToken);
      window.localStorage.setItem("expireAccessToken", expireAccessToken);
      window.localStorage.setItem("memberId", response.data.memberId);

      Swal.fire({
        text: "로그인에 성공하였습니다..",
        icon: "success",
        confirmButtonText: "확인",
      });
    }
    window.location.href = "/";
  } catch (error) {
    alert(error);
  }
};
