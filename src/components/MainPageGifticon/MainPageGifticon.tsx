import * as Styled from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainPageGifticon = (): JSX.Element => {
  const koreaAreas = ["서울/경기도", "강원도", "충청도", "전라도", "경기도", "제주도"];
  const [selectButton, setSelectButton] = useState("서울/경기도");

  const localPopularGifticon = [
    {
      local: "서울/경기도",
      category: "일식",
      restaurantName: "을지다락 강남",
      address: "서울 강남구 강남대로9길 22 2층",
    },
    {
      local: "서울/경기도",
      category: "카페",
      restaurantName: "벙커힐",
      address: "서울 송파구 강남대로9길 23 2층",
    },
    {
      local: "서울/경기도",
      category: "양식",
      restaurantName: "남미플랜트랩",
      address: "서울 양천구 강남대로9길 24 2층",
    },

    {
      local: "강원도",
      category: "일식",
      restaurantName: "벙커힐",
      address: "강원도 강남대로9길 22 2층",
    },
    { local: "강원도", category: "카페", restaurantName: "벙커힐", address: "강원도 강남대로9길 22 2층" },
    { local: "강원도", category: "양식", restaurantName: "남미플랜트랩", address: "강원도 강남대로9길 22 2층" },
    {
      local: "충청도",
      category: "일식",
      restaurantName: "충청도",
      address: "충청도 강남대로9길 22 2층",
    },
    { local: "충청도", category: "카페", restaurantName: "벙커힐", address: "충청도 강남대로9길 22 2층" },
    { local: "충청도", category: "양식", restaurantName: "남미플랜트랩", address: "충청도 강남대로9길 22 2층" },
    {
      local: "전라도",
      category: "일식",
      restaurantName: "전라도",
      address: "전라도 강남대로9길 22 2층",
    },
    { local: "전라도", category: "카페", restaurantName: "벙커힐", address: "전라도 강남대로9길 22 2층" },
    { local: "전라도", category: "양식", restaurantName: "남미플랜트랩", address: "전라도 강남대로9길 22 2층" },
    {
      local: "경기도",
      category: "일식",
      restaurantName: "경기도",
      address: "경기도 강남대로9길 22 2층",
    },
    { local: "경기도", category: "카페", restaurantName: "벙커힐", address: "경기도 강남대로9길 22 2층" },
    { local: "경기도", category: "양식", restaurantName: "남미플랜트랩", address: "경기도 강남대로9길 22 2층" },
    {
      local: "제주도",
      category: "일식",
      restaurantName: "제주도",
      address: "제주도 강남대로9길 22 2층",
    },
    { local: "제주도", category: "카페", restaurantName: "벙커힐", address: "제주도 강남대로9길 22 2층" },
    { local: "제주도", category: "양식", restaurantName: "남미플랜트랩", address: "제주도 강남대로9길 22 2층" },
  ];

  interface MyButtonProps {
    isSelected: boolean;
  }

  const MyButton = styled.button<MyButtonProps>`
    background-color: ${(props) => (props.isSelected ? "#6600CC" : "null")};
    color: ${(props) => (props.isSelected ? "white" : "null")};
  `;

  return (
    <Styled.SectionGifticonWrapper>
      <p className="gifticon">지역별 인기있는 기프티콘이에요</p>
      <section className="areas">
        {koreaAreas.map((area, index) => {
          const isSelected = selectButton === area;
          return (
            <MyButton
              type="button"
              aria-label="Click"
              key={index}
              onClick={(): void => {
                setSelectButton(area);
              }}
              isSelected={isSelected}
            >
              {area}
            </MyButton>
          );
        })}
      </section>

      <section className="gifticonInformation">
        {localPopularGifticon
          .filter((item) => item.local === selectButton)
          .map((shop, index) => {
            return (
              <Link to={`/category?value=${shop.category} `} key={index}>
                <article className="addressInformation" aria-label="Click">
                  <img src="img/food.png" />
                  <button className="category" type="button">
                    {shop.category}
                  </button>
                  <p className="restaurantName">{shop.restaurantName}</p>
                  <p className="restaurantAddress">{shop.address}</p>
                </article>
              </Link>
            );
          })}
      </section>
    </Styled.SectionGifticonWrapper>
  );
};

export default MainPageGifticon;
