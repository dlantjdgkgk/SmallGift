import * as Styled from "./style";
import { Link } from "react-router-dom";
import { categories, images } from "./datas";
import { apiInstance } from "api/setting";
import { useEffect, useState } from "react";

const MainPageCategory = (): JSX.Element => {
  const memberId = 16;
  const [locate, setLocate] = useState(null);

  const userLocateAPI = async (): Promise<void> => {
    try {
      const res = await apiInstance.get(`/api/user/locate?memberId=${memberId}`);
      setLocate(res.data);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  useEffect(() => {
    userLocateAPI();
  }, []);

  console.log(locate);

  return (
    <>
      <Styled.MainPageCategoryWrapper>
        <p className="categorySearch">카테고리별로 탐색해보세요</p>
        <section className="categories">
          {categories.map((category) => {
            return (
              <Link
                to={`/category?value=${category.category}`}
                key={category.id}
                style={{ color: "black" }}
                state={locate}
              >
                <article className="foodCategory">
                  <img src={images[category.id]} alt="" />
                  <p>{category.category}</p>
                </article>
              </Link>
            );
          })}
        </section>
      </Styled.MainPageCategoryWrapper>
      <Styled.Line />
    </>
  );
};

export default MainPageCategory;
