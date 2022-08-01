import * as Styled from "./style";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(true);
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
        {ScrollActive ? (
          <>
            <div className="logo">Logo</div>
            <div>
              <button type="button">My</button>
            </div>
          </>
        ) : undefined}
      </Styled.HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;
