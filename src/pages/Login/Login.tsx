import kakaoImg from "assets/img/kakao_oauth.png";
import styled from "styled-components";
import { kakaOauthUrl } from "utils/kakaoOAuthUtil";

const Oauths = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: 300px;
  }
`;

const LogIn = () => {
  return (
    <Oauths>
      <a href={kakaOauthUrl}>
        <img src={kakaoImg} alt="kakao" />
      </a>
    </Oauths>
  );
};

export default LogIn;
