export interface MovieInfo {
  setMenuName: string;
  setMenu: string;
  price: string;
}
export interface Props {
  menu: MovieInfo;
  handleModalClose: () => void;
}
