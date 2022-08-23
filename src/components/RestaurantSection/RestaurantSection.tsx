import * as Styled from "./style";
import KakaoShare from "components/KakaoAPI/KakaoShare/KakaoShare";
import { useParams } from "react-router-dom";

const RestaurantSection = () => {
  const { id } = useParams();

  return (
    <Styled.RestaurantSectionWrapper>
      <img src="/img/RestaurantInfo.png" />
      <div className="resturantThumbnail">
        <button className="category" type="button">
          한식
        </button>
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
