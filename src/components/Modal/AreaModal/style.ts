import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
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
  border-radius: 16px 16px 0px 0px;
  padding-right: 16px;
  padding-left: 16px;
  position: absolute;
  bottom: 0;
  background: ${({ theme }) => theme.colors.$white};
  box-shadow: 0px -8px 16px rgba(184, 184, 184, 0.25);
  div {
    margin-bottom: 115px;
    width: 100%;
    height: 40px;
    background: #eeeeee;
    display: flex;
    align-items: center;
  }
  img {
    width: 24px;
    height: 24px;
    margin: 0 2px 0 8px;
  }
  span {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fonts.$xs};
    line-height: 20px;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.$black};
    margin-right: 12px;
  }
`;

export const LocateSelection = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.$lg};
  line-height: 29px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
  margin-top: 54px;
  margin-bottom: 16px;
`;

export const Address = styled.button`
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 20px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$darkGray};
`;

export const afterSelection = styled.button`
  width: 100%;
  height: 44px;
  border: 1px solid #000000;
  border-radius: 4px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$white};
  background: ${({ theme }) => theme.colors.$purple};
  z-index: 5;
`;

export const beforeSelection = styled.button`
  width: 100%;
  height: 44px;
  border: 1px solid #cacaca;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.04em;
`;

export const PostalCode = styled.button`
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 20px;
  letter-spacing: -0.04em;
`;
