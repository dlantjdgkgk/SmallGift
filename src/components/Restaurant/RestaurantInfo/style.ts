import styled from "styled-components";

export const RestaurantInfoWrapper = styled.section``;

export const SelectBtn = styled.div`
  display: flex;
  margin-bottom: 32px;
  button {
    width: 50%;
    p {
      font-size: ${({ theme }) => theme.fonts.$sm};
      line-height: 23px;
      text-align: center;
      letter-spacing: -0.04em;
      margin-bottom: 10px;
    }
  }
`;

export const RestaurantMenuSection = styled.div`
  margin: 0 0 100px 0px;
  img {
    width: 92px;
    height: 92px;
  }
`;

export const RestaurantMenuArticle = styled.article`
  width: 100%;
  display: flex;
  margin-bottom: 24px;
`;
