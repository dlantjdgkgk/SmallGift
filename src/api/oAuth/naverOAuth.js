import axios from "axios";

export const axiosNaverLogin = async (dataTosubmit) => {
  try {
    const response = await axios.get(`http://116.33.59.38:8080/api/user/oauth/naver/token?code=${dataTosubmit}`, {});

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
