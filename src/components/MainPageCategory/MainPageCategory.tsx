import React from "react";
import * as Styled from "./style";

const MainPageCategory = () => {
  return (
    <>
      <Styled.MainPageCategoryWrapper>
        <p className="categorySearch">카테고리별로 탐색해보세요</p>
        <div className="categories">
          <div className="FoodCategory">
            <button type="button" aria-label="Click" />
            <p>한식</p>
          </div>
          <div className="FoodCategory">
            <button type="button" aria-label="Click" />
            <p>일식</p>
          </div>
          <div className="FoodCategory">
            <button type="button" aria-label="Click" />
            <p>중식</p>
          </div>
          <div className="FoodCategory">
            <button type="button" aria-label="Click" />
            <p>양식</p>
          </div>
          <div className="FoodCategory">
            <button type="button" aria-label="Click" />
            <p>양식</p>
          </div>
        </div>
      </Styled.MainPageCategoryWrapper>
      <Styled.Line />
    </>
  );
};

export default MainPageCategory;
