import Swal from "sweetalert2";
import { apiInstance } from "api/setting";

export const axiosKakaoLogin = async (code) => {
  try {
    const response = await apiInstance.get(
      `/api/user/oauth/kakao/token?code=${code}&redirectUrl=${process.env.REACT_APP_REDIRECT_KEY}`,
    );
    if (response.status === 200) {
      const today = new Date();
      const TOKEN_TIME_OUT = 600 * 1000;
      const expireAccessToken = today.getTime() + TOKEN_TIME_OUT;

      window.localStorage.setItem("accessToken", response.data.data.jwtAccessToken);
      window.localStorage.setItem("expireAccessToken", expireAccessToken);
      window.localStorage.setItem("memberId", response.data.data.memberId);

      Swal.fire({
        text: "로그인에 성공하였습니다..",
        icon: "success",
        confirmButtonText: "확인",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
        }
      });
    }
  } catch {
    throw new Error("check the network response");
  }
};
