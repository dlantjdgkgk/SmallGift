import CategoryPageSection from "components/Category/CategoryPageSection";
import styled from "styled-components";

const CategoryWrapper = styled.main`
  margin: 32px 0 0 0px;
`;

const Category = (): JSX.Element => {
  return (
    <CategoryWrapper>
      <CategoryPageSection />
    </CategoryWrapper>
  );
};

export default Category;
