import React from "react";
import * as Styled from "./style";

const Header = () => {
  return (
    <>
      <Styled.HeaderWrapper>
        <div className="logo">Logo</div>
        <div>
          <button type="button" className="search">
            Search
          </button>
          <button type="button">Cart</button>
          <button type="button">My</button>
        </div>
      </Styled.HeaderWrapper>
      <Styled.Navbar />
    </>
  );
};

export default Header;
