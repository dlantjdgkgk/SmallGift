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
    padding-right: 16px;
    img {
      width: 100%;
      max-height: 114px;
    }
    .addressInformation {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 230px;
      border: 1px solid #e8e8e8;
      border-radius: 0px 0px 8px 8px;
      margin-bottom: 16px;
      border-radius: 8px;
      .category {
        margin: 16px 0 4px 16px;
        width: 46px;
        height: 24px;
        border: 1px solid #6600cc;
        border-radius: 4px;
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: -0.04em;
        color: #6600cc;
      }
      .restaurantName {
        margin-top: 5px;
        margin-left: 16px;
        font-size: 16px;
        font-weight: 700;
        line-height: 23px;
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: -0.04em;
        color: #000000;
      }
      .restaurantAddress {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 19px;
        letter-spacing: -0.04em;
        color: #000000;
        margin-top: 5px;
        margin-left: 16px;
      }
    }
  }
`;
