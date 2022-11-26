import { useEffect, useState } from "react";
import * as Styled from "./style";
import LikeSVG from "components/LikeSVG/LikeSVG";
import { Link } from "react-router-dom";
import LocateWhite from "../../assets/img/LocateWhite.png";
import { apiInstance } from "../../api/setting";
import NotData from "../../assets/img/NotData.png";

interface MenuType {
  data: {
    productImage: string;
    productPrice: string;
    productName: string;
    productContent: string;
    shopName: string;
    wishListId: number;
    status: number;
  };
  id: number;
}

const ChoiceProduct = (): JSX.Element => {
  const [menuList, setMenuList] = useState<MenuType[]>([]);
  const memberId = 1;

  const DeleteWishListAPI = async (selectMenuId: number): Promise<void> => {
    try {
      const result = await apiInstance.delete(`/api/user/wishList?wishListId=${selectMenuId}`);
      console.log(result);
      if (result.status === 200) {
        GetWishListAPI();
      }
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const GetWishListAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/wishList?memberId=${memberId}`);
      setMenuList(result.data.data.wishList.reverse());
    } catch (error) {
      throw new Error("check the network response");
    }
  };
  console.log(menuList);

  useEffect(() => {
    GetWishListAPI();
  }, []);

  return (
    <Styled.ChoiceProductWrapper>
      {menuList.length === 0 ? (
        <Styled.NoData>
          <img src={NotData} alt="" />
          <div className="search">찜한 상품이 없어요</div>
        </Styled.NoData>
      ) : (
        <>
          {menuList.map((menu) => {
            return (
              <Styled.ChoiceProductSection key={menu.id}>
                <div className="gifticonInfo">
                  <div className="locate">
                    <img src={LocateWhite} alt="" />
                    <p>{menu.data.shopName}</p>
                  </div>
                  <div className="menuInfo">
                    <img src={menu.data.productImage} alt="" className="thumbnail" />
                    <div className="setInfo">
                      <p className="setName">{menu.data.productName}</p>
                      <p className="setMenu">단품</p>
                      <p className="price">{menu.data.productPrice.toLocaleString()}원</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(): void => {
                      DeleteWishListAPI(menu.data.wishListId);
                    }}
                    className="like"
                  >
                    <LikeSVG fill="red" stroke="transparent" />
                  </button>
                  <Link to="/payment" state={{ menu }}>
                    <button type="button" className="order">
                      바로 주문하기
                    </button>
                  </Link>
                </div>
              </Styled.ChoiceProductSection>
            );
          })}
        </>
      )}
    </Styled.ChoiceProductWrapper>
  );
};

export default ChoiceProduct;
