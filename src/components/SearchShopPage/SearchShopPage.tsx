import * as Styled from "./style";
import { useEffect, useState, ChangeEvent, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { apiInstance } from "../../api/setting";
import Back from "../../assets/img/Back.png";
import Cancel from "../../assets/img/Cancel.png";
import NotData from "../../assets/img/NotData.png";
import { Link } from "react-router-dom";
import CafeImage from "../../assets/img/CafeImage.png";
import RecommendActions from "./RecommendActions";

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
];

interface IKeyWordProps {
  data: string;
  id: number;
}
const SearchShopPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const searchInfo = params.id;
  const [inputValue, setInputValue] = useState("");
  const [shopInfo, setShopInfo] = useState([]);
  const [keyWord, setKeyWord] = useState([]);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current !== null && searchInfo !== undefined) {
      ref.current.value = searchInfo;
    }
  }, [searchInfo]);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    keyWordPostAPI(inputValue);
  };

  const keyWordAPI = async (): Promise<void> => {
    try {
      const keyWordData = await apiInstance.get("/api/user/keyword?memberId=1");
      setKeyWord(keyWordData.data.data.userKeywords);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const keyWordPostAPI = async (keyword: string): Promise<void> => {
    try {
      const payload = {
        keyword,
        memberId: 1,
      };
      await apiInstance.post("/api/user/keyword", payload);
      navigate(`/search/shop/${keyword}`);
    } catch (error) {
      console.log(error);
    }
  };

  const ShopInfoKeyWordAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/shop/info/keyword?keyword=${searchInfo}`);
      setShopInfo(result.data.data.topShopByLocate);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    keyWordAPI();
    ShopInfoKeyWordAPI();
  }, []);

  return (
    <Styled.SearchPageWrapper>
      <form onSubmit={onSubmit}>
        <div className="searchBar">
          <button
            type="button"
            onClick={(): void => {
              navigate(-1);
            }}
            className="back"
          >
            <img src={Back} alt="" />
          </button>
          <input type="text" onChange={onChange} placeholder="가게명 또는 상품명 검색하기" ref={ref} />
          {inputValue ? (
            <button
              type="button"
              onClick={(): void => {
                setInputValue("");
              }}
              className="cancel"
            >
              <img src={Cancel} alt="" />
            </button>
          ) : null}
        </div>
      </form>
      <Styled.SearchTitle>
        {shopInfo.length === 0 ? (
          <div className="center">
            <img src={NotData} alt="" />
            <div className="search">검색결과가 없어요</div>
            <span className="keyword">이런 키워드는 어때요?</span>
            <div className="records">
              {keyWord?.map((data: IKeyWordProps) => {
                return (
                  <Link to={`/search/shop/${data.data}`} key={data.id}>
                    <div className="record" key={data.id}>
                      <p>{data.data}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="searchTitle">
            <span className="shopInfo">{searchInfo}</span>
            <span className="length">{shopInfo.length}건</span>
            <span className="extra">이 검색되었어요.</span>
          </div>
        )}
      </Styled.SearchTitle>

      <Styled.ShopInfoWrapper>
        {shopInfo.length > 0 && (
          <div className="restaurants">
            {tempShopList.map((shop, index) => {
              return (
                <Link to={`/category/${shop.restaurantName}`} key={index} state={{ shop }}>
                  <article className="restaurant">
                    <img src={CafeImage} />
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
        )}
      </Styled.ShopInfoWrapper>

      {ref.current && <RecommendActions input={ref.current} keyWordPostAPI={keyWordPostAPI} />}
    </Styled.SearchPageWrapper>
  );
};

export default SearchShopPage;
