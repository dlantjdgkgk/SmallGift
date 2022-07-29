import * as Styled from "./style";
import { useState } from "react";
import queryString from "query-string";

const CategoryPageSection = () => {
  const selectList = ["서울시 강남구 역삼동", "서울시 송파구 가락동"];
  const Categories = ["전체", "한식", "일식", "중식", "양식", "카페"];
  const [selected, setSelected] = useState("");
  const queryStringResult = queryString.parse(window.location.search).value;
  const defaultSelect = queryStringResult;
  const [selectCategory, setSelectCategory] = useState(defaultSelect);

  const list = [
    {
      category: "한식",
      restaurantName: "쭈꾸미랩소디 강남점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌 외",
    },
    {
      category: "일식",
      restaurantName: "쭈꾸미랩소디 강남점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌 외",
    },
    {
      category: "중식",
      restaurantName: "쭈꾸미랩소디 강남점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌 외",
    },
    {
      category: "양식",
      restaurantName: "쭈꾸미랩소디 강남점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌 외",
    },
    {
      category: "카페",
      restaurantName: "쭈꾸미랩소디 강남점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌 외",
    },
  ];

  return (
    <Styled.CategoryPageSectionWrapper>
      <select
        onChange={(e) => {
          setSelected(e.target.value);
        }}
        value={selected}
      >
        {selectList.map((item, index) => (
          <option value={item} key={index}>
            <p>{item}</p>
          </option>
        ))}
      </select>
      <p>근처에 있는 가게를 알려드릴게요</p>

      <div className="selectedCategory">
        {Categories.map((category, index) => {
          const isSelected = selectCategory === category;
          return (
            <div className="category" key={index}>
              <button
                style={isSelected ? { border: "1px solid black" } : undefined}
                type="button"
                aria-label="select"
                onClick={() => {
                  setSelectCategory(category);
                }}
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>

      <div className="restaurants">
        <div className="restaurant">
          <div className="box" />
          <div className="restaurantInformation">
            <button className="category" type="button">
              한식
            </button>
            <p className="restaurantName">쭈꾸미랩소디 강남점</p>
            <p className="restaurantMenu">쭈차돌세트,직화쭈꾸미,직화차돌 외</p>
          </div>
        </div>
        {/* <div className="restaurant">
          <div className="box" />
          <div className="restaurantInformation">
            <button className="category" type="button">
              한식
            </button>
            <p className="restaurantName">을지다락 강남</p>
            <p className="restaurantMenu">다락 오므라이스,다락 로-제,가츠산도 외</p>
          </div>
        </div> */}
        {/* <div className="restaurant">
          <div className="box" />
          <div className="restaurantInformation">
            <button className="category" type="button">
              한식
            </button>
            <p className="restaurantName">썸띵어바웃커피</p>
            <p className="restaurantMenu">아메리카노,카페라떼,치즈케이크</p>
          </div>
        </div> */}
      </div>
    </Styled.CategoryPageSectionWrapper>
  );
};

export default CategoryPageSection;
