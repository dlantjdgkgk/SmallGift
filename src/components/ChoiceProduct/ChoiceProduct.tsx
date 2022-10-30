import { useEffect, useState } from "react";
import * as Styled from "./style";
import LikeSVG from "components/LikeSVG/LikeSVG";
import { Link } from "react-router-dom";
import foodThumbnail from "../../assets/img/foodThumbnail.png";
import LocateWhite from "../../assets/img/LocateWhite.png";
import { apiInstance } from "api/setting";

const ChoiceProduct = (): JSX.Element => {
  const [selected, setSelected] = useState("");
  const [selectMenu, setSelectMenu] = useState(Number);
  const memberId = 1;

  const UpdateMenuList = (idx: number): void => {
    const cp = [...menuList];
    cp[idx].like = !cp[idx].like;
    setMenuList(cp);
  };

  const DeleteWishListAPI = async (): Promise<void> => {
    try {
      const payload = {
        wishListId: selectMenu,
      };
      const result = await apiInstance.delete("/api/user/wishList", { data: payload });
      console.log(result);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const GetWishListAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/wishList?userId=${memberId}`);
      console.log(result);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  useEffect(() => {
    GetWishListAPI();
  }, []);

  const [menuList, setMenuList] = useState([
    {
      setMenuName: "쭈차돌세트",
      setMenu: "쭈꾸미+차돌+묵사밥+볶음밥",
      price: "15,000",
      id: 1,
      like: true,
    },
    {
      setMenuName: "삼겹살세트",
      setMenu: "삼겹살+묵사밥+볶음밥",
      price: "16,000",
      id: 2,
      like: true,
    },
    {
      setMenuName: "목살세트",
      setMenu: "목살+묵사밥+볶음밥",
      price: "17,000",
      id: 3,
      like: true,
    },
    {
      setMenuName: "항정살세트",
      setMenu: "항정살+묵사밥+볶음밥",
      price: "18,000",
      id: 4,
      like: true,
    },
  ]);

  return (
    <Styled.ChoiceProductWrapper>
      <Styled.ProductFilterSection>
        <div className="filter">
          <select
            onChange={(e): void => {
              setSelected(e.target.value);
            }}
            value={selected}
          >
            <option value="가격 비싼순">가격 비싼순</option>
            <option value="가격 저렴한순">가격 저렴한순</option>
          </select>
          <button type="button" className="delete">
            전체 삭제
          </button>
        </div>
      </Styled.ProductFilterSection>

      {menuList.map((menu, idx) => {
        return (
          <Styled.ChoiceProductSection key={menu.id}>
            <div className="gifticonInfo">
              <div className="locate">
                <img src={LocateWhite} alt="" />
                <p>쭈꾸미랩소디 강남점</p>
              </div>
              <div className="menuInfo">
                <img src={foodThumbnail} alt="" className="thumbnail" />
                <div className="setInfo">
                  <p className="setName">{menu.setMenuName}</p>
                  <p className="setMenu">{menu.setMenu}</p>
                  <p className="price">{menu.price}원</p>
                </div>
              </div>
              <button
                type="button"
                onClick={(): void => {
                  UpdateMenuList(idx);
                  setSelectMenu(menu.id);
                  DeleteWishListAPI();
                }}
                className="like"
              >
                <LikeSVG fill={menu.like ? "red" : undefined} stroke={menu.like ? "transparent" : "gray"} />
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
