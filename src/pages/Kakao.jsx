import Spinner from "../elements/Spinner";
import { axiosKakaoLogin } from "../api/oAuth/kakaoOAuth";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

const Kakao = () => {
  const [setCookies] = useCookies([]);

  const params = new URL(document.location.toString()).searchParams;
  const code = params.get("code");

  console.log(code);

  useEffect(() => {
    (async () => {
      await axiosKakaoLogin(code, setCookies);
    })();
  }, []);

  return <Spinner />;
};

export default Kakao;
