import { useEffect, useState } from "react";
import * as Styled from "./style";
import LikeSVG from "components/LikeSVG/LikeSVG";
import { Link } from "react-router-dom";
import LocateWhite from "../../assets/img/LocateWhite.png";
import { apiInstance } from "../../api/setting";

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
  const [selected, setSelected] = useState("sortByHighPrice");
  const [selectMenu, setSelectMenu] = useState(Number);
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
      setMenuList(result.data.data.wishList);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  useEffect(() => {
    GetWishListAPI();
  }, []);

  return (
    <Styled.ChoiceProductWrapper>
      <Styled.ProductFilterSection>
        <div className="filter">
          <select
            onChange={(e): void => {
              setSelected(e.target.value);
              if (selected === "sortByLowPrice") {
                const copy = [...menuList];
                copy.sort((a, b) => {
                  return Number(b.data.productPrice) - Number(a.data.productPrice);
                });
                setMenuList(copy);
              }
              if (selected === "sortByHighPrice") {
                const copy = [...menuList];
                copy.sort((a, b) => {
                  return Number(a.data.productPrice) - Number(b.data.productPrice);
                });
                setMenuList(copy);
              }
            }}
            value={selected}
          >
            <option value="sortByHighPrice">높은가격순</option>
            <option value="sortByLowPrice">낮은가격순</option>
          </select>
        </div>
      </Styled.ProductFilterSection>

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
                  <p className="setMenu">{menu.data.productContent}</p>
                  <p className="price">{menu.data.productPrice}원</p>
                </div>
              </div>
              <button
                type="button"
                onClick={(): void => {
                  setSelectMenu(menu.data.wishListId);
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
    </Styled.ChoiceProductWrapper>
  );
};

export default ChoiceProduct;
