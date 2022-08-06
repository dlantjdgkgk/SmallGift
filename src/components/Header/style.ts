import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding-top: 48px;
  .header {
    width: 100%;
    min-width: 360px;
    max-width: 768px;
    background-color: #d9d9d9;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    z-index: 1;
    transition: top 0.4s ease-in-out;
  }

  .logo {
    width: 80px;
    height: 32px;
    background-color: #a8a8a8;
    margin: 8px 0px 8px 16px;
    font-size: 8px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    letter-spacing: -0.04em;
    color: #000000;
  }

  .back,
  button {
    width: 32px;
    height: 32px;
    border: none;
    font-size: 8px;
    background-color: #a8a8a8;
    margin: 8px 16px 8px 0px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .back {
    margin-left: 16px;
  }
`;
