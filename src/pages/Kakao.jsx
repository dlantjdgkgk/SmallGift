import Spinner from "../elements/Spinner";
import { axiosKakaoLogin } from "../api/oAuth/kakaoOAuth";
import { useEffect } from "react";

const Kakao = () => {
  const params = new URL(document.location.toString()).searchParams;
  const code = params.get("code");

  console.log(code);

  useEffect(() => {
    (async () => {
      await axiosKakaoLogin(code);
    })();
  }, []);

  return <Spinner />;
};

export default Kakao;
