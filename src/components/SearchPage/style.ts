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
      outline: none;
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
    padding: 12px 16px 0px 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    width: 100%;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    .record {
      display: flex;
      height: 31px;
      background: #ffffff;
      border: 1px solid #000000;
      box-shadow: 0px 2px 8px rgba(197, 197, 197, 0.26);
      border-radius: 58px;
      justify-content: center;
      align-items: center;
      margin-right: 8px;
      padding: 8px;
      white-space: nowrap;
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
    div:last-child {
      margin-right: 0px;
    }
  }

  .line {
    width: 100%;
    height: 8px;
    background: #f8f8f8;
    margin-top: 32px;
    margin-bottom: 16px;
  }
  .loginLine {
    width: 100%;
    height: 8px;
    background: #f8f8f8;
    margin-top: 20px;
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
    padding-left: 16px;
    padding-right: 16px;
    .searchList {
      display: flex;
      justify-content: space-between;
      margin-right: 27px;
      .rankAndMenuName {
        display: flex;
        column-gap: 16px;
        width: 100%;
        justify-content: flex-start;
        .rank {
          font-family: "Noto Sans KR";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.04em;
          color: #000000;
          width: 12px;
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
        width: 24px;
        align-items: center;
        column-gap: 4px;
        .risingRanking {
          font-family: "Noto Sans KR";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 17px;
          letter-spacing: -0.04em;
          color: #000000;
          margin-bottom: 1px;
        }
      }
    }
    .boundaryLine {
      border: 1px solid #e7e7e7;
    }
  }
`;