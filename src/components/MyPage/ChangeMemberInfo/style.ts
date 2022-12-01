import styled from "styled-components";

export const ChangeMemberInfoSection = styled.section`
  margin: 16px 16px 0px 16px;
  label {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #000000;
  }

  .userName,
  .emailInfo,
  .userPhone,
  .refundAccount {
    display: flex;
    flex-direction: column;
    margin: 16px 0 0 0;
  }
  .userName,
  .emailInfo,
  .userPhone {
    input {
      width: 100%;
      height: 40px;
      background: #f2f2f2;
      border-radius: 8px;
      margin-top: 8px;
      padding-left: 16px;
    }
  }
  .userPhone {
    input {
      border: 1px solid #d8d8d8;
      background: white;
    }
  }
  .refundAccount {
    .refundForm {
      display: flex;
      width: 100%;
      margin-top: 8px;
      height: 40px;
    }
    select::-ms-expand {
      display: none; /*for IE10,11*/
    }
    select {
      width: 25%;
      border: 1px solid #d8d8d8;
      margin-right: 10px;
      border-radius: 8px;
      padding-left: 16px;
      -webkit-appearance: none; /* for chrome */
      -moz-appearance: none; /*for firefox*/
      appearance: none;
      background: url("/img/SelectArrow.png") no-repeat 85% 50%/15px auto;
    }
    input {
      width: 75%;
      border: 1px solid #d8d8d8;
      padding-left: 16px;
      border-radius: 8px;
    }
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
  .errorMessage {
    width: 100%;
    color: white;
    border-radius: 5px;
    background: #6600cc;
    padding: 8px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

export const BoundaryLine = styled.div`
  width: 100%;
  height: 12px;
  background: #f4f4f4;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const Section = styled.section`
  margin-left: 16px;
  margin-right: 16px;
  .withdrwal {
    display: flex;
    justify-content: space-between;
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    img {
      width: 16px;
      height: 16px;
      color: black;
    }
  }
  .onClickBtn {
    display: flex;
    width: 100%;
    button {
      margin-top: 32px;
      height: 44px;
      border-radius: 4px;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      letter-spacing: -0.04em;
    }
    .cancel {
      border: 1px solid #cccccc;
      font-weight: 400;
      color: #494949;
      margin-right: 17px;
      width: 25%;
    }
    .modify {
      font-weight: 500;
      color: #ffffff;
      background: #6600cc;
      width: 75%;
    }
  }
`;
