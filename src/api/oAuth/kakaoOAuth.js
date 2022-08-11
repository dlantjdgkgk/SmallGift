import axios from "axios";

export const axiosKakaoLogin = async (dataTosubmit): any => {
  try {
    const response = await axios.get("/api/user/oauth/kakao/token", dataTosubmit);
    return {
      response,
    };
  } catch (error) {
    alert(error);
    return {
      error,
    };
  }
};
