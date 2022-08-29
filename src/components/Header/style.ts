import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding-top: ${(props) => (props.isCategory ? "0px" : "48px")};
  .header {
    width: 100%;
    min-width: 360px;
    max-width: 768px;
    background-color: ${(props) => (props.isCategory ? "transparent" : "white")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 1;
    transition: top 0.4s ease-in-out;
  }

  .logo {
    width: 22px;
    height: 30px;
    background-color: ${(props) => (props.isCategory ? "transparent" : "white")};
    margin: 8px 0px 8px 16px;
  }

  .back,
  button {
    width: 32px;
    height: 32px;
    border: none;
    background-color: ${(props) => (props.isCategory ? "transparent" : "white")};
    margin: 8px 16px 8px 0px;
  }
  .back {
    margin-left: 16px;
  }
  .pageDescription {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;
