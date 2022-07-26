import React from "react";
import * as Styled from "./style";

const Footer = () => {
  return (
    <Styled.FooterWrapper>
      <div>
        <div className="information">
          <p>사업자정보확인</p>
          <p>이용약관</p>
          <p>전자금융거래이용약관</p>
          <p>개인정보처리방침</p>
        </div>
        <div className="smallgift">
          <p>(주) 스몰기프트</p>
        </div>
        <div className="smallgiftInformation">
          <p>
            (주)스몰기프트는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 따라서 상품, 거래정보 및 거래에 대해
            책임을 지지 않습니다.
          </p>
        </div>
      </div>
    </Styled.FooterWrapper>
  );
};

export default Footer;
