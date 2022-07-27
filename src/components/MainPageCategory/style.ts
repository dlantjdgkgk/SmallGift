import styled from "styled-components";

export const MainPageCategoryWrapper = styled.div`
  margin: 60px 0 0 16px;
  .categorySearch {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .categories {
    display: flex;
    width: 100vw;
    margin-bottom: 60px;
    overflow: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    .FoodCategory {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-right: 16px;
      button {
        width: 80px;
        height: 80px;
        background-color: #d9d9d9;
        border-radius: 100px;
        margin-bottom: 8px;
      }
      p {
        font-size: 14px;
        font-weight: bold;
        font-family: "Noto Sans KR";
      }
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 12px;
  background-color: #f4f4f4;
  margin-bottom: 20px;
`;
