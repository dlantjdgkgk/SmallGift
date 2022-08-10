import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import * as Styled from "./style";
import { useState } from "react";

const ProductInfo = () => {
  const [foldSection, setFoldSection] = useState(false);

  return (
    <Styled.ProductInfoSection>
      <div className="productInfo">
        <p className="bestMenu">주문상품정보</p>
        <button
          type="button"
          onClick={() => {
            setFoldSection(!foldSection);
          }}
        >
          {foldSection ? (
            <FontAwesomeIcon icon={faChevronDown} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} size="2x" />
          )}
        </button>
      </div>
      {foldSection ? null : (
        <div className="gifticonInformation">
          <div className="menuImage" />
          <div className="setMenuInfo">
            <div className="setMenuName">쭈차돌세트</div>
            <p className="setMenu">쭈꾸미+차돌+묵사발+볶음밥</p>
            <p className="price">15,000원</p>
          </div>
        </div>
      )}
    </Styled.ProductInfoSection>
  );
};

export default ProductInfo;
