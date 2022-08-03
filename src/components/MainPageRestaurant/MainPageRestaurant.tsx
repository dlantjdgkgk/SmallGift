import * as Styled from "./style";
import Portal from "components/Portal/Portal";
import AreaModal from "components/AreaModal/AreaModal";
import { useState } from "react";

const MainPageRestaurant = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Styled.SectionRestaurantWrapper>
      <p className="location">지역을 설정해보세요</p>
      <div className="container">
        <div className="addressInformation">
          <p className="address">주소</p>
          <p className="exactAddress">서울특별시 마포구 양화로7안길ss</p>
        </div>
        <div className="locationButton">
          <p>현재 계신 곳의 위치가 맞나요?</p>
          <button
            type="button"
            aria-label="Click"
            onClick={() => {
              setModalIsOpen(!modalIsOpen);
            }}
          >
            위치 변경하기 {">"}
            {modalIsOpen ? (
              <Portal>
                <AreaModal />
              </Portal>
            ) : null}
          </button>
        </div>
      </div>

      <div className="restaurants">
        <div className="restaurant">
          <div className="category">일식</div>
          <button type="button" aria-label="Click" />
          <div className="restaurantInformation">
            <p className="restaurantName">카멜로 연남</p>
            <p className="restaurantMenu">버터 봉골레 파스타</p>
            <p className="menuPrice">17,000원</p>
          </div>
        </div>
        <div className="restaurant">
          <div className="category">카페</div>
          <button type="button" aria-label="Click" />
          <div className="restaurantInformation">
            <p className="restaurantName">모센즈 스위트</p>
            <p className="restaurantMenu">모센 라떼</p>
            <p className="menuPrice">6,000원</p>
          </div>
        </div>
        <div className="restaurant">
          <div className="category">한식</div>
          <button type="button" aria-label="Click" />
          <div className="restaurantInformation">
            <p className="restaurantName">아뜨뜨</p>
            <p className="restaurantMenu">소고기 솥밥</p>
            <p className="menuPrice">15,000원</p>
          </div>
        </div>
      </div>
    </Styled.SectionRestaurantWrapper>
  );
};

export default MainPageRestaurant;
