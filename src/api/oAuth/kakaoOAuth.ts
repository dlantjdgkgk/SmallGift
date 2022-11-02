import { IDataTosubmitProps } from "api/user/types";
import axios, { AxiosResponse } from "axios";

export const axiosKakaoLogin = async ({ dataTosubmit }: IDataTosubmitProps): Promise<AxiosResponse | undefined> => {
  try {
    const response = await axios.get(`http://116.33.59.38:8080/api/user/oauth/kakao/token?code=${dataTosubmit}`);
    return response;
  } catch (error) {
    alert(error);
  }
};
