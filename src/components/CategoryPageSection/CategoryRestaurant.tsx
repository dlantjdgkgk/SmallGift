import { Link } from "react-router-dom";
import * as Styled from "./style";
import CafeImage from "../../assets/img/CafeImage.png";

interface MyProps {
  shopList: Record<string, string>[];
  selectCategory: string;
}

const CategoryRestaurant = ({ shopList, selectCategory }: MyProps): JSX.Element => {
  return (
    <Styled.CategoryRestaurantWrapper>
      <div className="restaurants">
        {(selectCategory === "전체" ? shopList : shopList.filter((shop) => shop.category === selectCategory)).map(
          (shop, index) => {
            return (
              <Link to={`/category/${shop.restaurantName}`} key={index} state={{ shop }}>
                <article className="restaurant">
                  <img src={CafeImage} />
                  <div className="restaurantInformation">
                    <button className="category" type="button">
                      {shop.category}
                    </button>
                    <p className="restaurantName">{shop.restaurantName}</p>
                    <p className="restaurantMenu">{shop.restaurantMenu}</p>
                  </div>
                </article>
              </Link>
            );
          },
        )}
      </div>
    </Styled.CategoryRestaurantWrapper>
  );
};

export default CategoryRestaurant;
