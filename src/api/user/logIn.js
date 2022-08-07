import axios from "axios";

export const axiosLogInUser = async (dataTosubmit): any => {
  try {
    const response = await axios.post("/api/user/login", dataTosubmit);
    return {
      response,
    };
  } catch (error) {
    alert(error);
    console.log(error);
    return {
      error,
    };
  }
};
