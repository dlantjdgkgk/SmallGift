import * as Styled from "./style";
import { Link } from "react-router-dom";
import { categories, images } from "./datas";

const MainPageCategory = (): JSX.Element => {
  return (
    <>
      <Styled.MainPageCategoryWrapper>
        <Styled.Title>카테고리별로 탐색해보세요</Styled.Title>
        <Styled.CategorySection>
          {categories.map((category) => {
            return (
              <Link to={`/category?value=${category.category}`} key={category.id} style={{ color: "black" }}>
                <Styled.CategoryArticle>
                  <img src={images[category.id]} alt="" />
                  <p>{category.category}</p>
                </Styled.CategoryArticle>
              </Link>
            );
          })}
        </Styled.CategorySection>
      </Styled.MainPageCategoryWrapper>
      <Styled.Line />
    </>
  );
};

export default MainPageCategory;
