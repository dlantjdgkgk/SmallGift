import * as Styled from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { apiInstance } from "../../../api/setting";
import { ILocalPopularGifticonProps } from "./types";

const MainPageGifticon = (): JSX.Element => {
  const koreaAreas = ["서울", "경기", "강원", "충북", "전북", "제주"];
  const [selectArea, setSelectArea] = useState("서울");
  const [localPopularGifticons, setLocalPopularGifticons] = useState<ILocalPopularGifticonProps[]>([]);

  const ShopInfoBestAPI = async (): Promise<void> => {
    const result = await apiInstance.get(`/api/user/shop/info/best?locate=${selectArea}`);
    setLocalPopularGifticons(result.data.data.topShopByLocate);
  };

  useEffect(() => {
    ShopInfoBestAPI();
  }, [selectArea]);

  return (
    <Styled.GifticonSectionWrapper>
      <Styled.GifticonTitle>지역별 인기있는 기프티콘이에요</Styled.GifticonTitle>
      <Styled.LocateSelectBtn>
        {koreaAreas.map((area) => {
          const isSelected = selectArea === area;
          return (
            <Styled.MyButton
              type="button"
              aria-label="Click"
              key={area}
              onClick={(): void => {
                setSelectArea(area);
              }}
              isSelected={isSelected}
            >
              {area}
            </Styled.MyButton>
          );
        })}
      </Styled.LocateSelectBtn>

      <Styled.GifticonSection>
        {localPopularGifticons.map((popularGifticon) => {
          return (
            <Link
              to={`/category/${popularGifticon.data.category}/${popularGifticon.data.shopName}/${popularGifticon.data.shopId}`}
              key={popularGifticon.data.shopId}
            >
              <Styled.GifticonArticle>
                <img src={popularGifticon.data.shopInfoImage} alt="가게 이미지" />
                <Styled.Category>{popularGifticon.data.category}</Styled.Category>
                <Styled.ShopName>{popularGifticon.data.shopName}</Styled.ShopName>
                <Styled.ShopAddress>{popularGifticon.data.address}</Styled.ShopAddress>
              </Styled.GifticonArticle>
            </Link>
          );
        })}
      </Styled.GifticonSection>
    </Styled.GifticonSectionWrapper>
  );
};

export default MainPageGifticon;
