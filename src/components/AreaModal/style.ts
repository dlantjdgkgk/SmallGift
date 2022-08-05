import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  max-width: 768px;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 323px;
  border-radius: 16px 16px 0px 0px;
  padding-right: 16px;
  padding-left: 16px;
  position: absolute;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px -8px 16px rgba(184, 184, 184, 0.25);

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-top: 54px;
    margin-bottom: 16px;
  }
  .postalCode {
    margin-bottom: 115px;
    width: 100%;
    height: 40px;
    background: #eeeeee;
    display: flex;
    align-items: center;
    div {
      width: 24px;
      height: 24px;
      background: #a6a6a6;
      margin-left: 16px;
      margin-right: 8px;
    }
    .newAddress {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    .findAddress {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #6f6f6f;
    }
  }
  .beforeSelection {
    width: 100%;
    height: 44px;
    border: 1px solid #000000;
    border-radius: 4px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #494949;
  }
  .afterSelection {
    width: 100%;
    height: 44px;
    border: 1px solid #000000;
    border-radius: 4px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: white;
    background: #494949;
    z-index: 5;
  }
`;
