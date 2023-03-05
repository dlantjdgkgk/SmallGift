import styled from "styled-components";

export const SectionRestaurantWrapper = styled.section`
  padding: 32px 0 0 16px;
  overflow: hidden;
`;

export const LocationWrapper = styled.div`
  margin-right: 16px;
`;

export const Location = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fonts.$lg};
    line-height: 29px;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.$black};
  }
  button {
    font-size: ${({ theme }) => theme.fonts.$xs};
    line-height: 20px;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.$gray};
  }
  img {
    margin-left: 4px;
  }
`;

export const LocateBtnWrapper = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$gray};
`;

export const AddressInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 27px;
`;

export const AddressInfo = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 8px;
  align-items: center;
  img {
    margin-right: 2px;
  }
`;

export const AddressTitle = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 20px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
  margin-right: 12px;
`;

export const Address = styled.p`
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 20px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$darkGray};
`;

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fonts.$sm};
    line-height: 29px;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.$black};
  }
`;

export const RestaurantSection = styled.section`
  display: flex;
  margin-bottom: 40px;
  position: relative;
  overflow-x: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RestaurantArticle = styled.article`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  button {
    position: absolute;
    color: ${({ theme }) => theme.colors.$whiteGray};
    width: 46px;
    height: 24px;
    background-color: black;
    font-size: ${({ theme }) => theme.fonts.$xxs};
    margin: 8px 0 0 8px;
    border-radius: 8px;
    text-align: center;
  }
  img {
    width: 124px;
    height: 124px;
  }
`;

export const RestaurantName = styled.p`
  font-size: ${({ theme }) => theme.fonts.$xxs};
  line-height: 17px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$gray};
  margin-top: 8px;
`;

export const MenuName = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 20px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
  height: 24px;
`;
export const MenuPrice = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
  margin-top: 22px;
`;
