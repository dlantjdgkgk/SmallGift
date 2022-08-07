import axios from "axios";

export const axiosSignUpUser = async (dataTosubmit) => {
  try {
    const response = await axios.post("/api/admin/signup", dataTosubmit);
    return {
      response,
    };
  } catch (error) {
    console.log(error);
    alert(error);
    return {
      error,
    };
  }
};
