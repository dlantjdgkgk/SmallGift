import * as Styled from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import Portal from "components/Modal/Portal/Portal";
import CategoryModal from "components/Modal/CategoryModal/CategoryModal";
import { IShopMenuProps } from "components/RestaurantInfo/RestaurantInfo";

interface IProps {
  bestMenus: IShopMenuProps[];
}

const RestaurantBestMenu = ({ bestMenus }: IProps): JSX.Element => {
  const [selectMenu, setSelectMenu] = useState<number>();
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
          const isSelected = selectMenu === menu.data.id;
          return (
            <section
              className="bestMenuInformation"
              key={menu.data.id}
              aria-hidden="true"
              onClick={(): void => {
                setSelectMenu(menu.data.id);
                setModalIsOpen(true);
              }}
            >
              {isSelected && modalIsOpen ? (
                <Portal>
                  <CategoryModal menu={menu} handleModalClose={handleModalClose} />
                </Portal>
              ) : null}

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
    </Styled.BestMenuWrapper>
  );
};

export default RestaurantBestMenu;
