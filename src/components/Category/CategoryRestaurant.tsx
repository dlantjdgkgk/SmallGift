import { apiInstance } from "api/setting";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Styled from "./style";
import { ILocalPopularGifticonProps, IProps } from "./types";

const CategoryRestaurant = ({ selectCategory, selectLocate }: IProps): JSX.Element => {
  const [shopList, setShopList] = useState<ILocalPopularGifticonProps[]>([]);

  const ShopInfoAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(
        `/api/user/shop/info/all/locate/category?category=${selectCategory}&locate=${selectLocate}&page=1&pagePerCount=20`,
      );
      setShopList(result.data.data.shopAllByLocate);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  useEffect(() => {
    ShopInfoAPI();
  }, [selectCategory, selectLocate]);

  return (
    <Styled.CategoryRestaurantWrapper>
      {shopList.map((shop) => {
        return (
          <Link to={`/category/${shop.data.category}/${shop.data.shopName}/${shop.data.shopId}`} key={shop.data.shopId}>
            <Styled.RestaurantArticle>
              <img src={shop.data.shopThumbnailImage} alt="가게 이미지" />
              <Styled.RestaurantInfo>
                <Styled.Category>{shop.data.category}</Styled.Category>
                <Styled.RestaurantName>{shop.data.shopName}</Styled.RestaurantName>
                <Styled.RestaurantMenu>{shop.data.mainMenu}</Styled.RestaurantMenu>
              </Styled.RestaurantInfo>
            </Styled.RestaurantArticle>
          </Link>
        );
      })}
    </Styled.CategoryRestaurantWrapper>
  );
};

export default CategoryRestaurant;
