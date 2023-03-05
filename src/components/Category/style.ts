import styled from "styled-components";

export const CategoryPageSectionWrapper = styled.section`
  margin-left: 16px;
  select {
    width: 130px;
    border: none;
    border-bottom: 2px solid black;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fonts.$lg};
    line-height: 29px;
    letter-spacing: -0.04em;
    padding-bottom: 4px;
    outline: none;
  }
  p {
    margin-top: 7px;
    font-size: ${({ theme }) => theme.fonts.$lg};
    line-height: 29px;
    letter-spacing: -0.04em;
  }
`;

export const SelectedCategoryWrapper = styled.section`
  display: flex;
  margin: 25px 0 0 16px;
  overflow-x: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  div:last-child {
    margin-right: 8px;
  }
  button {
    background: ${({ theme }) => theme.colors.$white};
    box-shadow: 0px 2px 8px rgba(197, 197, 197, 0.26);
    border-radius: 58px;
    width: 58px;
    height: 31px;
    font-size: ${({ theme }) => theme.fonts.$xs};
    line-height: 20px;
    margin-right: 8px;
  }
`;

export const BoundaryLine = styled.div`
  width: 100%;
  height: 12px;
  background: ${({ theme }) => theme.colors.$whiteGray};
  margin: 16px 0 0 0;
`;

export const CategoryRestaurantWrapper = styled.section`
  padding-left: 16px;
  width: 100%;
  padding-right: 16px;
  margin-top: 24px;
  display: grid;
  grid-row-gap: 16px;
  a {
    width: 100%;
    border-bottom: 1px solid #eaeaea;
  }
  & > a:last-of-type {
    border: none;
  }
  img {
    width: 80px;
    height: 80px;
    margin-bottom: 16px;
  }
`;

export const RestaurantArticle = styled.article`
  display: flex;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  padding-left: 16px;
  flex-direction: column;
`;

export const Category = styled.button`
  width: 36px;
  height: 23px;
  background: ${({ theme }) => theme.colors.$purple};
  border-radius: 2px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 19px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$white};
  margin-bottom: 4px;
`;

export const RestaurantName = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.$sm};
  line-height: 23px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
`;

export const RestaurantMenu = styled.p`
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 20px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$gray};
  margin-top: 8px;
`;
