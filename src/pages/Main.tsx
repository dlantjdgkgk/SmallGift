import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainPageCategory from "components/MainPageCategory/MainPageCategory";
import * as Styled from "./style";

const Main = () => {
  return (
    <>
      <Header />
      <MainPageCategory />
      <Styled.SectionRestaurantWrapper>
        <p className="location">홍길동님 근처에 있어요</p>
        <div className="addressInformation">
          <p className="address">주소</p>
          <p className="exactAddress">서울특별시 마포구 양화로7안길</p>
        </div>
        <div className="locationButton">
          <p>현재 계신 곳의 위치가 맞나요?</p>
          <button type="button" aria-label="Click">
            위치 변경하기 {">"}
          </button>
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
      <Styled.Line />
      <Styled.SectionGifticonWrapper>
        <p className="gifticon">지역별 인기있는 기프티콘이에요</p>
        <div className="areas">
          <div className="area">
            <button type="button" aria-label="Click">
              서울/경기도
            </button>
          </div>
        </div>
      </Styled.SectionGifticonWrapper>
      <Footer />
    </>
  );
};

export default Main;
