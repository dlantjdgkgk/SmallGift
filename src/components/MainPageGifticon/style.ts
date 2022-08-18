import styled from "styled-components";

export const SectionGifticonWrapper = styled.section`
  margin-left: 16px;
  overflow: hidden;
  .gifticon {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .areas {
    display: flex;
    width: 100%;
    overflow-x: auto;
    margin-bottom: 40px;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
      height: 31px;
      border: 1px solid gray;
      border-radius: 8px;
      padding: 8px;
      font-size: 14px;
      white-space: nowrap; // 줄 바꿈 자체를 막음
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.04em;
      color: #5e5e5e;
    }
  }

  .gifticonInformation {
    position: relative;
    width: 100%;
    padding-right: 16px;

    .addressInformation {
      width: 100%;
      height: 115px;
      background-color: #d9d9d9;
      margin-bottom: 16px;
      border-radius: 8px;
      .category {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        margin: 16px 0 4px 24px;
        width: 46px;
        height: 24px;
        top: 0px;
        background-color: #5e5e5e;
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: -0.04em;
        color: #f4f4f4;
      }

      .restaurantName {
        display: flex;
        margin-left: 24px;
        margin-top: 28px;
        font-size: 16px;
        font-weight: 700;
        line-height: 23px;
      }
      .restaurantAddress {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 19px;
        display: flex;
        margin-left: 24px;
        margin-top: 12px;
      }
    }
    .cafeInformation {
      width: 100%;
      height: 41px;
      background-color: #d9d9d9;
      margin-bottom: 16px;
      border-radius: 8px;
      p {
        display: flex;
        margin-left: 24px;
      }
    }
  }
`;
