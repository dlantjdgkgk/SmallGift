import styled from "styled-components";

export const CancellationWrapper = styled.main`
  section:last-child {
    border: none;
  }
`;

export const CancellationSection = styled.section`
  padding-left: 16px;
  border-bottom: 8px solid #f4f4f4;
  .orderNumberInfo {
    height: 33px;
    background: #f8f8f8;
    border-radius: 109px;
    margin-top: 16px;
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
    margin-bottom: 18px;
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
  .cancelStatus {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
      width: 14px;
      height: 14px;
    }
  }
  .statusInfo {
    margin-left: 6px;
    span {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #575757;
    }
    .loading {
      color: gray;
    }
  }
`;
