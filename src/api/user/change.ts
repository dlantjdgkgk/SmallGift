import axios from "axios";
import { accessApi } from "../server/Api";

export const axiosChangePwd = async (dataTosubmit) => {
  try {
    const response = await accessApi.post("../api/user/change/password", dataTosubmit);
    if (response.code === 200) {
      return true;
    }
    alert(response.msg);
    return false;
  } catch (error) {
    return false;
  }
};
