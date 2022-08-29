import * as Styled from "./style";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BackSVG from "./BackSVG";

const Header = () => {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isCategory, setCategory] = useState(false);
  console.log(pathname);

  const regex = /^(\/category\/)/;

  const handleScroll = () => {
    if (ScrollY > 40 && ScrollY < 100) {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    }
  };
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  useEffect(() => setCategory(regex.test(pathname)), [pathname]);

  return (
    <>
      <Styled.HeaderWrapper isCategory={isCategory}>
        <div className="header">
          {ScrollActive ? (
            <>
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
            </>
          ) : undefined}
        </div>
      </Styled.HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;
