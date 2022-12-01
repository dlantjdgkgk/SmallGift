import styled from "styled-components";

export const RestaurantSectionWrapper = styled.section`
  position: relative;
  .shadow {
    position: absolute;
    width: 100%;
    display: block;
    max-height: 216px;
  }
  .picture {
    width: 100%;
    display: block;
    max-height: 216px;
  }
  .resturantThumbnail {
    margin-left: 24px;
    .category {
      position: absolute;
      bottom: 0;
      width: 36px;
      height: 23px;
      margin-bottom: 64px;
      border-radius: 2px;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      letter-spacing: -0.04em;
      color: #ffffff;
      background: #6600cc;
      border-radius: 2px;
    }
    .restaurantLike {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      margin-top: 4px;
      padding-right: 40px;
    }
    .restaurantName {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: -0.04em;
      color: #ffffff;
      margin-top: auto;
      margin-bottom: 28px;
    }
    button {
      width: 32px;
      height: 32px;
      margin-top: auto;
      margin-bottom: 28px;
    }
  }
`;
