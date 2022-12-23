import styled from "styled-components";

export const SendMsg = styled.div`
  display: flex;
  justify-content: center;
  margin: 110px 0 46px 0;
  img {
    width: 18px;
    height: 18px;
  }
  button {
    font-size: ${({ theme }) => theme.fonts.$xs};
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.04em;
    text-decoration-line: underline;
    color: #7b7b7b;
    margin-left: 8px;
  }
`;
