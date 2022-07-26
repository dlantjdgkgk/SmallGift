import styled from "styled-components";

export const FooterWrapper = styled.div`
  min-width: 360px;
  width: 100vw;
  background-color: #e2e2e2;
  display: flex;
  flex-direction: column;
  padding: 5px;
  .information,
  .smallgiftInformation {
    display: flex;
    flex-direction: column;
    font-weight: 300;
    font-size: 11px;
    color: #575757;
  }
  .smallgift {
    font-size: 16px;
    font-weight: 700;
  }
`;
