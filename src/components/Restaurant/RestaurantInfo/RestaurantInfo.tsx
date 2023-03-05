import { useState } from "react";
import * as Styled from "./style";
import RestaurantMenuInfo from "../RestaurantMenuInfo.tsx/RestaurantMenuInfo";
import { IShopMenuProps } from "../types";
import RestaurantDetailInfo from "../RestaurantDetailInfo/RestaurantDetailInfo";

interface IProps {
  shopAddress: string | undefined;
  shopTelephone: string | undefined;
  menus: IShopMenuProps[];
}

const RestaurantInfo = ({ shopAddress, shopTelephone, menus }: IProps): JSX.Element => {
  const buttons = ["전체 메뉴", "매장 정보"];
  const [selectButton, setSelectButton] = useState("전체 메뉴");

  return (
    <Styled.RestaurantInfoWrapper>
      <Styled.SelectBtn>
        {buttons.map((button) => {
          const isSelected = selectButton === button;
          return (
            <button
              style={isSelected ? { borderBottom: " 2px solid #6600CC", fontWeight: "700" } : undefined}
              type="button"
              aria-label="Click"
              onClick={(): void => setSelectButton(button)}
              key={button}
            >
              <p style={isSelected ? { color: "#6600CC", fontWeight: "700" } : undefined}>{button}</p>
            </button>
          );
        })}
      </Styled.SelectBtn>

      {selectButton === "전체 메뉴" ? (
        <Styled.RestaurantMenuSection>
          {menus.map((menu) => {
            return <RestaurantMenuInfo menu={menu} key={menu.data.id} />;
          })}
        </Styled.RestaurantMenuSection>
      ) : (
        <RestaurantDetailInfo shopAddress={shopAddress} shopTelephone={shopTelephone} />
      )}
    </Styled.RestaurantInfoWrapper>
  );
};

export default RestaurantInfo;
