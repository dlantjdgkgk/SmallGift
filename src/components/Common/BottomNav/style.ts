import styled from "styled-components";

export const NavWrapper = styled.div`
  padding-bottom: 56px;
`;

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 768px;
  margin: 0 auto;
  z-index: 1;
  height: 56px;
  background-color: white;
  box-shadow: 0px -2px rgb(0 0 0 / 5%);
`;

export const IconAndDescription = styled.div`
  float: left;
  width: 25%;
  height: 100%;
  line-height: 45px;
  justify-content: center;
  align-items: center;
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.04em;
    margin-top: 6px;
  }

  .nav-item {
    color: #bbb;
  }

  .active {
    color: #6600cc;
  }
`;
