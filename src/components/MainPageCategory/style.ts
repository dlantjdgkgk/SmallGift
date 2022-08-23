import styled from "styled-components";

export const MainPageCategoryWrapper = styled.section`
  margin: 48px 0 0 16px;
  .categorySearch {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .categories {
    display: flex;
    width: 100%;
    margin-bottom: 40px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    .foodCategory {
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
        margin-top: 8px;
      }
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 12px;
  background-color: #f4f4f4;
`;
