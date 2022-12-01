import styled from "styled-components";

export const ProductInfoSection = styled.section`
  margin: 24px 0 32px 0;
  padding-left: 16px;
  padding-right: 24px;
  .productInfo {
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

  .gifticonInformation {
    width: 100%;
    display: flex;
  }
  .menuImage {
    width: 82px;
    height: 82px;
  }
  .setMenuInfo {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
  }

  .setMenuName {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
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
    color: #b8b8b8;
  }
  .price {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-top: 7px;
  }
`;
