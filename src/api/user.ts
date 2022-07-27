import axios from "axios";

export function loginUser(dataToSubmit) {
  const request = axios.post("/user/login", dataToSubmit).then((response) => response.data);

  return {
    type: "login_user",
    payload: request,
  };
}
