import * as Styled from "./style";
import Shadow from "../../../assets/img/shadow.png";

interface IProps {
  category: string;
  shopName: string;
  image: string | undefined;
}

const RestaurantSection = ({ category, shopName, image }: IProps): JSX.Element => {
  return (
    <Styled.RestaurantSectionWrapper>
      <Styled.ShadowImg src={Shadow} alt="" />
      <Styled.RestaurantImg src={image} alt="" />
      <Styled.RestaurantInfo>
        <span>{category}</span>
        <Styled.RestaurantName>{shopName}</Styled.RestaurantName>
      </Styled.RestaurantInfo>
    </Styled.RestaurantSectionWrapper>
  );
};
export default RestaurantSection;
