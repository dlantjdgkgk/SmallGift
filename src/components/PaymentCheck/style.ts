import styled from "styled-components";

export const PaymentCheckWrapper = styled.main``;

export const PaymentCheckSection = styled.section`
  .gift {
    font-size: 32px;
    text-align: center;
    margin-top: 167px;
    margin-bottom: 24px;
  }
  .sendGift {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #7b7b7b;
    margin-bottom: 16px;
  }
  .confirmPay {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.04em;
    color: black;
  }

  .sendMessage {
    display: flex;
    justify-content: center;
    margin-bottom: 46px;
    margin-top: 110px;
    .kakao {
      width: 18px;
      height: 18px;
    }
    button {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      letter-spacing: -0.04em;
      text-decoration-line: underline;
      color: #7b7b7b;
      margin-left: 8px;
    }
  }
  .orderListAndConfirm {
    display: flex;
    padding-left: 32px;
    padding-right: 32px;
  }
  .orderList {
    width: 72%;
    height: 44px;
    background: #494949;
    border-radius: 4px;
    margin-right: 16px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #ffffff;
  }
  .confirm {
    width: 28%;
    border: 1px solid #494949;
    border-radius: 4px;
    height: 44px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #494949;
  }
`;
