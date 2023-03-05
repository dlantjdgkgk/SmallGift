import styled from "styled-components";

export const CancellationDetailWrapper = styled.main``;

export const ProductInfoSection = styled.section`
  margin-top: 16px;
  margin-left: 16px;
  .productInfo {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .orderNumberInfo {
    height: 33px;
    background: #f8f8f8;
    border-radius: 109px;
    margin-top: 12px;
    margin-bottom: 16px;
    padding: 0 10px;
  }
  .orderNumber {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #575757;
  }
  .number {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #949494;
    margin-left: 8px;
    margin-right: 21px;
  }
  .gifticonInfo {
    display: flex;
  }
  .thumbnail {
    margin-right: 16px;
    width: 72px;
    height: 72px;
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
    margin-bottom: 12px;
  }
  .price {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;

export const BoundaryLine = styled.div`
  width: 360px;
  height: 8px;
  background: #f4f4f4;
  margin-top: 24px;
`;

export const RefundInfoSection = styled.section`
  margin-top: 16px;
  margin-left: 16px;
  h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-bottom: 16px;
  }
  .refundInfo {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .totalPrice,
  .refundPrice,
  .refundMethod {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .totalMoney,
  .refundMoney {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #636363;
    margin-left: 32px;
  }
  .refundMoney {
    font-weight: 700;
    color: #6600cc;
  }
  .refundMethodInfo {
    display: flex;
    padding-right: 16px;
    align-items: center;
    label {
      width: 120px;
    }
    input {
      width: 100%;
      height: 40px;
      background: #f2f2f2;
      border-radius: 8px;
      padding-left: 16px;
    }
  }
`;
