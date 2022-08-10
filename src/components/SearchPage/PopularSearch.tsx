import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import * as Styled from "./style";

const PopularSearch = () => {
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
    <Styled.PopularSearchWrapper>
      <div className="popularSearch">
        <p className="popular">인기 검색어</p>
        <p className="time">2022년 08월 02일 14:00 기준</p>
      </div>

      <Styled.SearchListWrapper>
        <div className="searchList">
          {datas.map((data, index) => {
            return (
              <>
                <div className="search">
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
      </Styled.SearchListWrapper>
    </Styled.PopularSearchWrapper>
  );
};

export default PopularSearch;
