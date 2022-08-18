import styled from "styled-components";

export const RestaurantSectionWrapper = styled.section`
  .section {
    height: 192px;
    background-color: #c1c1c1;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) -55.86%, rgba(0, 0, 0, 0.7) 100%);
  }
  .resturantThumbnail {
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
      margin-left: 24px;
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
      padding-left: 24px;
    }
    .restaurantName {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: -0.04em;
      color: #ffffff;
      margin-top: 136px;
    }
    .like,
    .share {
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
      margin-top: 4px;
    }
    .like {
      margin-right: 16px;
    }
  }
`;
