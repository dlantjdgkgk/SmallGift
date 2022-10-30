import { useEffect, useState } from "react";

import ReactLoading from "react-loading";
import { LoaderWrap } from "./style";
import { axiosNaverLogin } from "../api/oAuth/naverOAuth";

const Naver = () => {
  const [payload, setPayload] = useState({
    code: "",
    username: "",
    password: "",
  });
  const params = new URL(document.URL).searchParams;
  const newCode = params.get("code");

  const NaverAPI = () => {
    setPayload({ ...payload, code: newCode });

    axiosNaverLogin(newCode).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    NaverAPI();
  }, []);

  return (
    <LoaderWrap>
      <ReactLoading type="spin" color="#A593E0" />
    </LoaderWrap>
  );
};

export default Naver;
