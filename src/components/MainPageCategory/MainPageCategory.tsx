import * as Styled from "./style";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// /category 일때는 오류화면을 띄어줘야한다.

const MainPageCategory = () => {
  const categories = ["전체", "한식", "일식", "중식", "양식", "카페"];
  const navigate = useNavigate();
  return (
    <>
      <Styled.MainPageCategoryWrapper>
        <p className="categorySearch">카테고리별로 탐색해보세요</p>
        <div className="categories">
          {categories.map((category, index) => {
            return (
              <Link to={`/category?value=${category}`} key={index} style={{ color: "black" }}>
                <div className="FoodCategory">
                  <button type="button" aria-label="Click" />
                  <p>{category}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Styled.MainPageCategoryWrapper>
      <Styled.Line />
    </>
  );
};

export default MainPageCategory;
