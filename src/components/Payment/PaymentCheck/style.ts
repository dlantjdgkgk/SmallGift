import styled from "styled-components";

export const PaymentCheckSection = styled.section``;

export const Gift = styled.p`
  font-size: 32px;
  text-align: center;
  margin: 167px 0 24px 0;
`;

export const SendGift = styled.p`
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$gray};
  margin-bottom: 16px;
`;

export const confirmPay = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$xxl};
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
`;

export const orderListAndConfirm = styled.div`
  display: flex;
  padding: 0 32px;
  gap: 16px;
`;

export const OrderListBtn = styled.button`
  width: 72%;
  height: 44px;
  background: ${({ theme }) => theme.colors.$purple};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$white};
`;

export const ConfirmBtn = styled(OrderListBtn)`
  width: 28%;
  border: 1px solid #cccccc;
  color: ${({ theme }) => theme.colors.$black};
  background: ${({ theme }) => theme.colors.$white};
`;
