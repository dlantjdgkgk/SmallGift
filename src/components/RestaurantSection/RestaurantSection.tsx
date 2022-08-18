import * as Styled from "./style";
import KakaoShare from "components/KakaoAPI/KakaoShare/KakaoShare";
import { useParams } from "react-router-dom";

const RestaurantSection = () => {
  const { id } = useParams();

  return (
    <Styled.RestaurantSectionWrapper>
      <div className="section" />
      <div className="resturantThumbnail">
        <div className="category">한식</div>
        <div className="restaurantLike">
          <div className="restaurantName">{id}</div>
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
    </Styled.RestaurantSectionWrapper>
  );
};
export default RestaurantSection;
