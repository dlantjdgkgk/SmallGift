import kakaoImg from "assets/img/kakao_oauth.png";
import * as Styled from "./style";
import { kakaOauthUrl } from "utils/kakaoOAuthUtil";

const LogIn = () => {
  return (
    <Styled.Oauths>
      <a href={kakaOauthUrl}>
        <img src={kakaoImg} alt="kakao" />
      </a>
    </Styled.Oauths>
  );
};

export default LogIn;
