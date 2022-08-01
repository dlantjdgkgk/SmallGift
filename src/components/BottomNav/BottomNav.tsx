import React, { useState } from "react";
import * as Styled from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAlignJustify, faMedal, faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(0);
  const datas = [
    {
      icons: faHome,
      Links: "/",
      name: "홈",
    },
    {
      icons: faAlignJustify,
      Links: "category",
      name: "카테고리",
    },
    {
      icons: faSearch,
      Links: "search",
      name: "검색",
    },
    {
      icons: faCartShopping,
      Links: "shop",
      name: "장바구니",
    },
    {
      icons: faMedal,
      Links: "mypage",
      name: "마이페이지",
    },
  ];
  return (
    <>
      <Styled.NavWrapper>
        {datas.map(({ icons, Links, name }, index) => {
          return (
            <Link
              to={Links}
              className="nav-link"
              key={index}
              onClick={() => {
                setActiveNav(index);
              }}
            >
              <div className="iconAndDescription">
                <div>
                  <FontAwesomeIcon icon={icons} className={activeNav === index ? "nav-item active" : "nav-item"} />
                  <p className={activeNav === index ? "nav-item active" : "nav-item"}>{name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </Styled.NavWrapper>
      <Outlet />
    </>
  );
};

export default BottomNav;
