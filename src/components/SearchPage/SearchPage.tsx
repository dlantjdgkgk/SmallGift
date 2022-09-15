import * as Styled from "./style";
import { useEffect, useState } from "react";
import PopularSearch from "./PopularSearch";
import { apiInstance } from "../../api/setting";
import { useNavigate } from "react-router";

const SearchPage = () => {
  const navigate = useNavigate();
  const [is, setIs] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [topTenData, setTopTenData] = useState(null);
  const [keyWord, setKeyWord] = useState(null);
  const [recommendationData, setRecommendationData] = useState(null);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    keyWordPostAPI(inputValue);
    navigate("/");
  };

  const topTenAPI = async () => {
    try {
      const topTen = await apiInstance.get("/api/user/common/keyword/top10");
      setTopTenData(topTen.data.data.keywordTopTen);
    } catch (error) {
      console.log(error);
    }
  };

  const keyWordAPI = async () => {
    try {
      const keyWordData = await apiInstance.get("/api/user/keyword?memberId=15");
      setKeyWord(keyWordData.data.data.userKeywords);
    } catch (error) {
      throw new Error("에러");
    }
  };

  const recommendationAPI = async () => {
    try {
      const result = await apiInstance.get(`/api/user/common/keyword/recommendation?keyword=${inputValue}`);
      setRecommendationData(result.data.data.recommendationTopTen);
    } catch (error) {
      console.log(error);
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

  const handleDelete = async () => {
    try {
      const deleteKeyWordData = await apiInstance.delete("/api/user/keyword/all?memberId=15");
      if (deleteKeyWordData.status === 200) {
        keyWordAPI();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    keyWordAPI();
    topTenAPI();
  }, []);

  const keyWordPostAPI = async (dropDownItem) => {
    try {
      const payload = {
        keyword: dropDownItem,
        memberId: 15,
      };
      await apiInstance.post("/api/user/keyword", payload);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styled.SearchPageWrapper>
      <form action="post" onSubmit={onSubmit}>
        <div className="searchBar">
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
            className="back"
          >
            <img src="/img/Back.png" />
          </button>
          <input value={inputValue} type="text" onChange={onChange} placeholder="가게명 또는 상품명 검색하기" />
          {inputValue ? (
            <button
              type="button"
              onClick={() => {
                setInputValue("");
              }}
              className="cancel"
            >
              <img src="/img/Cancel.png" />
            </button>
          ) : null}
        </div>
      </form>
      {inputValue ? (
        <>
          <p className="recomendation">추천 검색어</p>
          {!recommendationData && <Styled.DropDownItem>해당하는 단어가 없습니다</Styled.DropDownItem>}
          {recommendationData?.map((dropDownItem) => {
            return dropDownItem.data.indexOf(inputValue) === -1 ? null : (
              <Styled.DropDownItem
                key={dropDownItem.id}
                onClick={() => {
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
          {is ? (
            <>
              <div className="recentSearch">
                <p className="recent">최근 검색어</p>
                <p className="available">로그인 후 이용할 수 있어요</p>
              </div>
              <div className="line" />
            </>
          ) : (
            <>
              <div className="recentSearchLogin">
                <p className="recent">최근 검색어</p>
                <button className="totalDelete" type="button" onClick={handleDelete}>
                  전체 삭제
                </button>
              </div>
              <div className="records">
                {keyWord?.map((data) => {
                  return (
                    <div className="record" key={data.id}>
                      <p>{data.data}</p>
                    </div>
                  );
                })}
              </div>
              <div className="loginLine" />
            </>
          )}
          <PopularSearch topTenData={topTenData} />
        </>
      )}
    </Styled.SearchPageWrapper>
  );
};

export default SearchPage;
