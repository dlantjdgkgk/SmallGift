import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  max-width: 768px;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 323px;
  background-color: ${({ theme }) => theme.colors.$white};
  border-radius: 16px 16px 0px 0px;
  padding: 32px 32px 0 32px;
  position: absolute;
  bottom: 0;
`;

export const ProductName = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$xxl};
  line-height: 35px;
  letter-spacing: -0.04em;
  color: #000000;
`;

export const ProductContent = styled.p`
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$gray};
  margin-top: 8px;
`;

export const OnePerson = styled.p`
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 20px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$gray};
  margin-top: 72px;
`;

export const PriceAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px 0 24px 0;
  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fonts.$xxl};
    line-height: 35px;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.$purple};
  }
`;

export const ShareBtn = styled.button`
  margin-right: 8px;
`;

export const GiftBtn = styled.button`
  width: 100%;
  height: 44px;
  background: ${({ theme }) => theme.colors.$purple};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$white};
`;
