import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Region from "./Region";
import * as Styled from "./style";
import Spinner from "elements/Spinner";
import useScrollToggle from "hooks/useScrollToggle";
import styled from "@emotion/styled";
import SelectedCategory from "./SelectedCategory";
import CategoryRestaurant from "./CategoryRestaurant";

const CategoryPageSection = () => {
  const [searchParams] = useSearchParams();
  const categories = ["전체", "한식", "일식", "중식", "양식", "카페"];
  const defaultSelect = searchParams.get("value") || categories[0];
  const [selectCategory, setSelectCategory] = useState(defaultSelect);
  const intersectionTarget = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const tempShopList = [
    {
      category: "한식",
      restaurantName: "쭈꾸미랩소디 강남점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌",
    },
    {
      category: "한식",
      restaurantName: "쭈꾸미랩소디 강남점",
      restaurantMenu: "쭈차돌세트,직화쭈꾸미,직화차돌",
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
  const [shopList, setShopList] = useState(tempShopList);
  const scrollFlag = useScrollToggle(false);

  const moveToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const getMoreItem = async () => {
    setIsLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setShopList((prev) => [...prev, ...tempShopList]);
        setIsLoading(false);
        resolve(0);
      }, 500);
    });
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      // await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    if (!intersectionTarget.current) return undefined;
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.4,
    });

    observer.observe(intersectionTarget.current);

    return () => observer && observer.disconnect();
  }, [intersectionTarget.current]);

  return (
    <>
      <Region />
      <SelectedCategory categories={categories} selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
      <Styled.BoundaryLine />
      <CategoryRestaurant shopList={shopList} selectCategory={selectCategory} />
      <IntersectionBox ref={intersectionTarget} className="Target-Element">
        {isLoading && <Spinner />}
      </IntersectionBox>
      <button type="button" className="top" onClick={moveToTop}>
        {scrollFlag && <img src="/img/Top.png" />}
      </button>
    </>
  );
};

const IntersectionBox = styled.div`
  width: 100%;
  height: 100px;
`;

export default CategoryPageSection;
