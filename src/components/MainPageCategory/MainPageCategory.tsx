import * as Styled from "./style";
import { useNavigate } from "react-router";

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
              <div className="FoodCategory" key={index}>
                <button
                  type="button"
                  aria-label="Click"
                  onClick={() => {
                    navigate(`/category?value=${category}`);
                  }}
                />
                <p>{category}</p>
              </div>
            );
          })}
        </div>
      </Styled.MainPageCategoryWrapper>
      <Styled.Line />
    </>
  );
};

export default MainPageCategory;
