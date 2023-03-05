import { useState } from "react";
import Portal from "components/Modal/Portal/Portal";
import CategoryModal from "components/Modal/CategoryModal/CategoryModal";
import * as Styled from "./style";
import { IShopMenuProps } from "../types";

interface IProps {
  menu: IShopMenuProps;
}

const RestaurantMenuInfo = ({ menu }: IProps): JSX.Element => {
  const [selectMenu, setSelectMenu] = useState<any>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalClose = (): void => setModalIsOpen(false);
  return (
    <Styled.RestaurantMenuArticle
      key={menu.data.id}
      onClick={(): void => {
        setSelectMenu(menu);
        setModalIsOpen(true);
      }}
    >
      <img src={menu.data.productImage} alt="이미지" />
      <Styled.MenuInfo>
        <Styled.MenuName>{menu.data.productName}</Styled.MenuName>
        <Styled.MenuProduct>단품</Styled.MenuProduct>
        <Styled.MenuPrice>{menu.data.productPrice.toLocaleString()}원</Styled.MenuPrice>
      </Styled.MenuInfo>

      {modalIsOpen && (
        <Portal>
          <CategoryModal menu={selectMenu} handleModalClose={handleModalClose} />
        </Portal>
      )}
    </Styled.RestaurantMenuArticle>
  );
};

export default RestaurantMenuInfo;
