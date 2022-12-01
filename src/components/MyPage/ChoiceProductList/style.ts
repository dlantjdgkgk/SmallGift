import styled from "styled-components";

export const ChoiceProductListWrapper = styled.main`
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
    font-size: 16px;
    line-height: 23px;
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

export const ChoiceProductListSection = styled.section`
  .gifticonInfo {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    width: 100%;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    align-items: center;
    position: relative;
    padding: 16px;
  }

  .keyword {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #bebebe;
    margin-bottom: 16px;
  }
  .locate {
    display: flex;
    width: 100%;
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
    margin-right: 20px;
    margin-top: 16px;
  }
  .order {
    width: 100%;
    height: 44px;
    background: #ffffff;
    border: 1px solid #6600cc;
    border-radius: 8px;
    margin-top: 16px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.04em;
    color: #6600cc;
  }
  a {
    width: 100%;
  }
`;

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  img {
    margin: 0px 0 20px 0;
    width: 32px;
    height: 32px;
  }
  .search {
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-bottom: 120px;
  }
`;
