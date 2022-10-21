import * as Styled from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import Portal from "components/Modal/Portal/Portal";
import CategoryModal from "components/Modal/CategoryModal/CategoryModal";

const RestaurantBestMenu = (): JSX.Element => {
  const [selectMenu, setSelectMenu] = useState(4);
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
  const menuList = [
    {
      setMenuName: "쭈차돌세트",
      setMenu: "쭈꾸미+차돌+묵사밥+볶음밥",
      price: "15,000",
    },
    {
      setMenuName: "삼겹살세트",
      setMenu: "삼겹살+묵사밥+볶음밥",
      price: "16,000",
    },
    {
      setMenuName: "목살세트",
      setMenu: "목살+묵사밥+볶음밥",
      price: "17,000",
    },
    {
      setMenuName: "항정살세트",
      setMenu: "항정살+묵사밥+볶음밥",
      price: "18,000",
    },
  ];

  return (
    <Styled.BestMenuWrapper>
      <p className="bestMenu">Best 메뉴</p>
      <Slider {...settings}>
        {menuList.map((menu, index) => {
          const isSelected = selectMenu === index;
          return (
            <section
              className="bestMenuInformation"
              key={index}
              aria-hidden="true"
              onClick={(): void => {
                setSelectMenu(index);
                setModalIsOpen(true);
              }}
            >
              {isSelected && modalIsOpen ? (
                <Portal>
                  <CategoryModal menu={menu} handleModalClose={handleModalClose} />
                </Portal>
              ) : null}

              <article className="menuInformation">
                <img src="/img/foodThumbnail.png" />
                <div className="setMenuInfo">
                  <div className="setMenuName">{menu.setMenuName}</div>
                  <p className="setMenu">{menu.setMenu}</p>
                  <p className="price">{menu.price}원</p>
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
