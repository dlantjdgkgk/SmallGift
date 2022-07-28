import * as Styled from "./style";
import Select from "react-select";
import { useState } from "react";
import { FormatListNumbered } from "@mui/icons-material";

const CategoryPageSection = () => {
  const selectList = ["서울시 강남구 역삼동", "서울시 송파구 가락동"];
  const selectCategory = ["전체", "한식", "일식", "중식", "양식", "카페"];
  const [Selected, setSelected] = useState("");
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <Styled.CategoryPageSectionWrapper>
      <select
        onChange={(e) => {
          setSelected(e.target.value);
        }}
        value={Selected}
      >
        {selectList.map((item, index) => (
          <option value={item} key={index}>
            <p>{item}</p>
          </option>
        ))}
      </select>
      <p>근처에 있는 가게를 알려드릴게요</p>
      <div className="selectedCategory">
        {selectCategory.map((category, index) => {
          return (
            <div className="category" key={index}>
              <button
                style={{
                  border: selectedButton === index ? "1px solid black" : "none",
                }}
                type="button"
                aria-label="select"
                onClick={() => {
                  setSelectedButton(index);
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
        <div className="restaurant">
          <div className="box" />
          <div className="restaurantInformation">
            <button className="category" type="button">
              한식
            </button>
            <p className="restaurantName">을지다락 강남</p>
            <p className="restaurantMenu">다락 오므라이스,다락 로-제,가츠산도 외</p>
          </div>
        </div>
        <div className="restaurant">
          <div className="box" />
          <div className="restaurantInformation">
            <button className="category" type="button">
              한식
            </button>
            <p className="restaurantName">썸띵어바웃커피</p>
            <p className="restaurantMenu">아메리카노,카페라떼,치즈케이크</p>
          </div>
        </div>
      </div>
    </Styled.CategoryPageSectionWrapper>
  );
};

export default CategoryPageSection;
