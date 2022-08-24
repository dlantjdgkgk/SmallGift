import * as Styled from "./style";
import { useParams } from "react-router-dom";
import LikeSVG from "../LikeSVG/LikeSVG";
import { useState } from "react";

const RestaurantSection = () => {
  const { id } = useParams();
  const [like, setLike] = useState(false);

  return (
    <Styled.RestaurantSectionWrapper>
      <img src="/img/shadow.png" className="shadow" />
      <img src="/img/RestaurantInfo.png" className="picture" />
      <div className="resturantThumbnail">
        <button className="category" type="button">
          한식
        </button>
        <div className="restaurantLike">
          <div className="restaurantName">{id}</div>
          <button type="button" onClick={() => setLike(!like)}>
            <LikeSVG fill={like ? "white" : undefined} />
          </button>
        </div>
      </div>
    </Styled.RestaurantSectionWrapper>
  );
};
export default RestaurantSection;
