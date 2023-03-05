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
      <Styled.ProductTitle>
        <p>주문상품정보</p>
        <button type="button" onClick={handleSet}>
          {foldSection ? (
            <FontAwesomeIcon icon={faChevronDown} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} size="2x" />
          )}
        </button>
      </Styled.ProductTitle>

      {foldSection ? null : (
        <Styled.ProductInfo>
          <img src={menu.data.productImage} alt="이미지" />
          <div>
            <Styled.SetMenuName>{menu.data.productName}</Styled.SetMenuName>
            <Styled.SetMenu>단품</Styled.SetMenu>
            <Styled.Price>{menu.data.productPrice.toLocaleString()}원</Styled.Price>
          </div>
        </Styled.ProductInfo>
      )}
    </Styled.ProductInfoSection>
  );
};

export default ProductInfo;
