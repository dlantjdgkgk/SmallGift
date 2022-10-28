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
  background-color: white;
  border-radius: 16px 16px 0px 0px;
  padding-top: 32px;
  padding-left: 32px;
  position: absolute;
  bottom: 0;

  .setMenuInformation {
    div {
      display: flex;
      justify-content: space-between;
      padding-right: 32px;
      button {
        font-size: 24px;
      }
    }
    .setName {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    .setMenu {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
      margin-top: 8px;
    }
  }
  .priceInformation {
    .onePerson {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #a5a5a5;
      margin-top: 72px;
    }
    .price {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: -0.04em;
      color: #000000;
      margin-top: 2px;
      margin-bottom: 24px;
    }
  }
  .shoppingBasket {
    width: 140px;
    height: 44px;
    background: #494949;
    border-radius: 4px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #ffffff;
  }
  .gift {
    width: 140px;
    height: 44px;
    border: 1px solid #494949;
    border-radius: 4px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #494949;
    margin-left: 16px;
  }
`;