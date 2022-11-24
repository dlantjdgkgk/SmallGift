import Footer from "../components/Footer/Footer";
import MainPageCategory from "components/MainPageCategory/MainPageCategory";
import MainPageRestaurant from "components/MainPageRestaurant/MainPageRestaurant";
import MainPageGifticon from "components/MainPageGifticon/MainPageGifticon";
import * as Styled from "./style";
import bannerImg from "../assets/img/banner_1x.png";

const Main = (): JSX.Element => {
  return (
    <>
      <Styled.Main>
        <Styled.Section>
          <img src={bannerImg} alt="배너 이미지" />
        </Styled.Section>
        <MainPageCategory />
        <MainPageRestaurant />
        <Styled.Line />
        <MainPageGifticon />
      </Styled.Main>
      <Footer />
    </>
  );
};

export default Main;
