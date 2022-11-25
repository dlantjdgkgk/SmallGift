import KakaoMap from "components/KakaoAPI/KakaoMap/KakaoMap";
import CategoryModal from "components/Modal/CategoryModal/CategoryModal";
import Portal from "components/Modal/Portal/Portal";
import { useState } from "react";
import * as Styled from "./style";
import LocateWhite from "../../assets/img/LocateWhite.png";
import BusinessHours from "../../assets/img/BusinessHours.png";
import PhoneNumber from "../../assets/img/PhoneNumber.png";

export interface IShopMenuProps {
  data: {
    productImage: string;
    productPrice: string;
    productName: string;
    id: number;
  };
}
interface IProps {
  shopAddress: string | undefined;
  shopTelephone: string | undefined;
  menus: IShopMenuProps[];
}

const RestaurantInfo = ({ shopAddress, shopTelephone, menus }: IProps): JSX.Element => {
  const buttons = ["전체 메뉴", "매장 정보"];
  const [selectButton, setSelectButton] = useState("전체 메뉴");
  const [selectMenu, setSelectMenu] = useState<number>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalClose = (): void => setModalIsOpen(false);

  return (
    <Styled.RestaurantInfoWrapper>
      <div className="menuAndRestaurantInformation">
        {buttons.map((button) => {
          const isSelected = selectButton === button;
          return (
            <button
              style={isSelected ? { borderBottom: " 2px solid #6600CC", fontWeight: "700" } : undefined}
              type="button"
              aria-label="Click"
              onClick={(): void => setSelectButton(button)}
              key={button}
            >
              <p style={isSelected ? { color: "#6600CC", fontWeight: "700" } : undefined}>{button}</p>
            </button>
          );
        })}
      </div>

      {selectButton === "전체 메뉴" ? (
        <section className="manyMenu">
          {menus.map((menu) => {
            const isSelected = selectMenu === menu.data.id;
            return (
              <article
                className="manyMenuInformation"
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
                <img src={menu.data.productImage} alt="이미지" />
                <div className="setMenuInfo">
                  <div className="setMenuName">{menu.data.productName}</div>
                  <p className="setMenu">단품</p>
                  <p className="price">{menu.data.productPrice.toLocaleString()}원</p>
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
            <p className="detailAddress">{shopAddress}</p>
            <KakaoMap shopAddress={shopAddress} />
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
            <p className="phoneNumber">{shopTelephone}</p>
          </div>
        </div>
      )}
    </Styled.RestaurantInfoWrapper>
  );
};

export default RestaurantInfo;
