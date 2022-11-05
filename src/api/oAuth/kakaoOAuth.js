import axios from "axios";
import { accessApi, api } from "../server/Api";

export const axiosKakaoLogin = async (dataTosubmit): any => {
  try {
    const response = await accessApi.get(`./api/user/oauth/kakao/token?code=${dataTosubmit}`, {});
    if (response.code === 200) {
      window.location.href = "/";
    }
  } catch (error) {
    alert(error);
  }
};
