import styled from "styled-components";

export const RestaurantDetailInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 24px;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
`;

export const AddressTitle = styled.p``;

export const Info = styled.p`
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$middleGray};
  padding-left: 34px;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
  padding-left: 10px;
`;

export const OperatingHoursInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 24px;
  padding-bottom: 24px;
`;

export const OperatingHours = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

export const phoneNumberInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 100px 0;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
`;
