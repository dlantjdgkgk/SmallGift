import { useEffect } from "react";
import ReactLoading from "react-loading";
import { LoaderWrap } from "./style";
import { axiosKakaoLogin } from "../api/oAuth/kakaoOAuth";

const Kakao = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    axiosKakaoLogin(code);
  }, []);

  return (
    <LoaderWrap>
      <ReactLoading type="spin" color="#A593E0" />
    </LoaderWrap>
  );
};

export default Kakao;
