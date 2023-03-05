import * as Styled from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useLocation } from "react-router-dom";
import { data } from "./data";

const BottomNav = (): JSX.Element => {
  const { pathname } = useLocation();
  return (
    <>
      <Outlet />
      <Styled.NavWrapper>
        <Styled.Container>
          {data.map(({ icons, Links, name, id }) => {
            return (
              <Link to={Links} key={id}>
                <Styled.IconAndDescription>
                  <div>
                    <FontAwesomeIcon
                      icon={icons}
                      className={pathname.split("/")[1] === Links ? "nav-item active" : "nav-item"}
                    />
                    <p className={pathname.split("/")[1] === Links ? "nav-item active" : "nav-item"}>{name}</p>
                  </div>
                </Styled.IconAndDescription>
              </Link>
            );
          })}
        </Styled.Container>
      </Styled.NavWrapper>
    </>
  );
};

export default BottomNav;
