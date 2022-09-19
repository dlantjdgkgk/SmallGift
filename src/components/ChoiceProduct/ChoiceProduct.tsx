import { useState } from "react";
import * as Styled from "./style";
import LikeSVG from "components/LikeSVG/LikeSVG";
import { Link } from "react-router-dom";

const ChoiceProduct = () => {
  const [like, setLike] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectMenu, setSelectMenu] = useState(Number);

  const menuList = [
    {
      setMenuName: "쭈차돌세트",
      setMenu: "쭈꾸미+차돌+묵사밥+볶음밥",
      price: "15,000",
      id: 1,
    },
    {
      setMenuName: "삼겹살세트",
      setMenu: "삼겹살+묵사밥+볶음밥",
      price: "16,000",
      id: 2,
    },
    {
      setMenuName: "목살세트",
      setMenu: "목살+묵사밥+볶음밥",
      price: "17,000",
      id: 3,
    },
    {
      setMenuName: "항정살세트",
      setMenu: "항정살+묵사밥+볶음밥",
      price: "18,000",
      id: 4,
    },
  ];
  return (
    <Styled.ChoiceProductWrapper>
      <Styled.ProductFilterSection>
        <div className="filter">
          <select
            onChange={(e) => {
              setSelected(e.target.value);
            }}
            value={selected}
          >
            <option value="가격 비싼순">
              <p>가격 비싼순</p>
            </option>
            <option value="가격 저렴한순">
              <p>가격 저렴한순</p>
            </option>
          </select>
          <button type="button" className="delete">
            전체 삭제
          </button>
        </div>
      </Styled.ProductFilterSection>

      {menuList.map((menu) => {
        return (
          <Styled.ChoiceProductSection key={menu.id}>
            <div className="gifticonInfo">
              <div className="locate">
                <img src="/img/LocateWhite.png" />
                <p>쭈꾸미랩소디 강남점</p>
              </div>
              <div className="menuInfo">
                <img src="/img/foodThumbnail.png" className="thumbnail" />
                <div className="setInfo">
                  <p className="setName">{menu.setMenuName}</p>
                  <p className="setMenu">{menu.setMenu}</p>
                  <p className="price">{menu.price}원</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setLike(!like);
                  setSelectMenu(menu.id);
                }}
                className="like"
              >
                <LikeSVG fill={like ? "red" : undefined} stroke={like ? "transparent" : "gray"} />
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
