import styled from "styled-components";

export const SectionRestaurantWrapper = styled.section`
  margin: 32px 0 0 16px;
  overflow: hidden;
`;

export const LocationWrapper = styled.div`
  .location {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .locationContainer {
    width: 100%;
    padding-right: 16px;
  }
  .addressInformation {
    display: flex;
    width: 100%;
    background-color: #d9d9d9;
    padding: 10px;
    align-items: center;
    .address {
      font-size: 14px;
    }
    .exactAddress {
      font-size: 14px;
      margin-left: 12px;
      font-weight: bold;
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
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8px 0 0 8px;
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
      .restaurantName,
      .menuPrice {
        font-size: 12px;
        font-weight: 400;
      }
      .restaurantMenu {
        font-weight: 700;
        font-size: 14px;
      }
    }
  }
`;
