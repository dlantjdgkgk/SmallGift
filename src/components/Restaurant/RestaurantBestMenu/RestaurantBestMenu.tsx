import * as Styled from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RestaurantMenuInfo from "../RestaurantMenuInfo.tsx/RestaurantMenuInfo";
import { IShopMenuProps } from "../types";

interface IProps {
  bestMenus: IShopMenuProps[];
}

const RestaurantBestMenu = ({ bestMenus }: IProps): JSX.Element => {
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
      <Styled.BestMenu>Best 메뉴</Styled.BestMenu>
      <Slider {...settings}>
        {bestMenus.map((menu) => {
          return <RestaurantMenuInfo menu={menu} key={menu.data.id} />;
        })}
      </Slider>
    </Styled.BestMenuWrapper>
  );
};

export default RestaurantBestMenu;
