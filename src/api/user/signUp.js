import { api } from "../server/Api";

export const axiosEmailCheck = async (email) => {
  try {
    const response = await api.get(`/api/user/email/exists?email=${email}`);
    if (response.status === 200) {
      alert("이메일 중복 확인 성공");
    }
  } catch (error) {
    alert("중복 확인에 실패하였습니다.");
  }
};
export const axiosUsernameCheck = async (username) => {
  try {
    const response = await api.get(`/api/user/username/exists?username=${username}`);
    if (response.status === 200) {
      alert("아이디 중복 확인 성공");
    }
  } catch (error) {
    alert("중복 확인에 실패하였습니다.");
  }
};

export const axiosSignUpUser = async (dataTosubmit) => {
  try {
    const response = await api.post("/api/user/signup", dataTosubmit);
    if (!response.status === 200) {
      alert(response.msg);
      return false;
    }
    window.location.href = "/login";
    console.log("회원가입에 성공하였습니다.");
    return true;
  } catch (error) {
    console.log("회원가입에 실패하였습니다.");
    return false;
  }
};
