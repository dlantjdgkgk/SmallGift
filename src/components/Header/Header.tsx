import * as Styled from "./style";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Styled.HeaderWrapper>
        <div className="logo">Logo</div>
        <div>
          <button type="button">My</button>
        </div>
      </Styled.HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;
