import * as Styled from "./style";
import RestaurantSection from "components/RestaurantSection/RestaurantSection";
import RestaurantBestMenu from "components/RestaurantBestMenu/RestaurantBestMenu";
import RestaurantInfo from "components/RestaurantInfo/RestaurantInfo";
import { useLocation } from "react-router-dom";
import { apiInstance } from "../api/setting";
import { useEffect, useState } from "react";

interface IShopDetailProps {
  shopAddress: string;
  shopTelephone: string;
}

const CategoryDetail = (): JSX.Element => {
  const location = useLocation();
  const catgegory = decodeURIComponent(location.pathname.split("/")[2]);
  const shopName = decodeURIComponent(location.pathname.split("/")[3]);
  const shopId = decodeURIComponent(location.pathname.split("/")[4]);
  const [shopDetail, setShopDetail] = useState<IShopDetailProps>();

  const ShopDetailsGetAPI = async (): Promise<void> => {
    const result = await apiInstance.get(`/api/user/shop/details?shopId=${shopId}`);
    setShopDetail(result.data.data);
  };

  useEffect(() => {
    ShopDetailsGetAPI();
  }, []);

  console.log(shopDetail);

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
