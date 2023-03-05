import styled from "styled-components";

export const RestaurantSectionWrapper = styled.section`
  position: relative;
`;

export const ShadowImg = styled.img`
  position: absolute;
  width: 100%;
  display: block;
  max-height: 216px;
`;

export const RestaurantImg = styled.img`
  width: 100%;
  display: block;
  max-height: 216px;
`;

export const RestaurantInfo = styled.div`
  padding-left: 24px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 36px;
    height: 23px;
    margin-bottom: 64px;
    border-radius: 2px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fonts.$xs};
    line-height: 19px;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.$white};
    background: ${({ theme }) => theme.colors.$purple};
    border-radius: 2px;
  }
`;
export const RestaurantName = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$xxl};
  line-height: 35px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$white};
  margin-bottom: 24px;
`;
