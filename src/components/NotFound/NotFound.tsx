import pageError from "../../assets/img/pageError.png";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";

const NotFound = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Styled.NotFoundContainer>
      <Styled.NotFoundWrapper>
        <img src={pageError} alt="페이지 에러" />
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          이전 페이지로 돌아가기
        </button>
      </Styled.NotFoundWrapper>
    </Styled.NotFoundContainer>
  );
};

export default NotFound;
