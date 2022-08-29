import * as Styled from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useLocation } from "react-router-dom";
import { data } from "./data";

const BottomNav = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Outlet />
      <Styled.NavWrapper>
        <div className="container">
          {data.map(({ icons, Links, name, id }) => {
            return (
              <Link to={Links} className="nav-link" key={id}>
                <div className="iconAndDescription">
                  <div>
                    <FontAwesomeIcon
                      icon={icons}
                      className={pathname.split("/")[1] === Links ? "nav-item active" : "nav-item"}
                    />
                    <p className={pathname.split("/")[1] === Links ? "nav-item active" : "nav-item"}>{name}</p>
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
