import KakaoMap from "components/KakaoAPI/KakaoMap/KakaoMap";
import CategoryModal from "components/Modal/CategoryModal/CategoryModal";
import Portal from "components/Modal/Portal/Portal";
import { useEffect, useState } from "react";
import * as Styled from "./style";
import foodThumbnail from "../../assets/img/foodThumbnail.png";
import LocateWhite from "../../assets/img/LocateWhite.png";
import BusinessHours from "../../assets/img/BusinessHours.png";
import PhoneNumber from "../../assets/img/PhoneNumber.png";
import { apiInstance } from "api/setting";

const RestaurantInfo = (): JSX.Element => {
  const buttons = ["전체 메뉴", "매장 정보"];
  const [selectButton, setSelectButton] = useState("전체 메뉴");
  const [selectMenu, setSelectMenu] = useState(4);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [detailsData, setDetailsData] = useState<object>();
  const handleModalClose = (): void => setModalIsOpen(false);
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

  const ShopDetailsGetAPI = async (): Promise<void> => {
    const result = await apiInstance.get("/api/user/shop/details?shopId=35");
    console.log(result);
  };

  useEffect(() => {
    ShopDetailsGetAPI();
  }, []);

  return (
    <Styled.RestaurantInfoWrapper>
      <div className="menuAndRestaurantInformation">
        {buttons.map((button, index) => {
          const isSelected = selectButton === button;
          return (
            <button
              style={isSelected ? { borderBottom: " 2px solid #6600CC", fontWeight: "700" } : undefined}
              type="button"
              aria-label="Click"
              onClick={(): void => setSelectButton(button)}
              key={index}
            >
              <p style={isSelected ? { color: "#6600CC", fontWeight: "700" } : undefined}>{button}</p>
            </button>
          );
        })}
      </div>

      {selectButton === "전체 메뉴" ? (
        <section className="manyMenu">
          {menuList.map((menu, index) => {
            const isSelected = selectMenu === index;
            return (
              <article
                className="manyMenuInformation"
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
                <img src={foodThumbnail} />
                <div className="setMenuInfo">
                  <div className="setMenuName">{menu.setMenuName}</div>
                  <p className="setMenu">{menu.setMenu}</p>
                  <p className="price">{menu.price}원</p>
                </div>
              </article>
            );
          })}
        </section>
      ) : (
        <div className="restaurantInformation">
          <div className="addressInformation">
            <div className="restaurantAddress">
              <img src={LocateWhite} alt="" />
              <p className="address">주소</p>
            </div>
            <p className="detailAddress">서울 강남구 강남대로98길 12-3 1층</p>
            <KakaoMap />
          </div>
          <div className="restaurantOperatingHours">
            <div className="operatingHours">
              <img src={BusinessHours} alt="" />
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
              <img src={PhoneNumber} alt="" />
              <p className="phoneNumberKorean">전화번호</p>
            </div>
            <p className="phoneNumber">0507 - 1448 - 5243</p>
          </div>
        </div>
      )}
    </Styled.RestaurantInfoWrapper>
  );
};

export default RestaurantInfo;
