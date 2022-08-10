import * as Styled from "./style";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleScroll() {
    if (ScrollY > 40 && ScrollY < 100) {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    }
  }
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <>
      <Styled.HeaderWrapper>
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
                  Logo
                </button>
              ) : (
                <button
                  className="back"
                  type="button"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Back
                </button>
              )}
              {pathname === "/payment" || pathname === "/paymentcheck" ? undefined : (
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      navigate("/mypage");
                    }}
                  >
                    Alert
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
