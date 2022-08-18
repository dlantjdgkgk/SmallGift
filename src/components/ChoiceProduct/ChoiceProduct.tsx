import { useState } from "react";
import * as Styled from "./style";

const ChoiceProduct = () => {
  const [selected, setSelected] = useState("");
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
          <div className="InfoAndBtn">
            <img src="/img/foodThumbnail.png" />
            <div className="setInfo">
              <p className="setName">쭈차돌세트</p>
              <p className="setMenu">쭈꾸미+차돌+묵사발+볶음밥</p>
              <p className="price">15,000원</p>
            </div>
            <button type="button" className="like">
              like
            </button>
          </div>
          <button className="order" type="button">
            바로 주문하기
          </button>
        </div>
      </Styled.ChoiceProductSection>
      <Styled.ChoiceProductSection>
        <div className="gifticonInfo">
          <div className="InfoAndBtn">
            <img src="/img/foodThumbnail.png" />
            <div className="setInfo">
              <p className="setName">쭈차돌세트</p>
              <p className="setMenu">쭈꾸미+차돌+묵사발+볶음밥</p>
              <p className="price">15,000원</p>
            </div>
            <button type="button" className="like">
              like
            </button>
          </div>
          <button className="order" type="button">
            바로 주문하기
          </button>
        </div>
      </Styled.ChoiceProductSection>
    </Styled.ChoiceProductWrapper>
  );
};

export default ChoiceProduct;
