import { Link } from "react-router-dom";
import * as Styled from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";

const CategoryRestaurant = () => {
  const buttons = ["전체 메뉴", "매장 정보"];
  const [selectButton, setSelectButton] = useState("전체 메뉴");
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

  const handleClick = () => {};

  return (
    <Styled.CategoryRestaurantWrapper>
      <div className="nav" />
      <div className="resturantThumbnail">
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
      <div className="menuAndRestaurantInformation">
        {buttons.map((button, index) => {
          const isSelected = selectButton === button;
          return (
            <button
              style={isSelected ? { borderBottom: " 2px solid black", fontWeight: "700" } : undefined}
              type="button"
              aria-label="Click"
              onClick={() => setSelectButton(button)}
              key={index}
            >
              <p>{button}</p>
            </button>
          );
        })}
      </div>
      {selectButton === "전체 메뉴" ? (
        <div className="manyMenu">
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
        </div>
      ) : (
        <div className="restaurantInformation">
          <div className="addressInformation">
            <div className="restaurantAddress">
              <FontAwesomeIcon icon={faLocationDot} color="#BDBDBD" />
              <p className="address">주소</p>
            </div>
            <div className="map" />
          </div>
          <div className="restaurantOperatingHours">
            <div className="operatingHours">
              <FontAwesomeIcon icon={faClock} color="#BDBDBD" />
              <p className="hours">영업시간</p>
            </div>
            <div className="hourInformation">
              <p className="everyday">매일 11:00 - 22:00</p>
              <p className="breaktime">16:00 - 17:00 브레이크타임</p>
              <p className="lastOrder">21:00 라스트오더</p>
            </div>
          </div>
          <div className="phoneNumberInformation">
            <div className="phone">
              <FontAwesomeIcon icon={faPhone} color="#BDBDBD" />
              <p className="phoneNumberKorean">전화번호</p>
            </div>
            <p className="phoneNumber">0507 - 1448 - 5243</p>
          </div>
        </div>
      )}
    </Styled.CategoryRestaurantWrapper>
  );
};

export default CategoryRestaurant;
