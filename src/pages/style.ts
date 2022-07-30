import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 12px;
  background-color: #f4f4f4;
  margin-bottom: 30px;
`;
export const Navbar = styled.div`
  width: 100%;
  height: 212px;
  background-color: #c1c1c1;
`;

export const CategoryRestaurantWrapper = styled.div`
  position: relative;
  .nav {
    height: 192px;
    background-color: #c1c1c1;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) -55.86%, rgba(0, 0, 0, 0.7) 100%);
  }
  .reasturantInformation {
    .category {
      position: absolute;
      top: 0;
      width: 32px;
      height: 20px;
      background: #5e5e5e;
      border-radius: 2px;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      letter-spacing: -0.04em;
      color: #f4f4f4;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 16px;
      margin-top: 110px;
    }
    .restaurantLike {
      width: 100%;
      position: absolute;
      top: 0;
      display: flex;
      justify-content: space-between;
      margin-top: 4px;
      padding-right: 16px;
      padding-left: 16px;
      margin-top: 136px;
    }
    .restaurantName {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: -0.04em;
      color: #ffffff;
    }
    button {
      width: 32px;
      height: 32px;
      background: #737373;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 8px;
      line-height: 12px;
      text-align: center;
      letter-spacing: -0.04em;
      color: #000000;
    }
  }
  .restaurantBestMenu {
    margin: 24px 0 0 24px;
    .bestMenu {
      margin-bottom: 16px;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.04em;
      color: #000000;
    }
  }

  .menuInformation {
    width: 100%;
    display: flex;
    margin-bottom: 32px;
  }
  .menuImage {
    width: 92px;
    height: 92px;
    background: #d9d9d9;
  }
  .setMenuInformation {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
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
  }
  .line {
    margin-top: 45px;
    margin-bottom: 16px;
    width: 100%;
    height: 8px;
    background: #f8f8f8;
  }
`;
