import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as Styled from "./style";
import SelectedCategory from "./SelectedCategory";
import throttle from "utils/throttle";
import Top from "../../assets/img/Top.png";
import { selectList } from "./data";
import CategoryRestaurant from "./CategoryRestaurant";

const CategoryPageSection = (): JSX.Element => {
  const categories = ["전체", "한식", "일식", "중식", "양식", "카페"];
  const [searchParams] = useSearchParams();
  const defaultSelect = searchParams.get("value") || categories[0];
  const [selectCategory, setSelectCategory] = useState(defaultSelect);
  const [selectLocate, setSelectLocate] = useState("서울 강남구");
  const [scrollFlag, setScrollFlag] = useState<boolean>(false);

  const updateScroll = (): void => {
    const { scrollY } = window;
    scrollY > 100 ? setScrollFlag(true) : setScrollFlag(false);
  };
  const handleScroll = (): Function => throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveToTop = (): void => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Styled.CategoryPageSectionWrapper>
        <select
          onChange={(e): void => {
            setSelectLocate(e.target.value);
          }}
          value={selectLocate}
        >
          {selectList.map((item) => (
            <option value={item.region} key={item.id}>
              {item.region}
            </option>
          ))}
        </select>
        <p>근처에 있는 가게를 알려드릴게요</p>
      </Styled.CategoryPageSectionWrapper>
      <SelectedCategory categories={categories} selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
      <Styled.BoundaryLine />
      <CategoryRestaurant selectCategory={selectCategory} selectLocate={selectLocate} />
      <button type="button" className="top" onClick={moveToTop}>
        {scrollFlag && <img src={Top} alt="" />}
      </button>
    </>
  );
};

export default CategoryPageSection;
