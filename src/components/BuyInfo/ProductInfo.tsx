import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import * as Styled from "./style";
import { useState } from "react";
import MenuType from "./MenuType";

interface IProps {
  menu: MenuType;
}

const ProductInfo = ({ menu }: IProps): JSX.Element => {
  const [foldSection, setFoldSection] = useState(false);
  const handleSet = (): void => setFoldSection(!foldSection);

  return (
    <Styled.ProductInfoSection>
      <div className="productInfo">
        <p className="bestMenu">주문상품정보</p>
        <button type="button" onClick={handleSet}>
          {foldSection ? (
            <FontAwesomeIcon icon={faChevronDown} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} size="2x" />
          )}
        </button>
      </div>
      {foldSection ? null : (
        <div className="gifticonInformation">
          <img src={menu.data.productImage} alt="이미지" className="menuImage" />
          <div className="setMenuInfo">
            <div className="setMenuName">{menu.data.productName}</div>
            <p className="setMenu">{menu.data.productName}</p>
            <p className="price">{menu.data.productPrice}원</p>
          </div>
        </div>
      )}
    </Styled.ProductInfoSection>
  );
};

export default ProductInfo;
