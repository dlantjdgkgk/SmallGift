import styled from "styled-components";

export const Welcome = styled.section`
  margin: 38px 0px 45px 16px;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  span {
    font-weight: 700;
  }
`;

export const LoginSection = styled.section`
  padding-left: 16px;
  padding-right: 16px;
  .login {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .loginInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #f2f2f2;
    border-radius: 8px;
    height: 42px;
    margin-top: 12px;
    .imgAndEmail {
      display: flex;
      align-items: center;
    }
  }
  img {
    width: 24px;
    height: 24px;
    margin-left: 16px;
  }
  .email {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-left: 16px;
  }
  .logout {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    text-decoration-line: underline;
    color: #9d9d9d;
    margin-right: 20px;
  }
`;

export const MemberInfoSection = styled.section`
  margin: 40px 16px 0 16px;
  .memberInfo {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      letter-spacing: -0.04em;
      color: #9d9d9d;
      margin-right: 14px;
    }
  }
  .name,
  .email,
  .phone,
  .account {
    display: flex;
    margin-bottom: 6px;
    label {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #8f8f8f;
      width: 64px;
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #000000;
    }
  }
  .account {
    margin-bottom: 34px;
  }
`;
