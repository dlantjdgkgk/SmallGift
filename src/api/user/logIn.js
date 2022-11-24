import { api } from "../server/Api";
import Swal from "sweetalert2";

export const axiosLogInUser = async (dataTosubmit, setCookies) => {
  try {
    const response = await api.post("/api/v1/login", JSON.stringify(dataTosubmit));
    if (response.status === 200) {
      Swal.fire({
        text: "로그인에 성공하였습니다..",
        icon: "success",
        confirmButtonText: "확인",
      });
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
    return true;
  } catch (error) {
    Swal.fire({
      text: "로그인에 실패하였습니다.",
      icon: "error",
      confirmButtonText: "확인",
    });
    return false;
  }
};
