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
  overflow: hidden;
  .nav {
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
    margin-bottom: 16px;
  }
  .bestMenuInformation {
    width: 100%;
    display: flex;
    margin-bottom: 24px;
  }

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
    margin-top: 45px;
    margin-bottom: 16px;
    width: 100%;
    height: 8px;
    background: #f8f8f8;
  }
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
        color: #000000;
        margin-bottom: 10px;
      }
    }
  }
  .manyMenu {
    margin-left: 24px;
    margin-bottom: 100px;
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

export const CategoryProductWrapper = styled.div`
  .nav {
    position: relative;
    background: #575757;
    height: 376px;
    z-index: 1;
  }
  .backAndAlertButton {
    display: flex;
    justify-content: space-between;
    margin-left: 16px;
    margin-right: 16px;
  }
  button {
    width: 32px;
    height: 32px;
    background: #a8a8a8;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #000000;
    margin-top: 8px;
  }
  .likeAndShareButton {
    display: flex;
    margin-top: 8px;
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
    .like {
      margin-left: 264px;
      margin-right: 16px;
    }
  }
  .modal {
    position: absolute;
    width: 360px;
    height: 323px;
    background: #ffffff;
    border-radius: 16px 16px 0px 0px;
    z-index: 3;
  }
`;
