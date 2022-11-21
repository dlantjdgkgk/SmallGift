import * as Styled from "./style";
import RestaurantSection from "components/RestaurantSection/RestaurantSection";
import RestaurantBestMenu from "components/RestaurantBestMenu/RestaurantBestMenu";
import RestaurantInfo from "components/RestaurantInfo/RestaurantInfo";
import { useLocation } from "react-router-dom";

const CategoryDetail = (): JSX.Element => {
  const location = useLocation();
  const catgegory = decodeURIComponent(location.pathname.split("/")[2]);
  const shopName = decodeURIComponent(location.pathname.split("/")[3]);
  const shopId = decodeURIComponent(location.pathname.split("/")[4]);

  return (
    <Styled.CategoryRestaurantWrapper>
      <RestaurantSection category={catgegory} shopName={shopName} />
      <RestaurantBestMenu />
      <div className="line" />
      <RestaurantInfo shopId={shopId} />
    </Styled.CategoryRestaurantWrapper>
  );
};

export default CategoryDetail;
