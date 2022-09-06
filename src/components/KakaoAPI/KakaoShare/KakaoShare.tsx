import { useEffect } from "react";

interface IProps {
  parameter: string;
}

const KakaoShare = ({ parameter }: IProps) => {
  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
    }
  };

  useEffect(() => {
    initKakao();
  }, []);

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({
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
      <img src="/img/Share.png" />
    </div>
  );
};

export default KakaoShare;