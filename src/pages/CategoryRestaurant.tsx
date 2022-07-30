import { Link } from "react-router-dom";
import * as Styled from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CategoryRestaurant = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  const menuList = [
    {
      setMenuName: "쭈차돌세트",
      setMenu: "쭈꾸미+차돌+묵사밥+볶음밥",
      price: "15,000원",
    },
    {
      setMenuName: "삼겹살세트",
      setMenu: "삼겹살+묵사밥+볶음밥",
      price: "16,000원",
    },
    {
      setMenuName: "목살세트",
      setMenu: "목살+묵사밥+볶음밥",
      price: "17,000원",
    },
    {
      setMenuName: "항정살세트",
      setMenu: "항정살+묵사밥+볶음밥",
      price: "18,000원",
    },
  ];

  return (
    <Styled.CategoryRestaurantWrapper>
      <div className="nav" />
      <div className="reasturantInformation">
        <div className="category">한식</div>
        <div className="restaurantLike">
          <div className="restaurantName">쭈꾸미랩소디 강남점</div>
          <button type="button" className="like">
            Like
          </button>
        </div>
      </div>
      <div className="restaurantBestMenu">
        <p className="bestMenu">Best 메뉴</p>

        <Slider {...settings}>
          {menuList.map((menu, index) => {
            return (
              <Link
                to={`/categoryProduct?setMenuName=${menu.setMenuName}&setMenu=${menu.setMenu}&price=${menu.price}`}
                key={index}
                style={{ color: "black" }}
              >
                <div className="menuInformation">
                  <div className="menuImage" />
                  <div className="setMenuInformation">
                    <div className="setMenuName">{menu.setMenuName}</div>
                    <p className="setMenu">{menu.setMenu}</p>
                    <p className="price">{menu.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
      <div className="line" />
      {/* <div className="menuAndRestaurantInformation">
 

      </div> */}
    </Styled.CategoryRestaurantWrapper>
  );
};

export default CategoryRestaurant;
