import Footer from "../components/Common/Footer/Footer";
import MainPageCategory from "../components/Main/MainPageCategory/MainPageCategory";
import MainPageRestaurant from "../components/Main/MainPageRestaurant/MainPageRestaurant";
import MainPageGifticon from "../components/Main/MainPageGifticon/MainPageGifticon";
import styled from "styled-components";
import bannerImg from "../assets/img/banner.png";

const MainWrapper = styled.main``;

const Section = styled.div`
  background-repeat: no-repeat;
  img {
    width: 100%;
    display: block;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 12px;
  background-color: #f4f4f4;
  margin-bottom: 32px;
`;

const Main = (): JSX.Element => {
  return (
    <>
      <MainWrapper>
        <Section>
          <img src={bannerImg} alt="배너 이미지" />
        </Section>
        <MainPageCategory />
        <MainPageRestaurant />
        <Line />
        <MainPageGifticon />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Main;
