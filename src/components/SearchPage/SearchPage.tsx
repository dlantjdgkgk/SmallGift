import * as Styled from "./style";
import { useEffect, useState } from "react";
import PopularSearch from "./PopularSearch";
import { apiInstance } from "../../api/setting";
import { useNavigate } from "react-router";
import { wholeTextArray } from "./data";

const SearchPage = () => {
  const navigate = useNavigate();
  const [is, setIs] = useState(false);

  const [topTenData, setTopTenData] = useState(null);
  const [keyWord, setKeyWord] = useState(null);
  const [deleteKeyWord, setDeleteKeyWord] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [recommendationData, setRecommendationData] = useState(null);

  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState(wholeTextArray);
  const [inputValue, setInputValue] = useState("");

  const showDropDownList = () => {
    if (inputValue === "") {
      setIsHaveInputValue(false);
      setDropDownList([]);
    } else {
      const choosenTextList = wholeTextArray.filter((textItem) => textItem.includes(inputValue));
      setDropDownList(choosenTextList);
    }
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
    setIsHaveInputValue(true);
  };

  const topTenAPI = async () => {
    try {
      const topTen = await apiInstance.get("/api/user/common/keyword/top10");
      setTopTenData(topTen.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const keyWordAPI = async () => {
    try {
      const keyWordData = await apiInstance.get("/api/user/keyword?memberId=15");
      console.log(keyWordData);
      setKeyWord(keyWordData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const recommendationAPI = async () => {
    try {
      const result = await apiInstance.get(`/api/user/common/keyword/recommendation?keyword=${inputValue}`);
      setRecommendationData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    recommendationAPI();
  }, [inputValue]);

  const handleDelete = async () => {
    try {
      const deleteKeyWordData = await apiInstance.delete("/api/user/keyword/all?memberId=15");
      setDeleteKeyWord(deleteKeyWordData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    keyWordAPI();
    topTenAPI();
  }, []);

  const handleClick = async (dropDownItem) => {
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

  useEffect(showDropDownList, [inputValue]);

  return (
    <Styled.SearchPageWrapper>
      {inputValue ? (
        <>
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
            <button
              type="button"
              onClick={() => {
                setInputValue("");
              }}
              className="cancel"
            >
              <img src="/img/Cancel.png" />
            </button>
          </div>
          {isHaveInputValue && (
            <>
              <p className="recomendation">추천 검색어</p>
              {recommendationData.length === 0 && <Styled.DropDownItem>해당하는 단어가 없습니다</Styled.DropDownItem>}
              {recommendationData.map((dropDownItem, dropDownIndex) => {
                return (
                  <Styled.DropDownItem
                    key={dropDownIndex}
                    onClick={() => {
                      handleClick(dropDownItem);
                    }}
                    type="search"
                  >
                    {dropDownItem.split(inputValue)[0]}
                    <span>{inputValue}</span>
                    {dropDownItem.split(inputValue)[1]}
                  </Styled.DropDownItem>
                );
              })}
            </>
          )}
        </>
      ) : (
        <>
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
          </div>
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
                {keyWord?.map((data, index) => {
                  return (
                    <div className="record" key={index}>
                      <p>{data}</p>
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
