import axios from "axios";
import { api } from "../server/Api";

export const axiosFindId = async (dataTosubmit, setData) => {
  try {
    const response = await api.post("../api/user/find/id", dataTosubmit);
    if (response.code === 200) {
      setData(response.username);
      return true;
    }
  } catch (error) {
    return false;
  }
  return 0;
};

export const axiosFindPwd = async (dataTosubmit, setData) => {
  try {
    const response = await api.post("../api/user/find/password", dataTosubmit);
    if (response.code === 200) {
      setData(response.username);
      return true;
    }
  } catch (error) {
    return false;
  }
  return 0;
};
