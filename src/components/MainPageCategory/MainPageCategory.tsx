import * as Styled from "./style";
import { Link } from "react-router-dom";
import { categories, images } from "./datas";

const MainPageCategory = (): JSX.Element => {
  return (
    <>
      <Styled.MainPageCategoryWrapper>
        <p className="categorySearch">카테고리별로 탐색해보세요</p>
        <section className="categories">
          {categories.map((category) => {
            return (
              <Link to={`/category?value=${category.category}`} key={category.id} style={{ color: "black" }}>
                <article className="foodCategory">
                  <img src={images[category.id]} alt="" />
                  <p>{category.category}</p>
                </article>
              </Link>
            );
          })}
        </section>
      </Styled.MainPageCategoryWrapper>
      <Styled.Line />
    </>
  );
};

export default MainPageCategory;
