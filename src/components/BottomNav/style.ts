import styled from "styled-components";

export const NavWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45px;

  div {
    text-align: center;
    float: left;
    width: 20%;
    height: 45px;
    line-height: 45px;
  }
  .nav-item {
    color: grey;
  }

  .active {
    color: red;
  }
`;
