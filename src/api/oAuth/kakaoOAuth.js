import { accessApi } from "../server/Api";

export const axiosKakaoLogin = async (dataTosubmit) => {
  try {
    const response = await accessApi.get(`./api/user/oauth/kakao/token?code=${dataTosubmit}`, {});
    console.log(response);
    if (response.code === 200) {
      window.location.href = "/";
    }
  } catch (error) {
    alert(error);
  }
};
