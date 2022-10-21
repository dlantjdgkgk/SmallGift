import React, { useState } from "react";
import * as Styled from "./style";

const Region = (): JSX.Element => {
  const [selected, setSelected] = useState("");
  const selectList = [
    {
      id: "1",
      region: "서울시 강남구 역삼동",
    },
    {
      id: "2",
      region: "서울시 송파구 가락동",
    },
  ];
  return (
    <Styled.CategoryPageSectionWrapper>
      <select
        onChange={(e): void => {
          setSelected(e.target.value);
        }}
        value={selected}
      >
        {selectList.map((item) => (
          <option value={item.region} key={item.id}>
            {item.region}
          </option>
        ))}
      </select>
      <p>근처에 있는 가게를 알려드릴게요</p>
    </Styled.CategoryPageSectionWrapper>
  );
};

export default React.memo(Region);
