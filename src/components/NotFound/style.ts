import styled from "styled-components";

export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  img {
    width: 196px;
    height: 146px;
  }
  button {
    width: 100%;
    height: 44px;
    background: ${({ theme }) => theme.colors.$purple};
    border-radius: 4px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fonts.$sm};
    line-height: 23px;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.$white};
    margin-top: 107px;
  }
`;
