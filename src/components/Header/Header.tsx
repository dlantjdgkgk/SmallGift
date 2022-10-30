import * as Styled from "./style";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BackSVG from "./BackSVG";
import throttle from "utils/throttle";
import AlarmSVG from "./AlarmSVG";
import Logo from "../../assets/img/Logo.png";

const Header = (): JSX.Element => {
  const [scrollFlag, setScrollFlag] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isCategory, setCategory] = useState(false);
  const regex = /^(\/category\/)/;

  const updateScroll = (): void => {
    const { scrollY } = window;
    const isScrolled = scrollY !== 0;
    setScrollFlag(isScrolled);
  };

  const handleScroll = (): Function => throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => setCategory(regex.test(pathname)), [pathname]);

  return (
    <>
      <Styled.HeaderWrapper isCategory={isCategory}>
        <div className="header">
          {pathname === "/" ? (
            <button
              className="logo"
              type="button"
              onClick={(): void => {
                navigate("/");
              }}
            >
              <img src={Logo} />
            </button>
          ) : (
            <button
              className="back"
              type="button"
              onClick={(): void => {
                navigate(-1);
              }}
            >
              <BackSVG fill={isCategory ? "white" : undefined} />
            </button>
          )}
          {pathname === "/mypage/orderlist" && <p className="pageDescription">주문내역조회</p>}
          {pathname === "/mypage/like" && <p className="pageDescription">찜한상품</p>}
          {pathname === "/mypage/refund" && <p className="pageDescription">취소/환불내역</p>}
          {pathname === "/mypage/modify" && <p className="pageDescription">회원 정보 변경</p>}

          {pathname === "/payment" || pathname === "/paymentcheck" || pathname === "/alert" ? null : (
            <div>
              <button
                type="button"
                onClick={(): void => {
                  navigate("/alert");
                }}
                className="alert"
              >
                <AlarmSVG fill={isCategory ? "white" : undefined} />
              </button>
            </div>
          )}
        </div>
      </Styled.HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;
