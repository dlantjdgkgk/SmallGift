import * as Styled from "./style";
import { useEffect, useState, ChangeEvent } from "react";
import PopularSearch from "./PopularSearch";
import { apiInstance } from "../../api/setting";
import { useNavigate } from "react-router";
import Back from "../../assets/img/Back.png";
import Cancel from "../../assets/img/Cancel.png";
import { Link } from "react-router-dom";

interface IRecommendDataProps {
  data: string;
  id: number;
}

interface IKeyWordProps {
  data: string;
  id: number;
}

const SearchPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const [topTenData, setTopTenData] = useState([]);
  const [keyWord, setKeyWord] = useState([]);
  const [recommendationData, setRecommendationData] = useState<IRecommendDataProps[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    keyWordPostAPI(inputValue);
  };

  const topTenAPI = async (): Promise<void> => {
    try {
      const topTen = await apiInstance.get("/api/user/common/keyword/top10");
      setTopTenData(topTen.data.data.keywordTopTen);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const keyWordAPI = async (): Promise<void> => {
    try {
      const keyWordData = await apiInstance.get("/api/user/keyword?memberId=1");
      setKeyWord(keyWordData.data.data.userKeywords);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const recommendationAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/common/keyword/recommendation?keyword=${inputValue}`);
      setRecommendationData(result.data.data.recommendationTopTen);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (inputValue) recommendationAPI();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue]);

  const handleDelete = async (): Promise<void> => {
    try {
      const deleteKeyWordData = await apiInstance.delete("/api/user/keyword/all?memberId=1");
      if (deleteKeyWordData.status === 200) {
        keyWordAPI();
      }
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  useEffect(() => {
    keyWordAPI();
    topTenAPI();
  }, []);

  const keyWordPostAPI = async (keyword: string): Promise<void> => {
    try {
      const payload = {
        keyword,
        memberId: 1,
      };
      await apiInstance.post("/api/user/keyword", payload);
      navigate(`/search/shop/${keyword}`);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

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
          <input value={inputValue} type="text" onChange={onChange} placeholder="가게명 또는 상품명 검색하기" />
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
      {inputValue ? (
        <>
          <p className="recomendation">추천 검색어</p>
          {recommendationData.length === 0 && <Styled.DropDownItem>해당하는 단어가 없습니다</Styled.DropDownItem>}
          {recommendationData.map((dropDownItem) => {
            return dropDownItem.data.indexOf(inputValue) === -1 ? null : (
              <Styled.DropDownItem
                key={dropDownItem.id}
                onClick={(): void => {
                  keyWordPostAPI(dropDownItem.data);
                }}
              >
                {dropDownItem.data.split(inputValue)[0]}
                <span>{inputValue}</span>
                {dropDownItem.data.split(inputValue)[1]}
              </Styled.DropDownItem>
            );
          })}
        </>
      ) : (
        <>
          <>
            <div className="recentSearchLogin">
              <p className="recent">최근 검색어</p>
              <button className="totalDelete" type="button" onClick={handleDelete}>
                전체 삭제
              </button>
            </div>
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
            <div className="loginLine" />
          </>
          <PopularSearch topTenData={topTenData} />
        </>
      )}
    </Styled.SearchPageWrapper>
  );
};

export default SearchPage;
