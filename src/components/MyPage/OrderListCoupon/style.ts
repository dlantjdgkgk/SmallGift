import styled from "styled-components";

export const OrderListCouponWrapper = styled.main`
  margin-top: 24px;
  padding: 0 15px;
  img {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 300px;
    object-fit: contain;
  }
`;
export const ProductInfoSection = styled.section`
  margin-top: 16px;
  .productInfo {
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
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #575757;
  }
  .number {
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

  .restaurantName {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.04em;
    color: #9f9f9f;
  }
  .setName {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-bottom: 12px;
  }
  .price {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;
