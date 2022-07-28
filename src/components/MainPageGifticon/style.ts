import styled from "styled-components";

export const SectionGifticonWrapper = styled.div`
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
    margin-bottom: 45px;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    .area {
      margin-right: 16px;
    }
    button {
      display: inline-block;
      height: 31px;
      border: 1px solid black;
      border-radius: 8px;
      padding: 6px;
      font-size: 14px;
      white-space: nowrap; // 줄 바꿈 자체를 막음
    }
  }
  .gifticonInformation {
    position: relative;
    .container {
      width: 100%;
      padding-right: 16px;
    }
    .addressInformation {
      width: 100%;
      height: 115px;
      background-color: #d9d9d9;
      margin-bottom: 16px;
      border-radius: 8px;
      .category {
        position: absolute;
        color: white;
        width: 46px;
        height: 24px;
        background-color: #5e5e5e;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0px;
        margin: 16px 0 0 24px;
      }

      .restaurantName {
        display: flex;
        margin-left: 24px;
        margin-top: 24px;
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
      }
    }
    .cafeInformation,
    .restaurantInformation {
      width: 100%;
      height: 41px;
      background-color: #d9d9d9;
      margin-bottom: 16px;
      border-radius: 8px;
      div {
        display: flex;
        margin-left: 24px;
      }
    }
    .restaurantInformation {
      margin-bottom: 56px;
    }
  }
`;
