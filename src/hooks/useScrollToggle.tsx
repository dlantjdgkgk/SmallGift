import { useEffect, useState } from "react";
import throttle from "../utils/throttle";

const useScrollToggle = (initState: Boolean = false) => {
  const [scrollFlag, setScrollFlag] = useState(initState);

  const updateScroll = () => {
    const { scrollY } = window;
    scrollY > 100 ? setScrollFlag(true) : setScrollFlag(false);
  };
  const handleScroll = throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollFlag;
};

export default useScrollToggle;
