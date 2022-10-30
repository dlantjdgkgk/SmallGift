import styled from "styled-components";

export const CategoryPageSectionWrapper = styled.section`
  margin-left: 16px;
  select {
    width: 196px;
    border: none;
    border-bottom: 2px solid black;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    padding-bottom: 4px;
    outline: none;
  }
  p {
    margin-top: 7px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
  }
`;

export const SelectedCategoryWrapper = styled.section`
  display: flex;
  margin-left: 16px;
  overflow-x: auto;
  -ms-overflow-style: none;
  margin-top: 25px;
  ::-webkit-scrollbar {
    display: none;
  }
  div:last-child {
    margin-right: 8px;
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
`;

export const BoundaryLine = styled.div`
  width: 100%;
  height: 12px;
  background: #f4f4f4;
  margin-top: 16px;
  margin-left: 0px;
`;

export const CategoryRestaurantWrapper = styled.section`
  margin-left: 16px;
  .restaurants {
    width: 100%;
    padding-right: 16px;
    margin-top: 24px;
    display: grid;
    grid-row-gap: 16px;
    a {
      width: 100%;
      border-bottom: 1px solid #eaeaea;
      .restaurant {
        display: flex;
      }
    }

    & > a:last-of-type {
      border: none;
    }
  }

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 16px;
  }
  .restaurantInformation {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    .category {
      width: 36px;
      height: 23px;
      background: #6600cc;
      border-radius: 2px;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      letter-spacing: -0.04em;
      color: #ffffff;
      margin-bottom: 4px;
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
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #8f8f8f;
      margin-top: 8px;
    }
  }
  .top {
    position: fixed;
    bottom: 36px;
    right: 6px;
  }
`;
