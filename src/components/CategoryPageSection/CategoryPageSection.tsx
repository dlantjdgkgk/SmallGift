import * as Styled from "./style";
import { useState } from "react";
import queryString from "query-string";
import { Link, useLocation } from "react-router-dom";
import Region from "./Region";

const CategoryPageSection = () => {
  const { pathname } = useLocation();

  const Categories = ["전체", "한식", "일식", "중식", "양식", "카페"];
  const defaultSelect = queryString.parse(window.location.search).value;
  const [selectCategory, setSelectCategory] = useState(defaultSelect);
  const shopList = [
    {
      category: "한식",
      restaurantName: "쭈꾸미랩소디 강남점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌",
    },
    {
      category: "한식",
      restaurantName: "쭈꾸미랩소디 강남점",
      restaurantMenu: ["쭈차돌세트,직화쭈꾸미,직화차돌"],
    },
    {
      category: "일식",
      restaurantName: "치킨 송파점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌 외",
    },
    {
      category: "중식",
      restaurantName: "짜장면 성수점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌 외",
    },
    {
      category: "양식",
      restaurantName: "리미니 장지점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌 외",
    },
    {
      category: "카페",
      restaurantName: "더 벤티 천호점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌 외",
    },

    {
      category: "카페",
      restaurantName: "더 벤티 천호점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌 외",
    },
    {
      category: "카페",
      restaurantName: "더 벤티 천호점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌 외",
    },
  ];

  return (
    <>
      <Region />
      <Styled.SelectedCategoryWrapper>
        <div className="selectedCategory">
          {Categories.map((category, index) => {
            const isSelected = selectCategory === category;
            return (
              <div className="category" key={index}>
                <button
                  style={isSelected ? { border: "1px solid #6600CC", color: "#6600CC" } : undefined}
                  type="button"
                  aria-label="select"
                  onClick={() => {
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

      <Styled.CategoryRestaurantWrapper>
        <div className="restaurants">
          {(pathname === "/" || selectCategory === "전체"
            ? shopList
            : shopList.filter((shop) => shop.category === selectCategory)
          ).map((shop, index) => {
            return (
              <Link to={`/category/${shop.restaurantName}`} key={index}>
                <article className="restaurant">
                  <img src="img/CafeImage.png" />
                  <div className="restaurantInformation">
                    <button className="category" type="button">
                      {shop.category}
                    </button>
                    <p className="restaurantName">{shop.restaurantName}</p>
                    <p className="restaurantMenu">{shop.restaurantMenu}</p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </Styled.CategoryRestaurantWrapper>
    </>
  );
};

export default CategoryPageSection;
