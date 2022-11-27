import * as Styled from "./style";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BackSVG from "./BackSVG";
import throttle from "utils/throttle";
import Logo from "../../assets/img/Logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginSVG from "./LoginSVG";
import Swal from "sweetalert2";

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

  const handleLogoutBtn = async (): Promise<void> => {
    await Swal.fire({
      text: "로그아웃 하시겠습니까?",
      icon: "question",
      confirmButtonText: "네",
      cancelButtonText: "아니요",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await window.localStorage.clear();
        navigate("/");
        Swal.fire({
          text: "로그아웃 성공.",
          icon: "success",
          confirmButtonText: "확인",
        });
      }
    });
  };

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
          ) : pathname === "/login" ? (
            <button
              className="back"
              type="button"
              onClick={(): void => {
                navigate("/");
              }}
            >
              <BackSVG fill={isCategory ? "white" : undefined} />
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

          {pathname === "/payment" ||
          pathname === "/paymentcheck" ||
          pathname === "/alert" ||
          pathname === "/signup" ||
          pathname === "/find/password" ||
          pathname === "/login" ||
          pathname === "/auth/kakao/callback" ||
          pathname === "/find/ID" ||
          pathname === "/find/ID" ||
          pathname === "/find/password/after" ? null : (
            <div className="div">
              {!localStorage.accessToken ? (
                <button
                  type="button"
                  onClick={(): void => {
                    navigate("/login");
                  }}
                  className="login"
                >
                  <LoginSVG fill={isCategory ? "white" : undefined} />
                </button>
              ) : (
                <button type="button" onClick={handleLogoutBtn} className="logout">
                  <Styled.LogoutBtn isCategory={isCategory}>
                    <LogoutIcon />
                  </Styled.LogoutBtn>
                </button>
              )}
            </div>
          )}
        </div>
      </Styled.HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;
