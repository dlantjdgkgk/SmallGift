import styled from "styled-components";

export const Main = styled.main``;

export const Line = styled.div`
  width: 100%;
  height: 12px;
  background-color: #f4f4f4;
  margin-bottom: 32px;
`;
export const Section = styled.div`
  background-repeat: no-repeat;
  img {
    width: 100%;
    display: block;
  }
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

export const PaymentCompleteWrapper = styled.main``;

export const PaymentCompleteSection = styled.section`
  .gift {
    font-size: 32px;
    text-align: center;
    margin-top: 167px;
    margin-bottom: 24px;
  }
  .sendGift {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #7b7b7b;
    margin-bottom: 16px;
  }
  .confirmPay {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.04em;
    color: black;
  }

  .sendMessage {
    display: flex;
    justify-content: center;
    margin-bottom: 46px;
    margin-top: 110px;
    .kakao {
      width: 18px;
      height: 18px;
    }
    button {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      letter-spacing: -0.04em;
      text-decoration-line: underline;
      color: #7b7b7b;
      margin-left: 8px;
    }
  }
  .orderListAndConfirm {
    display: flex;
    padding-left: 32px;
    padding-right: 32px;
  }
  .orderList {
    width: 72%;
    height: 44px;
    background: #494949;
    border-radius: 4px;
    margin-right: 16px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #ffffff;
  }
  .confirm {
    width: 28%;
    border: 1px solid #494949;
    border-radius: 4px;
    height: 44px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #494949;
  }
`;

export const MypageWrapper = styled.main`
  margin-top: 24px;
`;

export const LoginSection = styled.section`
  padding-left: 16px;
  padding-right: 16px;
  .login {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .loginInfo {
    display: flex;
    align-items: center;
    width: 100%;
    background: #f2f2f2;
    border-radius: 8px;
    height: 42px;
  }
  img {
    width: 24px;
    height: 24px;
    margin-left: 16px;
    margin-right: 16px;
  }
  .email {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-right: 73px;
  }
  .logout {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    text-decoration-line: underline;
    color: #9d9d9d;
  }
`;

export const RecentOrderSection = styled.section`
  margin-top: 32px;
  padding-right: 16px;
  padding-left: 16px;
  .recentOrderList {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .recentOrder {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .more {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: -0.04em;
    color: #9d9d9d;
    span {
      font-size: 20px;
      margin-left: 6px;
    }
  }
  .purchaseDate {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-bottom: 8px;
  }
  .gifticonInfo {
    display: flex;
    margin-bottom: 32px;
    width: 100%;
    height: 104px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    align-items: center;
  }
  .thumbnail {
    position: relative;
    margin-right: 16px;
    margin-left: 16px;
    img {
      width: 72px;
      height: 72px;
    }
    .customerInfo {
      position: absolute;
      bottom: 0;
      margin-bottom: 8px;
      width: 72px;
      height: 24px;
      background: rgba(0, 0, 0, 0.7);
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: -0.04em;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .restaurantName {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.04em;
    color: #9f9f9f;
  }
  .setName {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .price {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-top: 12px;
  }
`;

export const ChoiceProductSection = styled.section`
  padding-right: 16px;
  padding-left: 16px;
  .choiceProduct {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .choice {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .more {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: -0.04em;
    color: #9d9d9d;
    span {
      font-size: 20px;
      margin-left: 6px;
    }
  }
  .gifticonInfo {
    display: flex;
    margin-bottom: 24px;
    width: 100%;
    height: 104px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    align-items: center;
    position: relative;
  }
  img {
    width: 72px;
    height: 72px;
    margin-left: 16px;
    margin-right: 16px;
  }
  .setName {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-bottom: 2px;
  }
  .setMenu {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.04em;
    color: #9f9f9f;
  }
  .price {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-top: 12px;
  }
  .like {
    width: 32px;
    height: 32px;
    background: #737373;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 16px;
    margin-top: 16px;
  }
`;

export const BookmarkSection = styled.section`
  padding-left: 16px;
  .bookmarkRestaurant {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-bottom: 24px;
  }
  .RestaurantInfo {
    display: flex;
    width: 100%;
    margin-bottom: 32px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .Restaurant {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-right: 16px;
  }

  .thumbnailAndCancel {
    width: 80px;
    height: 80px;
    background-color: #d9d9d9;
    border-radius: 100px;
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    font-weight: bold;
    font-family: "Noto Sans KR";
  }
  button {
    width: 28px;
    height: 28px;
    background: #ffffff;
    border: 1px solid #a9a9a9;
    border-radius: 100%;
    margin-left: 56px;
  }
`;
export const BoundaryLine = styled.div`
  width: 100%;
  height: 12px;
  background: #f4f4f4;
  margin-bottom: 16px;
`;

export const OptionSection = styled.section`
  padding-left: 16px;
  padding-right: 30px;
  .options {
    display: grid;
    row-gap: 32px;
  }
  .option {
    display: flex;
    justify-content: space-between;
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    button {
      font-size: 20px;
    }
  }
`;
