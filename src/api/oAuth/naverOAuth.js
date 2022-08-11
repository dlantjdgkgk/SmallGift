import axios from "axios";

export const axiosNaverLogin = async (dataTosubmit): any => {
  try {
    const response = await axios.get("/api/user/oauth/naver/token", dataTosubmit);
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
