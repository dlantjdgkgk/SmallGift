import React, { useState } from "react";
import * as Styled from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAlignJustify, faMedal, faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <>
      <Styled.NavWrapper>
        <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
          <div>
            <FontAwesomeIcon icon={faHome} className={activeNav === 1 ? "nav-item active" : "nav-item"} />
          </div>
        </Link>

        <Link to="/category" className="nav-link" onClick={() => setActiveNav(2)}>
          <div>
            <FontAwesomeIcon icon={faAlignJustify} className={activeNav === 2 ? "nav-item active" : "nav-item"} />
          </div>
        </Link>

        <Link to="/search" className="nav-link" onClick={() => setActiveNav(3)}>
          <div>
            <FontAwesomeIcon icon={faSearch} className={activeNav === 3 ? "nav-item active" : "nav-item"} />
          </div>
        </Link>

        <Link to="/shop" className="nav-link" onClick={() => setActiveNav(4)}>
          <div>
            <FontAwesomeIcon icon={faCartShopping} className={activeNav === 4 ? "nav-item active" : "nav-item"} />
          </div>
        </Link>

        <Link to="/mypage" className="nav-link" onClick={() => setActiveNav(5)}>
          <div>
            <FontAwesomeIcon icon={faMedal} className={activeNav === 5 ? "nav-item active" : "nav-item"} />
          </div>
        </Link>
      </Styled.NavWrapper>
      <Outlet />
    </>
  );
};

export default BottomNav;
