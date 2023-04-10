import styled from "styled-components";

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
  }
  .search {
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.04em;
    color: #000000;
  }
`;

export const ChoiceProductSection = styled.section`
  padding-right: 16px;
  padding-left: 16px;
  .choiceProduct {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .choice {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .more {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: -0.04em;
    color: #9d9d9d;
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      letter-spacing: -0.04em;
      color: #9d9d9d;
      margin-right: 14px;
    }
  }
  .gifticonInfo {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    width: 100%;
    height: 153px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    align-items: center;
    position: relative;
  }

  .locate {
    display: flex;
    width: 100%;
    margin-left: 16px;
    margin-top: 16px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 2px;
      margin-bottom: 13px;
    }
    p {
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
    margin-left: 16px;
    margin-right: 16px;
  }
  .setName {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-bottom: 2px;
  }
  .setMenu {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.04em;
    color: #9f9f9f;
  }
  .price {
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
    margin-right: 16px;
    margin-top: 16px;
  }
`;
