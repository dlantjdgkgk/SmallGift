import * as Styled from "./style";
import styled from "@emotion/styled";

interface MyProps {
  categories: string[];
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SelectedCategory = ({ categories, selectCategory, setSelectCategory }: MyProps) => {
  const buttonClickHandler = (category) => {
    setSelectCategory(category);
    window.history.replaceState("", "", `/category?value=${category}`);
  };

  return (
    <Styled.SelectedCategoryWrapper>
      <div className="selectedCategory">
        {categories.map((category, index) => {
          return (
            <div className="category" key={index}>
              <MyButton
                type="button"
                isSelected={selectCategory === category}
                onClick={() => buttonClickHandler(category)}
              >
                {category}
              </MyButton>
            </div>
          );
        })}
      </div>
    </Styled.SelectedCategoryWrapper>
  );
};

interface MyButtonProps {
  isSelected: boolean;
}

const MyButton = styled.button<MyButtonProps>`
  border: ${(props) => (props.isSelected ? "1px solid #6600CC" : "none")};
  color: ${(props) => (props.isSelected ? "#6600CC" : "#000")};
`;

export default SelectedCategory;
