import * as Styled from "./style";
import KakaoShare from "components/KakaoAPI/KakaoShare/KakaoShare";

const RestaurantNav = () => {
  return (
    <Styled.RestaurantNavWrapper>
      <div className="nav" />
      <div className="resturantThumbnail">
        <div className="category">한식</div>
        <div className="restaurantLike">
          <div className="restaurantName">쭈꾸미랩소디 강남점</div>
          <div className="likeAndShareButton">
            <button type="button" className="like">
              Like
            </button>
            <button type="button" className="share">
              <KakaoShare />
            </button>
          </div>
        </div>
      </div>
    </Styled.RestaurantNavWrapper>
  );
};
export default RestaurantNav;
