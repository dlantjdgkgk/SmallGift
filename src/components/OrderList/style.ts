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
    height: 44px;
    background: #f2f2f2;
    border: 1px solid #000000;
    border-radius: 8px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #000000;
    width: 50%;
  }
  .cancel {
    margin-right: 12px;
  }
`;
