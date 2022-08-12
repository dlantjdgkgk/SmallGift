import { faSearch, faAlignJustify, faMedal, faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";

export const data = [
  {
    icons: faHome,
    Links: "/",
    name: "홈",
  },
  {
    icons: faAlignJustify,
    Links: "category?value=전체",
    name: "카테고리",
  },
  {
    icons: faSearch,
    Links: "search",
    name: "검색",
  },
  {
    icons: faCartShopping,
    Links: "shop",
    name: "장바구니",
  },
  {
    icons: faMedal,
    Links: "mypage",
    name: "마이페이지",
  },
];
