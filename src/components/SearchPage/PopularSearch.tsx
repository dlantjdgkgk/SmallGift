import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import * as Styled from "./style";
import React from "react";

interface IProps {
  topTenData: string[];
}

const datas = [
  {
    id: 0,
    data: "볶음밥",
  },
  {
    id: 1,
    data: "강아지",
  },
];

const PopularSearch = () => {
  return (
    <Styled.PopularSearchWrapper>
      <div className="popularSearch">
        <p className="popular">인기 검색어</p>
        <p className="time">2022년 08월 02일 14:00 기준</p>
      </div>

      <Styled.SearchListWrapper>
        <div className="searchList">
          {datas.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <div className="search">
                  <div className="rankAndMenuName">
                    <div className="rank">{data.id + 1}</div>
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
