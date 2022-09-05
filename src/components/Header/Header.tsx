import * as Styled from "./style";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BackSVG from "./BackSVG";
import throttle from "utils/throttle";

const Header = () => {
  const [scrollFlag, setScrollFlag] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isCategory, setCategory] = useState(false);
  const regex = /^(\/category\/)/;

  const updateScroll = () => {
    const { scrollY } = window;
    const isScrolled = scrollY !== 0;
    setScrollFlag(isScrolled);
  };

  const handleScroll = throttle(updateScroll, 100);

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
              onClick={() => {
                navigate("/");
              }}
            >
              <img src="/img/Logo.png" />
            </button>
          ) : (
            <button
              className="back"
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              <BackSVG fill={isCategory ? "white" : undefined} />
            </button>
          )}
          {pathname === "/mypage/orderlist" ? <p className="pageDescription">주문내역조회</p> : undefined}
          {pathname === "/mypage/like" ? <p className="pageDescription">찜한상품</p> : undefined}

          {pathname === "/payment" || pathname === "/paymentcheck" || pathname === "/alert" ? undefined : (
            <div>
              <button
                type="button"
                onClick={() => {
                  navigate("/alert");
                }}
              >
                <img src="/img/Alarm.png" />
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
