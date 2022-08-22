import * as Styled from "./style";
import { useEffect, useState } from "react";
import PopularSearch from "./PopularSearch";
import { apiInstance } from "../../api/setting";

const wholeTextArray = ["닭발", "닭갈비", "닭볶음탕", "cat", "javascript", "원티드", "프리온보딩", "프론트엔드"];

const SearchPage = () => {
  const [is, setIs] = useState(false);

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

  const handleClick = async () => {
    try {
      const payload = {
        keyword: inputValue,
        memberId: 15,
      };
      await apiInstance.post("/api/user/keyword", payload);
    } catch (error) {
      console.log(error);
    }
  };

  const topTenAPI = async () => {
    try {
      const res = await apiInstance.get("/api/user/common/keyword/top10");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    topTenAPI();
  }, []);
  useEffect(showDropDownList, [inputValue]);

  const datas = [
    "쭈꾸미",
    "치즈케이크",
    "쭈꾸미",
    "쭈꾸미",
    "쭈꾸미",
    "쭈꾸미",
    "쭈꾸미",
    "쭈꾸미",
    "쭈꾸미",
    "쭈꾸미",
  ];
  return (
    <Styled.SearchPageWrapper>
      {inputValue ? (
        <>
          <div className="searchBar">
            <div />
            <input value={inputValue} type="text" onChange={onChange} placeholder="가게명 또는 상품명을 입력하세요" />
            <button type="button">x</button>
          </div>
          {isHaveInputValue && (
            <>
              {dropDownList.length === 0 && <Styled.DropDownItem>해당하는 단어가 없습니다</Styled.DropDownItem>}
              {dropDownList.map((dropDownItem, dropDownIndex) => {
                return (
                  <Styled.DropDownItem key={dropDownIndex} onClick={handleClick}>
                    {dropDownItem.split(inputValue)[0]}
                    <span style={{ color: "black" }}>{inputValue}</span>
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
            <div />
            <input value={inputValue} type="text" onChange={onChange} placeholder="가게명 또는 상품명을 입력하세요" />
            <button type="button">x</button>
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
                <button className="totalDelete" type="button" onClick={() => {}}>
                  전체 삭제
                </button>
              </div>
              <div className="records">
                {datas.map((data, index) => {
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
          <PopularSearch />
        </>
      )}
    </Styled.SearchPageWrapper>
  );
};

export default SearchPage;
