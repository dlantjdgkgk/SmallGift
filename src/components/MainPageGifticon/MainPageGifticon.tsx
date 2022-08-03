import * as Styled from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainPageGifticon = () => {
  const koreaAreas = ["서울/경기도", "강원도", "충청도", "전라도", "경기도", "제주도"];
  const [selectButton, setSelectButton] = useState("서울/경기도");
  const [activeContainer, setActiveContainer] = useState(0);

  // setInterval에는 +1 씩 되다가 컨테이너 length 이상 되면 0으로 다시 돌아가는 함수
  // active된거에만 클래스명 줘서 css로 효과내면 될듯?
  useEffect(() => {
    const swapActiveConatiner = setInterval(() => {}, 2000);
    return () => clearInterval(swapActiveConatiner);
  }, []);

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
      address: "서울 송파구 강남대로9길 22 2층",
    },
    {
      local: "서울/경기도",
      category: "양식",
      restaurantName: "남미플랜트랩",
      address: "서울 양천구 강남대로9길 22 2층",
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
        {localPopularGifticon
          .filter((item) => item.local === selectButton)
          .map((shop, index) => {
            return index === 0 ? (
              <Link to={`/category?value=${shop.category}`}>
                <div key={index}>
                  <button className="addressInformation" type="button" aria-label="Click">
                    <div className="category">{shop.category}</div>
                    <div className="restaurantName">{shop.restaurantName}</div>
                    <div className="restaurantAddress">{shop.address}</div>
                  </button>
                </div>
              </Link>
            ) : (
              <Link to={`/category?value=${shop.category}`}>
                <div key={index}>
                  <button className="cafeInformation" type="button" aria-label="Click">
                    <div>{shop.restaurantName}</div>
                  </button>
                </div>
              </Link>
            );
          })}
      </div>
    </Styled.SectionGifticonWrapper>
  );
};

export default MainPageGifticon;
