import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { LoaderWrap } from "./style";
import { axiosKakaoLogin } from "../api/oAuth/kakaoOAuth";
import { useCookies } from "react-cookie";

const Kakao = () => {
  const [setCookies] = useCookies([]);
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    if (axiosKakaoLogin(code, setCookies)) {
      window.location.href = "/";
    }
  }, []);

  return (
    <LoaderWrap>
      <ReactLoading type="spin" color="#A593E0" />
    </LoaderWrap>
  );
};

export default Kakao;
