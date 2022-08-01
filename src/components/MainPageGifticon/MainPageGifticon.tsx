import * as Styled from "./style";
import { useState } from "react";

const MainPageGifticon = () => {
  const koreaAreas = ["서울/경기도", "강원도", "충청도", "전라도", "경기도", "제주도"];
  const [selectButton, setSelectButton] = useState("서울/경기도");

  const localPopularGifticon = [
    {
      category: "일식",
      restaurantName: "을지다락 강남",
      address: "서울 강남구 강남대로9길 22 2층",
      cafeInformation: "벙커힐",
      restaurantInformation: "남미플랜트랩",
    },
  ];

  return (
    <Styled.SectionGifticonWrapper>
      <p className="gifticon">지역별 인기있는 기프티콘이에요</p>
      <div className="areas">
        {koreaAreas.map((area, index) => {
          const isSelected = selectButton === area;
          return (
            <div className="area" key={index}>
              <button
                type="button"
                aria-label="Click"
                onClick={() => {
                  setSelectButton(area);
                }}
                style={isSelected ? { backgroundColor: "#5E5E5E", color: "white" } : undefined}
              >
                {area}
              </button>
            </div>
          );
        })}
      </div>

      <div className="gifticonInformation">
        <div className="container">
          <button className="addressInformation" type="button" aria-label="Click">
            <div className="category">일식</div>
            <div className="restaurantName">을지다락 강남</div>
            <div className="restaurantAddress">서울 강남구 강남대로9길 22 2층</div>
          </button>
          <button className="cafeInformation" type="button" aria-label="Click">
            <div>벙커힐</div>
          </button>
          <button className="restaurantInformation" type="button" aria-label="Click">
            <div>남미플랜트랩</div>
          </button>
        </div>
      </div>
    </Styled.SectionGifticonWrapper>
  );
};

export default MainPageGifticon;
