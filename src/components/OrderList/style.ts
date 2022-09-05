import styled from "styled-components";

export const OrderListWrapper = styled.main`
  margin-top: 24px;
  display: grid;
  row-gap: 24px;
  section:last-child {
    border: none;
  }
`;

export const OrderSection = styled.section`
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 8px solid #f4f4f4;
  .date {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-bottom: 16px;
  }
  .gifticonInfo {
    display: flex;
    margin-bottom: 16px;
  }
  .thumbnail {
    position: relative;
    margin-right: 16px;
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
  .optionButton {
    margin-bottom: 24px;
    display: flex;
  }
  button {
    width: 50%;
    height: 44px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    border-radius: 8px;
    background: #ffffff;
  }
  .cancel {
    margin-right: 12px;
    border: 1px solid #cccccc;
    color: #494949;
  }
  .purchase {
    border: 1px solid #6600cc;
    color: #6600cc;
  }
`;
