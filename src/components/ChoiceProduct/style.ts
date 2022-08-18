import styled from "styled-components";

export const ChoiceProductWrapper = styled.main`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 20px;
`;

export const ProductFilterSection = styled.section`
  .filter {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  select {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .delete {
    background: #ececec;
    border-radius: 70px;
    height: 29px;
    width: 77px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #8b8b8b;
  }
`;

export const ChoiceProductSection = styled.section`
  .gifticonInfo {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 166px;
    margin-bottom: 16px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    .InfoAndBtn {
      display: flex;
    }
  }
  img {
    width: 72px;
    height: 72px;
    margin-right: 16px;
  }
  .setInfo {
    display: flex;
    flex-direction: column;
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
    margin-top: 16px;
    margin-right: 16px;
  }
  .order {
    width: 100%;
    height: 44px;
    background: #f2f2f2;
    border: 1px solid #000000;
    border-radius: 8px;
    margin-top: 16px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;
