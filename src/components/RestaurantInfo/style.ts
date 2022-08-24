import styled from "styled-components";

export const RestaurantInfoWrapper = styled.section`
  .menuAndRestaurantInformation {
    display: flex;
    margin-bottom: 32px;
    button {
      width: 50%;
      font-weight: 400;
      p {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        letter-spacing: -0.04em;
        margin-bottom: 10px;
      }
    }
  }
  .manyMenu {
    margin-left: 24px;
    margin-bottom: 100px;
  }
  img {
    width: 92px;
    height: 92px;
  }

  .manyMenuInformation {
    width: 100%;
    display: flex;
    margin-bottom: 24px;
  }
  .restaurantInformation {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    margin-right: 24px;
    .addressInformation {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #e6e6e6;
    }
    .restaurantAddress {
      display: flex;
      align-items: center;
      margin-bottom: 46px;
    }
    .address,
    .hours,
    .phoneNumberKorean {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      display: flex;
      align-items: center;
      letter-spacing: -0.04em;
      color: #000000;
      margin-left: 15.92px;
    }
    .map {
      width: 100%;
      height: 144px;
      background-color: black;
      margin-bottom: 24px;
    }
    .restaurantOperatingHours {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #e6e6e6;
      margin-top: 24px;
      .operatingHours {
        display: flex;
        align-items: center;
        margin-bottom: 6px;
      }
      .hourInformation {
        margin-bottom: 22px;
        margin-left: 34px;
        .everyday,
        .breaktime,
        .lastOrder,
        .phoneNumber {
          font-family: "Noto Sans KR";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 23px;
          display: flex;
          align-items: center;
          letter-spacing: -0.04em;
          color: #000000;
        }
      }
    }
    .phoneNumberInformation {
      display: flex;
      flex-direction: column;
      margin-top: 24px;
      margin-bottom: 100px;
      .phone {
        display: flex;
        align-items: center;
        margin-bottom: 6px;
      }
      .phoneNumber {
        margin-left: 34px;
      }
    }
  }
`;
