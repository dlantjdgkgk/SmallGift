import React, { useState } from "react";
import * as Styled from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAlignJustify, faMedal, faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(1);
  const datas = [
    {
      icons: faHome,
      Links: "/",
    },
    {
      icons: faAlignJustify,
      Links: "category",
    },
    {
      icons: faSearch,
      Links: "search",
    },
    {
      icons: faCartShopping,
      Links: "shop",
    },
    {
      icons: faMedal,
      Links: "mypage",
    },
  ];
  return (
    <>
      <Styled.NavWrapper>
        {/* <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
          <div>
            <FontAwesomeIcon icon={faHome} c  lassName={activeNav === 1 ? "nav-item active" : "nav-item"} />
          </div>
        </Link> */}
        {datas.map(({ icons, Links }, index) => {
          return (
            <Link to={Links} className="nav-link" key={index} onClick={() => setActiveNav(index)}>
              <div>
                <FontAwesomeIcon icon={icons} className={activeNav === index ? "nav-item active" : "nav-item"} />
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
