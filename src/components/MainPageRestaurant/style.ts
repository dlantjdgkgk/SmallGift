import styled from "styled-components";

export const SectionRestaurantWrapper = styled.section`
  margin: 32px 0 0 16px;
  overflow: hidden;
`;

export const LocationWrapper = styled.div`
  margin-right: 16px;
  .location {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    button {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #969696;
    }
    img {
      margin-left: 4px;
    }
  }
  .locationBtn {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #969696;
  }

  .locationContainer {
    width: 100%;
    margin-bottom: 27px;
  }
  .addressInformation {
    display: flex;
    width: 100%;
    padding: 10px;
    background: #f5f5f5;
    border-radius: 8px;
    align-items: center;
    img {
      margin-right: 2px;
    }
    .address {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #000000;
      margin-right: 12px;
    }
    .exactAddress {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #3d3d3d;
    }
  }
`;

export const RestaurantWrapper = styled.div`
  .noData {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    img {
      margin-bottom: 10px;
    }
    p {
      margin-right: 8px;
      font-family: "Noto Sans KR";
      font-weight: 700;
      font-size: 16px;
      line-height: 29px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    .noDataTitle {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .restaurants {
    display: flex;
    margin-bottom: 40px;
    position: relative;
    overflow-x: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    .restaurant {
      display: flex;
      flex-direction: column;
      margin-right: 16px;
      .category {
        position: absolute;
        color: white;
        width: 46px;
        height: 24px;
        background-color: black;
        font-size: 12px;
        margin: 8px 0 0 8px;
        border-radius: 8px;
      }
    }

    .restaurantInformation {
      font-family: "Noto Sans KR";
      .restaurantName {
        font-family: "Noto Sans KR", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: -0.04em;
        color: #969696;
        margin-top: 8px;
      }
      .restaurantMenu {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.04em;
        color: #000000;
      }
      .menuPrice {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: -0.04em;
        color: #000000;
        margin-top: 22px;
      }
    }
  }
`;
