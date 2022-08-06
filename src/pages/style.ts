import styled from "styled-components";

export const Main = styled.main``;

export const Line = styled.div`
  width: 100%;
  height: 12px;
  background-color: #f4f4f4;
  margin-bottom: 32px;
`;
export const Navbar = styled.nav`
  width: 100%;
  height: 212px;
  background-color: #c1c1c1;
`;

export const CategoryWrapper = styled.main`
  margin: 32px 0 0 16px;
`;

export const CategoryRestaurantWrapper = styled.main`
  position: relative;
  overflow: hidden;

  .menuImage {
    width: 92px;
    height: 92px;
    background: #d9d9d9;
  }
  .setMenuInfo {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
  }
  .setManyMenuInformation {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
  }

  .setMenuName {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .setMenu {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-top: 4px;
  }

  .price {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-top: 17px;
  }

  .line {
    margin-top: 25px;
    margin-bottom: 16px;
    width: 100%;
    height: 8px;
    background: #f8f8f8;
  }
`;
