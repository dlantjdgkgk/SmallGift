export interface MovieInfo {
  data: {
    productImage: string;
    productPrice: string;
    productName: string;
    id: number;
  };
}
export interface Props {
  menu: MovieInfo;
  handleModalClose: () => void;
}
