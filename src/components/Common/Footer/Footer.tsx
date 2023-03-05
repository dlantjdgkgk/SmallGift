import * as Styled from "./style";

const Footer = (): JSX.Element => {
  return (
    <Styled.FooterWrapper>
      <div>
        <Styled.Info>
          <p>사업자정보확인</p>
          <p>이용약관</p>
          <p>전자금융거래이용약관</p>
          <p>개인정보처리방침</p>
        </Styled.Info>
        <Styled.Title>
          <p>(주) 스몰기프트</p>
        </Styled.Title>
        <Styled.Info>
          <p>
            (주)스몰기프트는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 따라서 상품, 거래정보 및 거래에 대해
            책임을 지지 않습니다.
          </p>
        </Styled.Info>
      </div>
    </Styled.FooterWrapper>
  );
};

export default Footer;
