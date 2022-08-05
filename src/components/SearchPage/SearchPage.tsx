import * as Styled from "./style";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const SearchPage = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const [is, setIs] = useState(false);

  const onReset = () => {
    setText("");
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
      <div className="wrapper">
        <div className="searchBar">
          <div />
          <input onChange={onChange} value={text} placeholder="가게명 또는 상품명을 입력하세요" />
          <button type="button">x</button>
          {/* <FontAwesomeIcon icon={faCircleXmark} size="1x" color="gray" /> */}
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
                    <button type="button" onClick={() => {}}>
                      x
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="loginLine" />
          </>
        )}
      </div>

      <div className="popularSearch">
        <p className="popular">인기 검색어</p>
        <p className="time">2022년 08월 02일 14:00 기준</p>
      </div>

      <div className="searchListWrapper">
        {datas.map((data, index) => {
          return (
            <>
              <div className="searchList">
                <div className="rankAndMenuName">
                  <div className="rank">{index + 1}</div>
                  <div className="menuName">{data}</div>
                </div>
                <div className="iconAndRank">
                  <FontAwesomeIcon icon={faCaretUp} />
                  <p className="risingRanking">1</p>
                </div>
              </div>
              <div className="boundaryLine" />
            </>
          );
        })}
      </div>
    </Styled.SearchPageWrapper>
  );
};

export default SearchPage;
