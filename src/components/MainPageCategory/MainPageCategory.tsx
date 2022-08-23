import * as Styled from "./style";
import { Link } from "react-router-dom";
import { categories } from "./datas";
// /category 일때는 오류화면을 띄어줘야한다.

const MainPageCategory = () => {
  return (
    <>
      <Styled.MainPageCategoryWrapper>
        <p className="categorySearch">카테고리별로 탐색해보세요</p>
        <section className="categories">
          {categories.map((category, index) => {
            console.log(category.imgName);
            return (
              <Link to={`/category?value=${category.category}`} key={index} style={{ color: "black" }}>
                <article className="foodCategory">
                  <img src={`img/${category.imgName}.png`} />
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
