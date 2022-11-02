import { accessApi } from "../server/Api";
import { IDataTosubmitProps } from "./types";
import { AxiosResponse } from "axios";

interface ResponseProps {
  code: string;
  true: boolean;
}

export const axiosChangePwd = async ({
  dataTosubmit,
}: IDataTosubmitProps): Promise<AxiosResponse<ResponseProps> | undefined> => {
  try {
    const response = await accessApi.post("../api/user/change/password", dataTosubmit);
    if (response.code === 200) {
      return true;
    }
  } catch (error) {
    throw new Error("error");
  }
};
