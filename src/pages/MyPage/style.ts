import styled from "styled-components";

export const MypageWrapper = styled.main``;

export const BoundaryLine = styled.div`
  width: 100%;
  height: 12px;
  background: #f4f4f4;
`;

export const OptionSection = styled.section`
  padding-left: 16px;
  padding-right: 30px;
  margin-top: 16px;
  .options {
    display: grid;
    row-gap: 32px;
  }
  .option {
    display: flex;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    button {
      font-size: 20px;
    }
  }
`;
