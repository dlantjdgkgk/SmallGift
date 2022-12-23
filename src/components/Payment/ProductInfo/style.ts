import styled from "styled-components";

export const ProductInfoSection = styled.section`
  margin: 24px 0 32px 0;
  padding: 0 24px 0 16px;
`;

export const ProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$lg};
  line-height: 29px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  img {
    width: 82px;
    height: 82px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const SetMenuName = styled.p`
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
`;

export const SetMenu = styled.p`
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 20px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$gray};
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$lg};
  line-height: 29px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
  margin-top: 7px;
`;
