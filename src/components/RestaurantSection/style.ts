import styled from "styled-components";

export const RestaurantSectionWrapper = styled.section`
  img {
    width: 100%;
    display: block;
    z-index: 9999;
  }

  .resturantThumbnail {
    .category {
      background: #6600cc;
      border-radius: 2px;
      position: absolute;
      top: 0;
      width: 36px;
      height: 23px;
      border-radius: 2px;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      letter-spacing: -0.04em;
      color: #ffffff;
      margin-left: 24px;
      margin-top: 128px;
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
