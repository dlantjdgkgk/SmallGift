import * as Styled from "./style";
import { useParams } from "react-router-dom";
import LikeSVG from "../LikeSVG/LikeSVG";
import { useState } from "react";
import Shadow from "../../assets/img/shadow.png";
import RestaurantInfo from "../../assets/img/RestaurantInfo.png";

const RestaurantSection = (): JSX.Element => {
  const { id } = useParams();
  const [like, setLike] = useState(false);

  return (
    <Styled.RestaurantSectionWrapper>
      <img src={Shadow} alt="" className="shadow" />
      <img src={RestaurantInfo} alt="" className="picture" />
      <div className="resturantThumbnail">
        <button className="category" type="button">
          한식
        </button>
        <div className="restaurantLike">
          <div className="restaurantName">{id}</div>
          <button type="button" onClick={(): void => setLike(!like)}>
            <LikeSVG fill={like ? "white" : undefined} stroke={like ? "transparent" : "gray"} />
          </button>
        </div>
      </div>
    </Styled.RestaurantSectionWrapper>
  );
};
export default RestaurantSection;
