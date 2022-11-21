import * as Styled from "./style";
import Portal from "components/Modal/Portal/Portal";
import AreaModal from "components/Modal/AreaModal/AreaModal";
import { useEffect, useState } from "react";
import { apiInstance } from "../../api/setting";
import Arrow from "../../assets/img/Arrow.png";
import Locate from "../../assets/img/Locate.png";
import RestaurantMenu from "../../assets/img/RestaurantMenu.png";
import NotData from "../../assets/img/NotData.png";

const MainPageRestaurant = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [locate, setLocate] = useState(null);
  const [shopInfo, setShopInfo] = useState([]);
  const handleModalClose = (): void => setModalIsOpen(false);

  const memberId = 16;
  const userLocateAPI = async (): Promise<void> => {
    try {
      const res = await apiInstance.get(`/api/user/locate?memberId=${memberId}`);
      setLocate(res.data);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const ShopInfoLocateAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/shop/info/all/locate?locate=${locate}`);
      setShopInfo(result.data.data.menuRandomByLocateResDto);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  console.log(shopInfo);

  useEffect(() => {
    ShopInfoLocateAPI();
    userLocateAPI();
  }, []);

  return (
    <Styled.SectionRestaurantWrapper>
      <Styled.LocationWrapper>
        <div className="location">
          <p>지역을 설정해보세요</p>
          <button
            type="button"
            aria-label="Click"
            onClick={(): void => {
              setModalIsOpen(true);
            }}
          >
            <div className="locationBtn">
              위치 변경하기 <img src={Arrow} />
            </div>
            {modalIsOpen ? (
              <Portal>
                <AreaModal
                  userLocateAPI={userLocateAPI}
                  setModalIsOpen={setModalIsOpen}
                  handleModalClose={handleModalClose}
                />
              </Portal>
            ) : null}
          </button>
        </div>

        <div className="locationContainer">
          <div className="addressInformation">
            <img src={Locate} />
            <p className="address">주소</p>
            {locate ? (
              <p className="exactAddress">{locate}</p>
            ) : (
              <p className="exactAddress">서울특별시 마포구 양화로7안길 2-1</p>
            )}
          </div>
        </div>
      </Styled.LocationWrapper>

      <Styled.RestaurantWrapper>
        {shopInfo.length === 0 ? (
          <div className="noData">
            <img src={NotData} alt="" />
            <div className="noDataTitle">
              <p>검색결과가 없어요</p>
              <p>다른 지역을 입력해보세요</p>
            </div>
          </div>
        ) : (
          <section className="restaurants">
            <article className="restaurant">
              <button className="category" type="button">
                일식
              </button>
              <img src={RestaurantMenu} />
              <div className="restaurantInformation">
                <p className="restaurantName">카멜로 연남</p>
                <p className="restaurantMenu">버터 봉골레 파스타</p>
                <p className="menuPrice">17,000원</p>
              </div>
            </article>
            <article className="restaurant">
              <button className="category" type="button">
                일식
              </button>
              <img src={RestaurantMenu} />
              <div className="restaurantInformation">
                <p className="restaurantName">모센즈 스위트</p>
                <p className="restaurantMenu">모센 라떼</p>
                <p className="menuPrice">6,000원</p>
              </div>
            </article>
            <article className="restaurant">
              <button className="category" type="button">
                일식
              </button>
              <img src={RestaurantMenu} />
              <div className="restaurantInformation">
                <p className="restaurantName">아뜨뜨</p>
                <p className="restaurantMenu">소고기 솥밥</p>
                <p className="menuPrice">15,000원</p>
              </div>
            </article>
          </section>
        )}
      </Styled.RestaurantWrapper>
    </Styled.SectionRestaurantWrapper>
  );
};

export default MainPageRestaurant;
