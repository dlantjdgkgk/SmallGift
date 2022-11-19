import * as Styled from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Portal from "components/Modal/Portal/Portal";
import CategoryModal from "components/Modal/CategoryModal/CategoryModal";
import { apiInstance } from "api/setting";

interface IShopMenuProps {
  data: {
    productImage: string;
    productPrice: string;
    productName: string;
    id: number;
  };
}

const RestaurantBestMenu = (): JSX.Element => {
  const [selectMenu, setSelectMenu] = useState<number>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalClose = (): void => setModalIsOpen(false);
  const [menus, setMenus] = useState<IShopMenuProps[]>([]);

  const ShopMenuAPI = async (): Promise<void> => {
    const result = await apiInstance.get("/api/user/shop/menu?shopId=1");
    setMenus(result.data.data.shopAllMenuList);
  };

  console.log(menus);

  useEffect(() => {
    ShopMenuAPI();
  }, []);

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
        {menus.map((menu, index) => {
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
                <img src={menu.data.productImage} alt="이미지" />
                <div className="setMenuInfo">
                  <div className="setMenuName">{menu.data.productName}세트</div>
                  <p className="setMenu">{menu.data.productName}</p>
                  <p className="price">{menu.data.productPrice}원</p>
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
