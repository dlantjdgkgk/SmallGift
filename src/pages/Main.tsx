import Footer from "../components/Footer/Footer";
import MainPageCategory from "components/MainPageCategory/MainPageCategory";
import MainPageRestaurant from "components/MainPageRestaurant/MainPageRestaurant";
import MainPageGifticon from "components/MainPageGifticon/MainPageGifticon";
import * as Styled from "./style";

const Main = () => {
  return (
    <>
      <Styled.Main>
        <Styled.Section>
          <img src="img/banner_1x.jpg" />
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
