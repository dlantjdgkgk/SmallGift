import styled from "styled-components";

export const DropDownItem = styled.div`
  padding: 20px 8px 8px 16px;
  margin-left: 16px;
  margin-right: 16px;
  border-bottom: 1px solid #e7e7e7;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.04em;
  color: #000000;
  span {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;

export const SearchPageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding-right: 16px;
  .searchBar {
    width: 100%;
    height: 48px;
    background: #eeeeee;
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin-top: 4px;
    .back {
      width: 56px;
      height: 48px;
      padding-right: 16px;
      background-color: white;
      padding-left: 16px;
    }
    .cancel {
      padding-right: 12px;
    }
    input {
      width: 100%;
      outline: none;
      padding-left: 16px;
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
  }

  .recomendation {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-left: 16px;
    margin-top: 32px;
    margin-bottom: 5px;
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
    padding: 12px 0px 0px 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    width: 100%;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    a {
      margin-right: 8px;
    }
    .record {
      display: flex;
      height: 31px;
      background: #ffffff;
      border: 1px solid #ececec;
      box-shadow: 0px 2px 8px rgba(197, 197, 197, 0.26);
      border-radius: 58px;
      justify-content: center;
      align-items: center;
      padding: 8px;
      white-space: nowrap;
      p {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
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
    margin-bottom: 24px;
  }
  .loginLine {
    width: 100%;
    height: 8px;
    background: #f8f8f8;
    margin-top: 20px;
    margin-bottom: 24px;
  }
`;

export const PopularSearchWrapper = styled.section`
  .popularSearch {
    margin-left: 16px;
    margin-bottom: 24px;
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
`;

export const SearchListWrapper = styled.section`
  .searchList {
    display: grid;
    row-gap: 10px;
    padding-left: 16px;
    .search {
      display: flex;
      justify-content: space-between;
      margin-right: 27px;
      .rankAndMenuName {
        display: flex;
        column-gap: 14px;
        width: 100%;
        .rank {
          font-family: "Noto Sans KR";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.04em;
          color: #6600cc;
          width: 12px;
          margin-left: 6px;
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
