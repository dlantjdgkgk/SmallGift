import { useEffect } from "react";
import Share from "../../../assets/img/Share.png";

interface IProps {
  catgegory?: string;
  shopName?: string;
  shopId?: string;
}

const ProductShare = ({ catgegory, shopName, shopId }: IProps): JSX.Element => {
  const { Kakao } = window;

  if (window.kakao) {
    if (!Kakao?.isInitialized()) {
      Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
  }

  useEffect(() => {
    const testKakao = (): void => {
      if (Kakao) {
        console.log("카카오", Kakao);
      }
    };
    testKakao();
  }, []);

  const shareKakao = (): void => {
    Kakao?.Link?.sendDefault({
      objectType: "feed",
      content: {
        title: "스몰기프트",
        description: "#쿠폰 #소상공인",
        imageUrl: "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          mobileWebUrl: `https://smallgift.pages.dev/category/${catgegory}/${shopName}/${shopId}`,
          webUrl: `https://smallgift.pages.dev/category/${catgegory}/${shopName}/${shopId}`,
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: `https://smallgift.pages.dev/category/${catgegory}/${shopName}/${shopId}`,
            webUrl: `https://smallgift.pages.dev/category/${catgegory}/${shopName}/${shopId}`,
          },
        },
      ],
    });
  };

  return (
    <div className="share-node" onClick={shareKakao} aria-hidden="true">
      <img src={Share} alt="" />
    </div>
  );
};

export default ProductShare;
