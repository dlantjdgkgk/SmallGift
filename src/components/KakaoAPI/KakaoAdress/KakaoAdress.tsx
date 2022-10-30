import DaumPostcode, { Address } from "react-daum-postcode";
import styled from "styled-components";
import { Button } from "@mui/material";

interface DaumPostModalProps {
  handleDaumPostOpne: () => void;
  handleComplete: (arg: Address) => void;
}

const KakaoAdress = ({ handleDaumPostOpne, handleComplete }: DaumPostModalProps): JSX.Element => {
  const handle = {
    selectAddress: (data: Address): void => {
      handleDaumPostOpne();
      handleComplete(data);
    },
  };

  return (
    <Wrapper>
      <DaumPostcode
        onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
        autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
        defaultQuery="" // 팝업을 열때 기본적으로 입력되는 검색어
        style={{ height: "100%" }}
      />
      <Button variant="contained" onClick={handleDaumPostOpne}>
        뒤로가기
      </Button>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default KakaoAdress;
