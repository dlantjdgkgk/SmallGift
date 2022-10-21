import * as Styled from "./style";
import Portal from "components/Modal/Portal/Portal";
import AreaModal from "components/Modal/AreaModal/AreaModal";
import { useEffect, useState } from "react";
import { apiInstance } from "../../api/setting";

const MainPageRestaurant = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [locate, setLocate] = useState(null);
  const handleModalClose = (): void => setModalIsOpen(false);

  const memberId = 15;
  const userLocateAPI = async (): Promise<void> => {
    try {
      const res = await apiInstance.get(`/api/user/locate?memberId=${memberId}`);
      setLocate(res.data);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

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
              위치 변경하기 <img src="/img/Arrow.png" />
            </div>
            {modalIsOpen ? (
              <Portal>
                <AreaModal
                  onApply={userLocateAPI}
                  setModalIsOpen={setModalIsOpen}
                  handleModalClose={handleModalClose}
                />
              </Portal>
            ) : null}
          </button>
        </div>

        <div className="locationContainer">
          <div className="addressInformation">
            <img src="/img/locate.png" />
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
        {/* <p className="localFoodRecommendations">
          <span>마포구</span> 근처 가게들의 <br />
          인기 메뉴를 추천해드릴게요
        </p> */}
        <section className="restaurants">
          <article className="restaurant">
            <button className="category" type="button">
              일식
            </button>
            <img src="img/RestaurantMenu.png" />
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
            <img src="img/RestaurantMenu.png" />
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
            <img src="img/RestaurantMenu.png" />
            <div className="restaurantInformation">
              <p className="restaurantName">아뜨뜨</p>
              <p className="restaurantMenu">소고기 솥밥</p>
              <p className="menuPrice">15,000원</p>
            </div>
          </article>
        </section>
      </Styled.RestaurantWrapper>
    </Styled.SectionRestaurantWrapper>
  );
};

export default MainPageRestaurant;
