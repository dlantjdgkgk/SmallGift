import { apiInstance } from "api/setting";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Styled from "./style";

interface ILocalPopularGifticonProps {
  data: {
    category: string;
    image: string;
    shopName: string;
    shopId: number;
    productContent: string;
    shopThumbnailImage: string;
  };
}

interface IProps {
  selectCategory: string;
  selectLocate: string;
}

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

  console.log(shopList);

  useEffect(() => {
    ShopInfoAPI();
  }, [selectCategory, selectLocate]);

  return (
    <Styled.CategoryRestaurantWrapper>
      <div className="restaurants">
        {shopList.map((shop) => {
          return (
            <Link
              to={`/category/${shop.data.category}/${shop.data.shopName}/${shop.data.shopId}`}
              key={shop.data.shopId}
            >
              <article className="restaurant">
                <img src={shop.data.shopThumbnailImage} alt="가게 이미지" />
                <div className="restaurantInformation">
                  <button className="category" type="button">
                    {shop.data.category}
                  </button>
                  <p className="restaurantName">{shop.data.shopName}</p>
                  <p className="restaurantMenu">{shop.data.productContent}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </Styled.CategoryRestaurantWrapper>
  );
};

export default CategoryRestaurant;
