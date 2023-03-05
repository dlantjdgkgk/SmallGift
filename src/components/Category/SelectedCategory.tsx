import { useNavigate } from "react-router";
import * as Styled from "./style";

interface ICategoryProps {
  categories: string[];
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SelectedCategory = ({ categories, selectCategory, setSelectCategory }: ICategoryProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Styled.SelectedCategoryWrapper>
      {categories.map((category) => {
        const isSelected = selectCategory === category;
        return (
          <div key={category}>
            <button
              style={isSelected ? { border: "1px solid #6600CC", color: "#6600CC" } : undefined}
              type="button"
              onClick={(): void => {
                setSelectCategory(category);
                navigate(`/category?value=${category}`, { replace: true });
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
