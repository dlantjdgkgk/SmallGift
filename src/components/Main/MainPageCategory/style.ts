import styled from "styled-components";

export const MainPageCategoryWrapper = styled.section`
  padding: 32px 0 0 16px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.$lg};
  font-weight: 500;
  margin-bottom: 16px;
`;

export const CategorySection = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryArticle = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 16px;
  p {
    font-size: ${({ theme }) => theme.fonts.$xs};
    line-height: 20px;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.$gray};
    margin-top: 8px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.$whiteGray};
`;
