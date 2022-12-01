import * as Styled from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { apiInstance } from "../../../api/setting";

interface MyButtonProps {
  isSelected: boolean;
}

interface ILocalPopularGifticonProps {
  data: {
    category: string;
    image: string;
    shopName: string;
    shopId: number;
    address: string;
    shopInfoImage: string;
  };
}

const MyButton = styled.button<MyButtonProps>`
  background-color: ${(props): string => (props.isSelected ? "#6600CC" : "")};
  color: ${(props): string => (props.isSelected ? "#F4F4F4;" : "#5e5e5e")};
`;

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
    <Styled.SectionGifticonWrapper>
      <p className="gifticon">지역별 인기있는 기프티콘이에요</p>
      <section className="areas">
        {koreaAreas.map((area) => {
          const isSelected = selectArea === area;
          return (
            <MyButton
              type="button"
              aria-label="Click"
              key={area}
              onClick={(): void => {
                setSelectArea(area);
              }}
              isSelected={isSelected}
            >
              {area}
            </MyButton>
          );
        })}
      </section>

      <section className="gifticonInformation">
        {localPopularGifticons.map((popularGifticon) => {
          return (
            <Link
              to={`/category/${popularGifticon.data.category}/${popularGifticon.data.shopName}/${popularGifticon.data.shopId}`}
              key={popularGifticon.data.shopId}
            >
              <article className="addressInformation" aria-label="Click">
                <img src={popularGifticon.data.shopInfoImage} alt="가게 이미지" />
                <button className="category" type="button">
                  {popularGifticon.data.category}
                </button>
                <p className="restaurantName">{popularGifticon.data.shopName}</p>
                <p className="restaurantAddress">{popularGifticon.data.address}</p>
              </article>
            </Link>
          );
        })}
      </section>
    </Styled.SectionGifticonWrapper>
  );
};

export default MainPageGifticon;
