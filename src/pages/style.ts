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
  margin: 32px 0 0 0px;
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

export const MypageWrapper = styled.main``;

export const Welcome = styled.section`
  margin: 38px 0px 45px 16px;
  h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  span {
    font-weight: 700;
  }
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
    justify-content: space-between;
    width: 100%;
    background: #f2f2f2;
    border-radius: 8px;
    height: 42px;
    margin-top: 12px;
    .imgAndEmail {
      display: flex;
      align-items: center;
    }
  }
  img {
    width: 24px;
    height: 24px;
    margin-left: 16px;
  }
  .email {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-left: 16px;
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
    margin-right: 20px;
  }
`;

export const MemberInfoSection = styled.section`
  margin: 40px 16px 0 16px;
  .memberInfo {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    h1 {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    span {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      letter-spacing: -0.04em;
      color: #9d9d9d;
      margin-right: 14px;
    }
  }
  .name,
  .email,
  .phone,
  .account {
    display: flex;
    margin-bottom: 6px;
    label {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #8f8f8f;
      width: 64px;
    }
    span {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #000000;
    }
  }
  .account {
    margin-bottom: 34px;
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
    letter-spacing: -0.04em;
    color: #9d9d9d;
    display: flex;
    align-items: center;
    span {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      letter-spacing: -0.04em;
      color: #9d9d9d;
      margin-right: 14px;
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
    margin-bottom: 10px;
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
    display: flex;
    align-items: center;
    letter-spacing: -0.04em;
    color: #9d9d9d;
    span {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      letter-spacing: -0.04em;
      color: #9d9d9d;
      margin-right: 14px;
    }
  }
  .gifticonInfo {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    width: 100%;
    height: 153px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    align-items: center;
    position: relative;
  }

  .locate {
    display: flex;
    width: 100%;
    margin-left: 16px;
    margin-top: 16px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 2px;
      margin-bottom: 13px;
    }
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: -0.04em;
      color: #9f9f9f;
    }
  }

  .menuInfo {
    display: flex;
    width: 100%;
  }
  .thumbnail {
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
    width: 24px;
    height: 24px;
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
`;

export const OptionSection = styled.section`
  padding-left: 16px;
  padding-right: 30px;
  margin-top: 16px;
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

export const BuyInfoWrapper = styled.main`
  .errorMessage {
    width: 100%;
    color: white;
    border-radius: 5px;
    background: #6600cc;
    padding: 8px;
    margin-bottom: 16px;
  }
`;

export const SenderInfoSection = styled.section`
  margin: 16px 0 0 0;
  padding-left: 16px;
  .senderInfo {
    padding-right: 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;

export const FormSender = styled.section`
  padding-right: 16px;
  .checkInfo {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    input {
      width: 20px;
      height: 20px;
      background: #6600cc;
      border: 1px solid #3b0076;
      border-radius: 4px;
      margin-right: 8px;
    }
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #636363;
    }
  }
  .nickName,
  .phone,
  .emailInfo {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    label {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      white-space: nowrap;
      width: 80px;
    }
    input {
      width: 100%;
      height: 40px;
      background: #f2f2f2;
      border-radius: 8px;
      margin-left: 12px;
      padding-left: 12px;
      border: 1px solid #b6b6b6;
    }
    input::placeholder {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #636363;
    }
  }
`;

export const ReceiverInfoSection = styled.section`
  margin: 16px 0 0 0;
  padding-left: 16px;
  .receiveInfo {
    padding-right: 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;

export const FormReceiver = styled.section`
  padding-right: 4px;
  .checkInfo {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    input {
      width: 20px;
      height: 20px;
      border: 1px solid #000000;
      border-radius: 4px;
      margin-right: 8px;
    }
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #636363;
    }
  }
  .transmissionWay {
    display: flex;
  }
  .transmission {
    height: 48px;
    background: #ffffff;
    border: 1px solid #c8c8c8;
    border-radius: 8px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    img {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      margin-right: 12px;
    }
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
  }

  .phone {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    margin-top: 24px;
    padding-right: 12px;
    label {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      white-space: nowrap;
      width: 80px;
    }
    input {
      width: 100%;
      height: 40px;
      background: #f2f2f2;
      border-radius: 8px;
      margin-left: 12px;
      padding-left: 12px;
    }
    input::placeholder {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #636363;
    }
  }
`;

export const PaymentMethodSection = styled.section`
  .payment {
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 32px;
    margin-top: 64px;
  }
  button {
    width: 100%;
    height: 44px;
    background: #6600cc;
    border-radius: 4px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #ffffff;
  }
`;

export const Oauths = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;

  a {
    box-sizing: border-box;
    height: 50px;
    transition: opacity 0.5s ease-in;
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    :hover {
      opacity: 0.6;
    }
  }
  a + a {
    margin-left: 10px;
  }
`;

export const OauthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;

  .isError {
    width: 500px;
    height: 300px;
    background-color: red;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    font-size: 20px;
    align-items: center;
    strong {
      color: #fee500;
      font-size: 25px;
      font-weight: 600;
    }
    .naver {
      color: rgb(12, 166, 120);
    }
  }
`;

export const LoaderWrap = styled.div`
  padding-top: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
