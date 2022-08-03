import styled from "styled-components";

export const SearchPageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  .searchBar {
    width: 100%;
    height: 48px;
    background: #eeeeee;
    display: flex;
    align-items: center;
    div {
      width: 24px;
      height: 24px;
      background: red;
      margin-left: 16px;
      margin-right: 8px;
    }
    input {
      width: 100%;
    }
    input::placeholder {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #6f6f6f;
    }
    button {
      width: 20px;
      height: 20px;
      background: #d9d9d9;
      border-radius: 1000px;
      margin-right: 16px;
    }
  }

  .recentSearch {
    margin-top: 24px;
    margin-left: 16px;
    .recent {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
      margin-bottom: 10px;
    }
    .available {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #878787;
    }
  }

  .recentSearchLogin {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-left: 16px;
    margin-right: 16px;
    .recent {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    .totalDelete {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      text-decoration-line: underline;
      color: #6f6f6f;
    }
  }

  .records {
    display: flex;
    margin-top: 12px;
    margin-left: 16px;
    margin-right: 16px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scroll-snap-type: x mandatory;
    ::-webkit-scrollbar {
      display: none;
    }
    .record {
      display: flex;
      width: 100%;
      height: 31px;
      background: #ffffff;
      border: 1px solid #000000;
      box-shadow: 0px 2px 8px rgba(197, 197, 197, 0.26);
      border-radius: 58px;
      justify-content: center;
      align-items: center;
      max-width: fit-content;
      margin-right: 8px;
      padding: 8px;
      p {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
        margin-right: 4px;
      }
    }
  }

  .line {
    width: 100%;
    height: 8px;
    background: #f8f8f8;
    margin-top: 32px;
    margin-bottom: 16px;
  }
  .popularSearch {
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    .popular {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    .time {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #878787;
    }
  }
  .searchListWrapper {
    display: grid;
    row-gap: 10px;
    margin-left: 16px;
    margin-right: 24px;
    .searchList {
      display: flex;
      justify-content: space-between;
      .rankAndMenuName {
        display: flex;
        .rank {
          font-family: "Noto Sans KR";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.04em;
          color: #000000;
          margin-right: 16px;
        }
        .menuName {
          font-family: "Noto Sans KR";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.04em;
          color: #000000;
        }
      }
      .iconAndRank {
        display: flex;
        justify-content: center;
        align-items: center;
        .risingRanking {
          font-family: "Noto Sans KR";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 17px;
          letter-spacing: -0.04em;
          color: #000000;
          margin-left: 4px;
          margin-bottom: 1px;
        }
      }
    }
    .boundaryLine {
      border: 1px solid #e7e7e7;
    }
  }
`;
