export interface ILocalPopularGifticonProps {
  data: {
    category: string;
    shopName: string;
    shopId: number;
    mainMenu: string;
    shopThumbnailImage: string;
  };
}

export interface IProps {
  selectCategory: string;
  selectLocate: string;
}
