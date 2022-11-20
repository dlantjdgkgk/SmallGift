import { useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Region from "./Region";
import * as Styled from "./style";
import Spinner from "elements/Spinner";
import styled from "@emotion/styled";
import SelectedCategory from "./SelectedCategory";
import CategoryRestaurant from "./CategoryRestaurant";
import throttle from "utils/throttle";
import Top from "../../assets/img/Top.png";
import { apiInstance } from "../../api/setting";

const CategoryPageSection = (): JSX.Element => {
  const categories = ["전체", "한식", "일식", "중식", "양식", "카페"];
  const [searchParams] = useSearchParams();
  const defaultSelect = searchParams.get("value") || categories[0];
  const [selectCategory, setSelectCategory] = useState(defaultSelect);
  const [isLoading, setIsLoading] = useState(false);
  const intersectionTarget = useRef(null);

  const resulta = useLocation();
  const location = resulta.state;

  console.log(location);

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

  const [scrollFlag, setScrollFlag] = useState<boolean>(false);

  const updateScroll = (): void => {
    const { scrollY } = window;
    scrollY > 100 ? setScrollFlag(true) : setScrollFlag(false);
  };
  const handleScroll = (): Function => throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const page = 1;
  const pageCount = 1;

  const ShopInfoAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(
        `/api/user/shop/info/all/locate/category?category=${selectCategory}&locate=${location}&page=${page}&pageCount=${pageCount}`,
      );
      console.log(result);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  // useEffect(() => {
  //   ShopInfoAPI();
  // }, []);

  const moveToTop = (): void => window.scrollTo({ top: 0, behavior: "smooth" });

  // const getMoreItem = (): Promise<number> => {
  //   setIsLoading(true);
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       setShopList((prev) => [...prev, ...tempShopList]);
  //       setIsLoading(false);
  //       resolve(0);
  //     }, 500);
  //   });
  // };

  const onIntersect = async (
    [entry]: any,
    observer: { unobserve: (arg0: any) => void; observe: (arg0: any) => void },
    // eslint-disable-next-line require-await
  ): Promise<void> => {
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
        {scrollFlag && <img src={Top} alt="" />}
      </button>
    </>
  );
};

const IntersectionBox = styled.div`
  width: 100%;
  height: 100px;
`;

export default CategoryPageSection;
