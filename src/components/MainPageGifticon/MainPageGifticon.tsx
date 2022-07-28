import * as Styled from "./style";

const MainPageGifticon = () => {
  return (
    <Styled.SectionGifticonWrapper>
      <p className="gifticon">지역별 인기있는 기프티콘이에요</p>
      <div className="areas">
        <div className="area">
          <button type="button" aria-label="Click">
            서울/경기도
          </button>
        </div>
        <div className="area">
          <button type="button" aria-label="Click">
            강원도
          </button>
        </div>
        <div className="area">
          <button type="button" aria-label="Click">
            충청도
          </button>
        </div>
        <div className="area">
          <button type="button" aria-label="Click">
            전라도
          </button>
        </div>
        <div className="area">
          <button type="button" aria-label="Click">
            경기도
          </button>
        </div>
        <div className="area">
          <button type="button" aria-label="Click">
            강원도
          </button>
        </div>
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
