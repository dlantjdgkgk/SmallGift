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
      margin-right: 8px;
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
  }
`;
