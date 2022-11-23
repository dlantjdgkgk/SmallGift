import * as Styled from "./style";
import Shadow from "../../assets/img/shadow.png";

interface IProps {
  category: string;
  shopName: string;
  image: string | undefined;
}

const RestaurantSection = ({ category, shopName, image }: IProps): JSX.Element => {
  return (
    <Styled.RestaurantSectionWrapper>
      <img src={Shadow} alt="" className="shadow" />
      <img src={image} alt="" className="picture" />
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
