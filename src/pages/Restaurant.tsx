import RestaurantSection from "components/Restaurant/RestaurantSection/RestaurantSection";
import RestaurantBestMenu from "components/Restaurant/RestaurantBestMenu/RestaurantBestMenu";
import RestaurantInfo from "components/Restaurant/RestaurantInfo/RestaurantInfo";
import { useLocation } from "react-router-dom";
import { apiInstance } from "../api/setting";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface IShopDetailProps {
  shopAddress: string;
  shopTelephone: string;
  shopInfoImage: string;
}

const Restaurant = (): JSX.Element => {
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
    <RestaurantWrapper>
      <RestaurantSection category={catgegory} shopName={shopName} image={shopDetail?.shopInfoImage} />
      <RestaurantBestMenu bestMenus={bestMenus} />
      <div className="line" />
      <RestaurantInfo shopAddress={shopDetail?.shopAddress} shopTelephone={shopDetail?.shopTelephone} menus={menus} />
    </RestaurantWrapper>
  );
};

export default Restaurant;

const RestaurantWrapper = styled.main`
  position: relative;
  overflow: hidden;
  .menuImage {
    width: 92px;
    height: 92px;
    background: #d9d9d9;
  }
  .setMenuInfo {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
  }
  .setManyMenuInformation {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
  }

  .setMenuName {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #000000;
  }
  .setMenu {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
    color: #8f8f8f;
    margin-top: 4px;
  }

  .price {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.04em;
    color: #000000;
    margin-top: 17px;
  }

  .line {
    margin-top: 25px;
    margin-bottom: 16px;
    width: 100%;
    height: 8px;
    background: #f8f8f8;
  }
`;
