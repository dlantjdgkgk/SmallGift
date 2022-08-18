import React, { useMemo, useState } from "react";
import * as Styled from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useLocation } from "react-router-dom";
import { data } from "./data";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(0);
  const { pathname } = useLocation();

  return (
    <>
      <Outlet />
      <Styled.NavWrapper>
        <div className="container">
          {data.map(({ icons, Links, name }, index) => {
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
        </div>
      </Styled.NavWrapper>
    </>
  );
};

export default BottomNav;
