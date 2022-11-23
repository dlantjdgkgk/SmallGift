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

interface IKeyWordProps {
  data: string;
  id: number;
}

interface IShopProps {
  data: {
    category: string;
    shopName: string;
    shopId: number;
    productContent: string;
    shopThumbnailImage: string;
  };
}

const SearchShopPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const searchInfo = params.id;
  const [inputValue, setInputValue] = useState("");
  const [shopInfo, setShopInfo] = useState([]);
  const [keyWord, setKeyWord] = useState([]);
  const [shopList, setShopList] = useState<IShopProps[]>([]);
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

  console.log(shopInfo);

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
            {shopList.map((shop) => {
              return (
                <Link
                  to={`/category/${shop.data.category}/${shop.data.shopName}/${shop.data.shopId}`}
                  key={shop.data.shopId}
                >
                  <article className="restaurant">
                    <img src={shop.data.shopThumbnailImage} alt="가게 이미지" />
                    <div className="restaurantInformation">
                      <button className="category" type="button">
                        {shop.data.category}
                      </button>
                      <p className="restaurantName">{shop.data.shopName}</p>
                      <p className="restaurantMenu">{shop.data.productContent}</p>
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
