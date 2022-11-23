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
  shopInfoImage: string;
}

const CategoryDetail = (): JSX.Element => {
  const location = useLocation();
  const catgegory = decodeURIComponent(location.pathname.split("/")[2]);
  const shopName = decodeURIComponent(location.pathname.split("/")[3]);
  const shopId = decodeURIComponent(location.pathname.split("/")[4]);
  const [shopDetail, setShopDetail] = useState<IShopDetailProps>();
  const [menus, setMenus] = useState([]);
  const copy = [...menus];
  const bestMenus = copy.splice(2);

  const ShopMenuAPI = async (): Promise<void> => {
    const result = await apiInstance.get(`/api/user/shop/menu?shopId=${shopId}`);
    setMenus(result.data.data.shopAllMenuList);
  };

  const ShopDetailGetAPI = async (): Promise<void> => {
    const result = await apiInstance.get(`/api/user/shop/details?shopId=${shopId}`);
    setShopDetail(result.data.data);
  };

  useEffect(() => {
    ShopDetailGetAPI();
    ShopMenuAPI();
  }, []);

  return (
    <Styled.CategoryRestaurantWrapper>
      <RestaurantSection category={catgegory} shopName={shopName} image={shopDetail?.shopInfoImage} />
      <RestaurantBestMenu bestMenus={bestMenus} />
      <div className="line" />
      <RestaurantInfo shopAddress={shopDetail?.shopAddress} shopTelephone={shopDetail?.shopTelephone} menus={menus} />
    </Styled.CategoryRestaurantWrapper>
  );
};

export default CategoryDetail;
