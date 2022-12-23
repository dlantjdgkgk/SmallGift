import styled from "styled-components";

export const GifticonSectionWrapper = styled.section`
  padding: 0 16px;
  overflow: hidden;
`;

export const GifticonTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.$lg};
  font-weight: bold;
  margin-bottom: 16px;
`;

export const LocateSelectBtn = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  margin-bottom: 40px;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

interface MyButtonProps {
  isSelected: boolean;
}

export const MyButton = styled.button<MyButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  height: 31px;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 8px;
  font-size: ${({ theme }) => theme.fonts.$xs};
  white-space: nowrap;
  line-height: 20px;
  letter-spacing: -0.04em;
  background-color: ${(props): string => (props.isSelected ? "#6600CC" : "")};
  color: ${(props): string => (props.isSelected ? "#F4F4F4;" : "#5e5e5e")};
`;

export const GifticonSection = styled.section`
  img {
    width: 100%;
  }
`;

export const GifticonArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 0px 0px 8px 8px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const Category = styled.button`
  margin: 16px 0 4px 16px;
  width: 46px;
  height: 24px;
  border: 1px solid #6600cc;
  border-radius: 4px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.$xxs};
  line-height: 17px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$purple};
`;

export const ShopName = styled.p`
  margin: 5px 0 0 16px;
  font-size: ${({ theme }) => theme.fonts.$sm};
  font-weight: 700;
  line-height: 23px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
`;

export const ShopAddress = styled.p`
  font-size: ${({ theme }) => theme.fonts.$xs};
  line-height: 19px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.$black};
  margin: 5px 0px 16px 16px;
`;
