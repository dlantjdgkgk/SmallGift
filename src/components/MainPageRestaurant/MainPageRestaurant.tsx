import * as Styled from "./style";
import Portal from "components/Modal/Portal/Portal";
import AreaModal from "components/Modal/AreaModal/AreaModal";
import { useEffect, useState } from "react";
import { apiInstance } from "../../api/setting";
import LocateInfo from "./Locate";

const MainPageRestaurant = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [locate, setLocate] = useState(null);
  const handleModalClose = () => setModalIsOpen(false);

  const memberId = 15;
  const userLocateAPI = async () => {
    try {
      // 여기가 화면 들어갈때 부르는 부분일거같은데 원래는 여기 locate랑
      const res = await apiInstance.get(`/api/user/locate?memberId=${memberId}`);
      console.log(res);
      setLocate(res);
    } catch (error) {
      console.log(error.message);
      // 여기도 바껴서 같이 바껴서 그렇게 쓰는거에영
      // 확실히 이해했습니다.
      // 그러면 rtk 바로 도입해서 이 부분은 제가 해보고
      // 말씀드리겠습니다! 넹 아 그리고 혹시 이거 깃에 올라가있나여?
      // 네네 있습니다 . 왜유?
    }
  };

  useEffect(() => {
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
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            위치 변경하기 {">"}
            {modalIsOpen ? (
              <Portal>
                <AreaModal setModalIsOpen={setModalIsOpen} handleModalClose={handleModalClose} />
              </Portal>
            ) : null}
          </button>
        </div>
        {/* <LocateInfo locate={locate?.data} /> */}

        <div className="locationContainer">
          <div className="addressInformation">
            <img src="img/locate.png" />
            <p className="address">주소</p>
            {locate ? (
              <p className="exactAddress">{locate.data}</p>
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
