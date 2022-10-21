import * as Styled from "./style";
import styled from "styled-components";

interface MyProps {
  categories: string[];
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
}

type MyButtonProps = {
  isSelected: boolean;
};

const MyButton = styled.button<MyButtonProps>`
  border: ${(props) => (props.isSelected ? "1px solid #6600CC" : "none")};
  color: ${(props) => (props.isSelected ? "#6600CC" : "#000")};
`;

const SelectedCategory = ({ categories, selectCategory, setSelectCategory }: MyProps): JSX.Element => {
  const buttonClickHandler = (category: string): void => {
    setSelectCategory(category);
    window.history.replaceState("", "", `/category?value=${category}`);
  };

  return (
    <Styled.SelectedCategoryWrapper>
      <div>
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <MyButton
                type="button"
                isSelected={selectCategory === category}
                onClick={(): void => buttonClickHandler(category)}
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

export default SelectedCategory;
