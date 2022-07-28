import styled from "styled-components";

export const CategoryPageSectionWrapper = styled.div`
  margin: 32px 0 0 16px;
  select {
    width: 196px;
    border: none;
    border-bottom: 2px solid black;
    font-size: 18px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: -0.04em;
    padding-bottom: 4px;
  }
  p {
    margin-top: 7px;
    font-size: 16px;
    font-weight: 400;
  }
  .selectedCategory {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    .category {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
  button {
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(197, 197, 197, 0.26);
    border-radius: 58px;
    width: 58px;
    height: 31px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-right: 8px;
  }
  // 마지막 버튼 margin-right 16px 아직 안됐음.

  .restaurants {
    width: 100%;
    padding-right: 16px;
    margin-top: 48px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 16px;
  }
  .restaurant {
    width: 100%;
    border-bottom: 1px solid #eaeaea;
    display: flex;
  }
  .box {
    width: 80px;
    height: 80px;
    background: #d9d9d9;
    margin-bottom: 16px;
  }
  .restaurantInformation {
    margin-left: 22px;
    display: flex;
    flex-direction: column;
    button {
      width: 32px;
      height: 20px;
      background: #5e5e5e;
      border-radius: 2px;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      letter-spacing: -0.04em;
      color: #f4f4f4;
    }
    .restaurantName {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    .restaurantMenu {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #8f8f8f;
    }
  }
`;
