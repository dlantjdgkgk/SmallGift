import styled from "styled-components";

export const BestMenuWrapper = styled.section`
  .slick-dots {
    bottom: -10px;
  }
  img {
    width: 92px;
    height: 92px;
  }
`;

export const BestMenu = styled.p`
  margin: 24px 0 16px 24px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$lg};
  line-height: 29px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
`;
