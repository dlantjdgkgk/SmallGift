import * as Styled from "./style";
import Shadow from "../../assets/img/shadow.png";
import RestaurantInfo from "../../assets/img/RestaurantInfo.png";

interface IProps {
  category: string;
  shopName: string;
}

const RestaurantSection = ({ category, shopName }: IProps): JSX.Element => {
  return (
    <Styled.RestaurantSectionWrapper>
      <img src={Shadow} alt="" className="shadow" />
      <img src={RestaurantInfo} alt="" className="picture" />
      <div className="resturantThumbnail">
        <button className="category" type="button">
          {category}
        </button>
        <div className="restaurantLike">
          <div className="restaurantName">{shopName}</div>
        </div>
      </div>
    </Styled.RestaurantSectionWrapper>
  );
};
export default RestaurantSection;
