import styled from "styled-components";

export const SenderInfoSection = styled.section`
  margin: 16px 0 0 0;
  padding-left: 16px;
  .senderInfo {
    padding-right: 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;

export const FormSender = styled.section`
  padding-right: 16px;
  .checkInfo {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    input {
      width: 20px;
      height: 20px;
      background: #6600cc;
      border: 1px solid #3b0076;
      border-radius: 4px;
      margin-right: 8px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #636363;
    }
  }
  .nickName,
  .phone,
  .emailInfo {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    label {
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
      border: 1px solid #b6b6b6;
    }
    input::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #636363;
    }
  }
`;

export const BoundaryLine = styled.div`
  width: 100%;
  height: 12px;
  background: #f4f4f4;
`;

export const PaymentMethodSection = styled.section`
  .payment {
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 32px;
    margin-top: 64px;
  }
  button {
    width: 100%;
    height: 44px;
    background: #6600cc;
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #ffffff;
  }
`;
