import * as Styled from "./style";
import { useState } from "react";
import PopularSearch from "./PopularSearch";

const wholeTextArray = ["닭발", "닭갈비", "닭볶음탕", "cat", "javascript", "원티드", "프리온보딩", "프론트엔드"];

const SearchPage = () => {
  const [text, setText] = useState("");
  const [is, setIs] = useState(true);
  const [searchList, setSearchList] = useState(null);
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState(wholeTextArray);

  const onChange = (e) => {
    setText(e.target.value);
    text && setIsHaveInputValue(true);
  };
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
      {text ? (
        <>
          <div className="searchBar">
            <div />
            <input value={text} type="text" onChange={onChange} placeholder="가게명 또는 상품명을 입력하세요" />
            <button type="button">x</button>
          </div>
          {isHaveInputValue && (
            <div>
              {dropDownList.length === 0 && <div>해당하는 단어가 없습니다</div>}
              {dropDownList
                .filter((textItem) => textItem.includes(text))
                .map((dropDownItem, dropDownIndex) => {
                  return (
                    <div
                      key={dropDownIndex}
                      // onClick={() => clickDropDownItem(dropDownItem)}
                      // onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                      // className={dropDownItemIndex === dropDownIndex ? "selected" : ""}
                    >
                      {dropDownItem}
                    </div>
                  );
                })}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="searchBar">
            <div />
            <input value={text} type="text" onChange={onChange} placeholder="가게명 또는 상품명을 입력하세요" />
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
