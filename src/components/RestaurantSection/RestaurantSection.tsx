import * as Styled from "./style";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Shadow from "../../assets/img/shadow.png";
import RestaurantInfo from "../../assets/img/RestaurantInfo.png";

interface ShopType {
  category: string;
  restaurantName: string;
  restaurantMenu: string;
}

interface PropsType {
  shop: ShopType;
}

const RestaurantSection = (): JSX.Element => {
  const [like, setLike] = useState(false);
  const location = useLocation();
  const result = location.state as PropsType;
  const shop: ShopType = result?.shop;

  return (
    <Styled.RestaurantSectionWrapper>
      <img src={Shadow} alt="" className="shadow" />
      <img src={RestaurantInfo} alt="" className="picture" />
      <div className="resturantThumbnail">
        <button className="category" type="button">
          {shop.category}
        </button>
        <div className="restaurantLike">
          <div className="restaurantName">{shop.restaurantName}</div>
        </div>
      </div>
    </Styled.RestaurantSectionWrapper>
  );
};
export default RestaurantSection;
