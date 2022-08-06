import Footer from "../components/Footer/Footer";
import MainPageCategory from "components/MainPageCategory/MainPageCategory";
import MainPageRestaurant from "components/MainPageRestaurant/MainPageRestaurant";
import MainPageGifticon from "components/MainPageGifticon/MainPageGifticon";
import * as Styled from "./style";

const Main = () => {
  return (
    <>
      <Styled.Navbar />
      <Styled.Main>
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
