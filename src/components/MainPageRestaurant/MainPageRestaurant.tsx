import * as Styled from "./style";

const MainPageRestaurant = () => {
  return (
    <Styled.SectionRestaurantWrapper>
      <p className="location">홍길동님 근처에 있어요</p>
      <div className="container">
        <div className="addressInformation">
          <p className="address">주소</p>
          <p className="exactAddress">서울특별시 마포구 양화로7안길ss</p>
        </div>
        <div className="locationButton">
          <p>현재 계신 곳의 위치가 맞나요?</p>
          <button type="button" aria-label="Click">
            위치 변경하기 {">"}
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
          <div className="category">일식</div>
          <button type="button" aria-label="Click" />
          <div className="restaurantInformation">
            <p className="restaurantName">카멜로 연남</p>
            <p className="restaurantMenu">버터 봉골레 파스타</p>
            <p className="menuPrice">17,000원</p>
          </div>
        </div>
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
          <div className="category">일식</div>
          <button type="button" aria-label="Click" />
          <div className="restaurantInformation">
            <p className="restaurantName">카멜로 연남</p>
            <p className="restaurantMenu">버터 봉골레 파스타</p>
            <p className="menuPrice">17,000원</p>
          </div>
        </div>
      </div>
    </Styled.SectionRestaurantWrapper>
  );
};

export default MainPageRestaurant;
