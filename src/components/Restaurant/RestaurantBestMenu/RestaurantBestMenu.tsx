import * as Styled from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import Portal from "components/Modal/Portal/Portal";
import CategoryModal from "components/Modal/CategoryModal/CategoryModal";
import { IShopMenuProps } from "components/Restaurant/RestaurantInfo/RestaurantInfo";

interface IProps {
  bestMenus: IShopMenuProps[];
}

const RestaurantBestMenu = ({ bestMenus }: IProps): JSX.Element => {
  const [selectMenu, setSelectMenu] = useState<any>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalClose = (): void => setModalIsOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    bottom: "0px;",
  };

  return (
    <Styled.BestMenuWrapper>
      <p className="bestMenu">Best 메뉴</p>
      <Slider {...settings}>
        {bestMenus.map((menu) => {
          return (
            <section
              className="bestMenuInformation"
              key={menu.data.id}
              aria-hidden="true"
              onClick={(): void => {
                setSelectMenu(menu);
                setModalIsOpen(true);
              }}
            >
              <article className="menuInformation">
                <img src={menu.data.productImage} alt="이미지" />
                <div className="setMenuInfo">
                  <div className="setMenuName">{menu.data.productName}</div>
                  <p className="setMenu">단품</p>
                  <p className="price">{menu.data.productPrice.toLocaleString()}원</p>
                </div>
              </article>
            </section>
          );
        })}
      </Slider>
      {modalIsOpen && (
        <Portal>
          <CategoryModal menu={selectMenu} handleModalClose={handleModalClose} />
        </Portal>
      )}
    </Styled.BestMenuWrapper>
  );
};

export default RestaurantBestMenu;
