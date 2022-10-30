import { useEffect } from "react";
import Share from "../../../assets/img/Share.png";

interface IProps {
  parameter?: string;
}

const KakaoShare = ({ parameter }: IProps): JSX.Element => {
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
        description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
        imageUrl: "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          mobileWebUrl: `https://smallgift.pages.dev/category/${parameter}`,
          webUrl: `https://smallgift.pages.dev/category/${parameter}`,
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
            mobileWebUrl: `https://smallgift.pages.dev/category/${parameter}`,
            webUrl: `https://smallgift.pages.dev/category/${parameter}`,
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

export default KakaoShare;
