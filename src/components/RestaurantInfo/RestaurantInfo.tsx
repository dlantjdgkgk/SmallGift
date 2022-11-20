import KakaoMap from "components/KakaoAPI/KakaoMap/KakaoMap";
import CategoryModal from "components/Modal/CategoryModal/CategoryModal";
import Portal from "components/Modal/Portal/Portal";
import { useEffect, useState } from "react";
import * as Styled from "./style";
import LocateWhite from "../../assets/img/LocateWhite.png";
import BusinessHours from "../../assets/img/BusinessHours.png";
import PhoneNumber from "../../assets/img/PhoneNumber.png";
import { apiInstance } from "../../api/setting";

interface IShopDetailProps {
  shopAddress: string;
  shopTelephone: string;
}

interface IShopMenuProps {
  data: {
    productImage: string;
    productPrice: string;
    productName: string;
    id: number;
  };
}

const RestaurantInfo = (): JSX.Element => {
  const buttons = ["전체 메뉴", "매장 정보"];
  const [selectButton, setSelectButton] = useState("전체 메뉴");
  const [selectMenu, setSelectMenu] = useState(4);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [shopDetail, setShopDetail] = useState<IShopDetailProps>();
  const [menus, setMenus] = useState<IShopMenuProps[]>([]);
  const handleModalClose = (): void => setModalIsOpen(false);

  const ShopDetailsGetAPI = async (): Promise<void> => {
    const result = await apiInstance.get("/api/user/shop/details?shopId=1");
    setShopDetail(result.data.data);
  };

  const ShopMenuAPI = async (): Promise<void> => {
    const result = await apiInstance.get("/api/user/shop/menu?shopId=1");
    setMenus(result.data.data.shopAllMenuList);
  };

  console.log(menus);

  useEffect(() => {
    ShopDetailsGetAPI();
    ShopMenuAPI();
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
          {menus.map((menu, index) => {
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
                <img src={menu.data.productImage} alt="이미지" />
                <div className="setMenuInfo">
                  <div className="setMenuName">{menu.data.productName}세트</div>
                  <p className="setMenu">{menu.data.productName}</p>
                  <p className="price">{menu.data.productPrice}원</p>
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
            <p className="detailAddress">{shopDetail?.shopAddress}</p>
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
            <p className="phoneNumber">{shopDetail?.shopTelephone}</p>
          </div>
        </div>
      )}
    </Styled.RestaurantInfoWrapper>
  );
};

export default RestaurantInfo;
