import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopProps = {
  children: JSX.Element;
};

const ScrollToTop = ({ children }: ScrollToTopProps): JSX.Element => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return children;
};

export default ScrollToTop;
