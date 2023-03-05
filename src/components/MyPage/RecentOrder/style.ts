import styled from "styled-components";

export const RecentOrderSection = styled.section`
  margin-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
  .recentOrderList {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
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

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
  }
  .search {
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;
