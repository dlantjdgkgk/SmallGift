import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import * as Styled from "./style";
import React from "react";

interface TopTenData {
  id: number;
  data: string;
}

interface IPopularSearchProps {
  topTenData: TopTenData[];
}

const PopularSearch = ({ topTenData }: IPopularSearchProps): JSX.Element => {
  return (
    <Styled.PopularSearchWrapper>
      <div className="popularSearch">
        <p className="popular">인기 검색어</p>
      </div>

      <Styled.SearchListWrapper>
        <div className="searchList">
          {topTenData?.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <div className="search">
                  <div className="rankAndMenuName">
                    <div className="rank">{data.id}</div>
                    <div className="menuName">{data.data}</div>
                  </div>
                  <div className="iconAndRank">
                    <FontAwesomeIcon icon={faCaretUp} />
                    <p className="risingRanking">1 </p>
                  </div>
                </div>
                <div className="boundaryLine" />
              </React.Fragment>
            );
          })}
        </div>
      </Styled.SearchListWrapper>
    </Styled.PopularSearchWrapper>
  );
};

export default PopularSearch;
