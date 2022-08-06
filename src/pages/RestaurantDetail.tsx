import * as Styled from "./style";
import RestaurantNav from "components/RestaurantNav/RestaurantNav";
import RestaurantBestMenu from "components/RestaurantBestMenu/RestaurantBestMenu";
import RestaurantInfo from "components/RestaurantInfo/RestaurantInfo";

const RestaurantDetail = () => {
  return (
    <Styled.CategoryRestaurantWrapper>
      <RestaurantNav />
      <RestaurantBestMenu />
      <div className="line" />
      <RestaurantInfo />
    </Styled.CategoryRestaurantWrapper>
  );
};

export default RestaurantDetail;
