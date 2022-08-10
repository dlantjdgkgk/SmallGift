import styled from "styled-components";

export const BuyInfoWrapper = styled.main``;

export const ProductInfoSection = styled.section`
  margin: 24px 0 0 0;
  padding-left: 16px;
  padding-right: 24px;
  .productInfo {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
  }

  .gifticonInformation {
    width: 100%;
    display: flex;
  }
  .menuImage {
    width: 82px;
    height: 82px;
    background: #d9d9d9;
  }
  .setMenuInfo {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
  }

  .setMenuName {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .setMenu {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #b8b8b8;
  }
  .price {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-top: 7px;
  }
`;

export const BoundaryLine = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 12px;
  background: #f4f4f4;
`;

export const SenderInfoSection = styled.section`
  margin: 24px 0 0 0;
  padding-left: 16px;
  .senderInfo {
    padding-right: 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;

export const FormSender = styled.form`
  margin-top: 11px;
  padding-right: 16px;
  .checkInfo {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    input {
      width: 20px;
      height: 20px;
      border: 1px solid #000000;
      border-radius: 4px;
      margin-right: 8px;
    }
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #636363;
    }
  }
  .nickName,
  .phone {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      white-space: nowrap;
      width: 80px;
    }
    input {
      width: 100%;
      height: 40px;
      background: #f2f2f2;
      border-radius: 8px;
      margin-left: 12px;
      padding-left: 12px;
    }
    input::placeholder {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #636363;
    }
  }
  .emailInfo {
    display: flex;
    margin-bottom: 32px;
    align-items: center;

    .email {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      white-space: nowrap;
      width: 80px;
    }
    input {
      width: 50%;
      height: 40px;
      background: #f2f2f2;
      border-radius: 8px;
      margin-left: 12px;
      padding-left: 12px;
    }
    input::placeholder {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #636363;
    }
    p {
      margin-left: 4px;
      margin-right: 4px;
    }
    select {
      width: 50%;
      height: 40px;
      border: none;
      background: #f2f2f2;
      border-radius: 8px;
      text-align: center;
    }
  }
`;

export const ReceiverInfoSection = styled.section`
  margin: 24px 0 0 0;
  padding-left: 16px;
  .receiveInfo {
    padding-right: 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;

export const FormReceiver = styled.form`
  margin-top: 24px;
  padding-right: 4px;
  .checkInfo {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    input {
      width: 20px;
      height: 20px;
      border: 1px solid #000000;
      border-radius: 4px;
      margin-right: 8px;
    }
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #636363;
    }
  }
  .transmissionWay {
    display: flex;
  }
  .transmission {
    height: 48px;
    background: #f2f2f2;
    border: none;
    border-radius: 8px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    div {
      width: 24px;
      height: 24px;
      background: #d9d9d9;
      border-radius: 4px;
      margin-right: 12px;
    }
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
  }

  .phone {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    margin-top: 24px;
    padding-right: 12px;
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      white-space: nowrap;
      width: 80px;
    }
    input {
      width: 100%;
      height: 40px;
      background: #f2f2f2;
      border-radius: 8px;
      margin-left: 12px;
      padding-left: 12px;
    }
    input::placeholder {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #636363;
    }
  }
`;

export const PaymentMethodSection = styled.section`
  margin-top: 24px;
  padding-left: 16px;
  padding-right: 4px;
  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .method {
    display: flex;

    margin-top: 16px;
  }
  .card,
  .bank,
  .phone {
    height: 48px;
    background: #f2f2f2;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    div {
      width: 24px;
      height: 24px;
      background: #d9d9d9;
      border-radius: 4px;
      margin-right: 12px;
    }
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
  }
  .card {
    width: 27%;
  }
  .bank {
    width: 42%;
  }
  .phone {
    width: 31%;
  }
  .payment {
    padding-right: 12px;
    margin-bottom: 74px;
    margin-top: 64px;
  }
  button {
    width: 100%;
    height: 44px;
    background: #494949;
    border-radius: 4px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #ffffff;
  }
`;
