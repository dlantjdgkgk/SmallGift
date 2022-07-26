import styled from "styled-components";

export const HeaderWrapper = styled.div`
  min-width: 360px;
  width: 100vw;
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 22vw;
    height: 32px;
    background-color: #a8a8a8;
    margin: 8px 0px 8px 16px;
    font-size: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    width: 9vw;
    height: 32px;
    border: none;
    font-size: 2vw;
    background-color: #a8a8a8;
    margin: 8px 12px 8px 0px;
  }
  .search {
    width: 12vw;
  }
`;

export const Navbar = styled.div`
  width: 100%;
  height: 212px;
  background-color: #c1c1c1;
`;
