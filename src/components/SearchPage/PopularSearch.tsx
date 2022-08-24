import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import * as Styled from "./style";

interface IProps {
  topTenData: string[];
}

const PopularSearch = ({ topTenData }: IProps) => {
  return (
    <Styled.PopularSearchWrapper>
      <div className="popularSearch">
        <p className="popular">인기 검색어</p>
        <p className="time">2022년 08월 02일 14:00 기준</p>
      </div>

      <Styled.SearchListWrapper>
        <div className="searchList">
          {topTenData?.map((data, index) => {
            return (
              <>
                <div className="search">
                  <div className="rankAndMenuName">
                    <div className="rank">{index + 1}</div>
                    <div className="menuName">{data}</div>
                  </div>
                  <div className="iconAndRank">
                    <FontAwesomeIcon icon={faCaretUp} />
                    <p className="risingRanking">1 </p>
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
