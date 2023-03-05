import styled from "styled-components";

export const RestaurantMenuArticle = styled.article`
  width: 100%;
  display: flex;
  padding-left: 24px;
  margin-bottom: 32px;
`;

export const MenuInfo = styled.div`
  padding-left: 16px;
  display: flex;
  flex-direction: column;
`;

export const MenuName = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
`;

export const MenuProduct = styled.p`
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 20px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$gray};
  margin-top: 4px;
`;

export const MenuPrice = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
  margin-top: 17px;
`;
