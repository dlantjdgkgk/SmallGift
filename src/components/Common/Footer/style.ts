import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #e2e2e2;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  padding: 12px 0 0 8px;
`;

export const Info = styled.div`
  display: flex;
  font-weight: 300;
  gap: 6px;
  font-size: ${({ theme }) => theme.fonts.$xxs};
  color: #575757;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fonts.$xxs};
  font-weight: 700;
  margin-bottom: 12px;
`;
