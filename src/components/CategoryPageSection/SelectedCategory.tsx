import * as Styled from "./style";
import styled, { ThemedStyledProps } from "styled-components";

interface ICategoryProps {
  categories: string[];
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SelectedCategory = ({ categories, selectCategory, setSelectCategory }: ICategoryProps): JSX.Element => {
  const buttonClickHandler = (category: string): void => {
    setSelectCategory(category);
    window.history.replaceState("", "", `/category?value=${category}`);
  };

  return (
    <Styled.SelectedCategoryWrapper>
      <div>
        {categories.map((category, index) => {
          const isSelected = selectCategory === category;
          return (
            <div className="category" key={index}>
              <button
                style={isSelected ? { border: "1px solid #6600CC", color: "#6600CC" } : undefined}
                type="button"
                aria-label="select"
                onClick={(): void => {
                  setSelectCategory(category);
                  window.history.replaceState("", "", `/category?value=${category}`);
                }}
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>
    </Styled.SelectedCategoryWrapper>
  );
};

export default SelectedCategory;
