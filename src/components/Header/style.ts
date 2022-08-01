import styled from "styled-components";

export const HeaderWrapper = styled.div`
  min-width: 360px;
  max-width: 768px;
  margin: 0 auto;
  width: 100%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  transition: top 0.2s ease-in-out;

  .logo {
    width: 80px;
    height: 32px;
    background-color: #a8a8a8;
    margin: 8px 0px 8px 16px;
    font-size: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    width: 32px;
    height: 32px;
    border: none;
    font-size: 8px;
    background-color: #a8a8a8;
    margin: 8px 16px 8px 0px;
  }
`;
