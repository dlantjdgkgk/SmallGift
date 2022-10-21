import * as Styled from "./style";
import RestaurantNav from "components/RestaurantSection/RestaurantSection";
import RestaurantBestMenu from "components/RestaurantBestMenu/RestaurantBestMenu";
import RestaurantInfo from "components/RestaurantInfo/RestaurantInfo";

const CategoryDetail = (): JSX.Element => {
  return (
    <Styled.CategoryRestaurantWrapper>
      <RestaurantNav />
      <RestaurantBestMenu />
      <div className="line" />
      <RestaurantInfo />
    </Styled.CategoryRestaurantWrapper>
  );
};

export default CategoryDetail;
