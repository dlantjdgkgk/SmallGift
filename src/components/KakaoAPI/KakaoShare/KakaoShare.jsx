import { useEffect } from "react";

const KakaoShare = () => {
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
    console.log(5);
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "딸기 치즈 케익",
        description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
        imageUrl: "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          mobileWebUrl: "http://localhost:3000/",
          webUrl: "http://localhost:3000/",
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
            mobileWebUrl: "http://localhost:3000/",
            webUrl: "http://localhost:3000/",
          },
        },
      ],
    });
  };

  return (
    <div className="share-node" onClick={shareKakao} aria-hidden="true">
      Share
    </div>
  );
};

export default KakaoShare;
