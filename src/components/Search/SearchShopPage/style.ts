import styled from "styled-components";

export const RecommendActionWrapper = styled.section<{ show: boolean }>`
  position: absolute;
  top: 60px;
  max-width: 752px;
  width: 100%;
  height: 100%;
  display: ${({ show }) => (show ? "block" : "none")};
  z-index: 999;
  > div.background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  > div:not(.background) {
    position: absolute;
    z-index: 999;
    width: inherit;
    max-width: 752px;
    background-color: white;
    border-radius: 0 0 10px 10px;
  }
`;

export const DropDownItem = styled.div`
  padding: 20px 8px 8px 16px;
  margin: 0 16px;
  border-bottom: 1px solid #e7e7e7;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.04em;
  color: #000000;

  span {
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
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #6f6f6f;
    }
  }

  .recomendation {
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
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
      margin-bottom: 10px;
    }
    .available {
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
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    .totalDelete {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      text-decoration-line: underline;
      color: #6f6f6f;
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
    display: flex;
    justify-content: space-between;
    .popular {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    .time {
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

export const SearchTitle = styled.div`
  margin: 24px 0px 40px 16px;
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .no {
    margin: 210px 0 20px 0;
    width: 32px;
    height: 32px;
  }
  .search {
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-bottom: 120px;
  }
  .keyword {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #bebebe;
    margin-bottom: 16px;
  }

  .records {
    display: flex;
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
      margin-right: 8px;
      padding: 8px;
      white-space: nowrap;
      p {
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

  .searchTitle {
    .shopInfo {
      font-weight: 700;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.04em;
      color: #000000;
      margin-right: 6px;
    }
    .length {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.04em;
      color: #6600cc;
    }
    .extra {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.04em;
      color: #000000;
    }
  }
`;

export const ShopInfoWrapper = styled.section`
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
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      letter-spacing: -0.04em;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .restaurantName {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    .restaurantMenu {
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
