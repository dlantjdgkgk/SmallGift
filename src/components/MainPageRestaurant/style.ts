import styled from "styled-components";

export const SectionRestaurantWrapper = styled.section`
  margin: 32px 16px 0 16px;
  overflow: hidden;
`;

export const LocationWrapper = styled.div`
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
      /* identical to box height */
      letter-spacing: -0.04em;
      color: #969696;
    }
  }

  .locationContainer {
    width: 100%;
    margin-bottom: 27px;
  }
  .addressInformation {
    display: flex;
    width: 100%;
    background-color: #d9d9d9;
    padding: 10px;
    align-items: center;
    img {
      margin-right: 7px;
    }
    .address {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #000000;
      margin-right: 12px;
    }
    .exactAddress {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #3d3d3d;
    }
  }
  .locationButton {
    display: flex;
    width: 100%;
    margin: 12px 0 60px 0;
    justify-content: space-between;
    p {
      font-size: 12px;
      color: #838383;
    }
    button {
      font-weight: bold;
    }
  }
`;

export const RestaurantWrapper = styled.div`
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
        background-color: #5e5e5e;
        font-size: 12px;
        margin: 8px 0 0 8px;
        border-radius: 8px;
      }
      button {
        width: 124px;
        height: 124px;
        background-color: #d9d9d9;
        margin-bottom: 8px;
      }
    }

    .restaurantInformation {
      font-family: "Noto Sans KR";
      .restaurantName {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: -0.04em;
        color: #969696;
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
