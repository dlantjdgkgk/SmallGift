import * as Styled from "./style";

interface ICategoryProps {
  categories: string[];
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SelectedCategory = ({ categories, selectCategory, setSelectCategory }: ICategoryProps): JSX.Element => {
  return (
    <Styled.SelectedCategoryWrapper>
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
    </Styled.SelectedCategoryWrapper>
  );
};

export default SelectedCategory;
