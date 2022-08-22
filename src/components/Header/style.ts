import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding-top: 48px;
  .header {
    width: 100%;
    min-width: 360px;
    max-width: 768px;
    background-color: white;
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
    background-color: white;
    margin: 8px 0px 8px 16px;
  }

  .back,
  button {
    width: 32px;
    height: 32px;
    border: none;
    background-color: white;
    margin: 8px 16px 8px 0px;
  }
  .back {
    margin-left: 16px;
  }
`;
