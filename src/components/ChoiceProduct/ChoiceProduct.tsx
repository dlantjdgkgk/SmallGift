import { useState } from "react";
import * as Styled from "./style";
import LikeSVG from "components/LikeSVG/LikeSVG";
import { useNavigate } from "react-router";

const ChoiceProduct = () => {
  const [like, setLike] = useState(false);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
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
            <option value="최근 추가순">
              <p>최근 추가순</p>
            </option>
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
      <Styled.ChoiceProductSection>
        <div className="gifticonInfo">
          <div className="locate">
            <img src="/img/LocateWhite.png" />
            <p>쭈꾸미랩소디 강남점</p>
          </div>
          <div className="menuInfo">
            <img src="/img/foodThumbnail.png" className="thumbnail" />
            <div className="setInfo">
              <p className="setName">쭈차돌세트</p>
              <p className="setMenu">쭈꾸미+차돌+묵사발+볶음밥</p>
              <p className="price">15,000원</p>
            </div>
          </div>
          <button type="button" onClick={() => setLike(!like)} className="like">
            <LikeSVG fill={like ? "red" : undefined} stroke={like ? "transparent" : "gray"} />
          </button>
          <button
            className="order"
            type="button"
            onClick={() => {
              navigate("/payment");
            }}
          >
            바로 주문하기
          </button>
        </div>
      </Styled.ChoiceProductSection>
      <Styled.ChoiceProductSection>
        <div className="gifticonInfo">
          <div className="locate">
            <img src="/img/LocateWhite.png" />
            <p>쭈꾸미랩소디 강남점</p>
          </div>
          <div className="menuInfo">
            <img src="/img/foodThumbnail.png" className="thumbnail" />
            <div className="setInfo">
              <p className="setName">쭈차돌세트</p>
              <p className="setMenu">쭈꾸미+차돌+묵사발+볶음밥</p>
              <p className="price">15,000원</p>
            </div>
          </div>
          <button type="button" onClick={() => setLike(!like)} className="like">
            <LikeSVG fill={like ? "red" : undefined} stroke={like ? "transparent" : "gray"} />
          </button>
          <button className="order" type="button">
            바로 주문하기
          </button>
        </div>
      </Styled.ChoiceProductSection>
    </Styled.ChoiceProductWrapper>
  );
};

export default ChoiceProduct;
