import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { LoaderWrap } from "./style";
import { axiosKakaoLogin } from "../api/oAuth/kakaoOAuth";

const Kakao = () => {
  const [payload, setPayload] = useState({
    code: "",
    username: "",
    password: "",
  });

  const params = new URL(document.URL).searchParams;
  const newCode = params.get("code");
  setPayload({ ...payload, code: newCode });

  axiosKakaoLogin(newCode).then((response) => {
    console.log(response);
  });

  useEffect(() => {
    axiosKakaoLogin();
  }, []);

  return (
    <LoaderWrap>
      <ReactLoading type="spin" color="#A593E0" />
    </LoaderWrap>
  );
};

export default Kakao;
