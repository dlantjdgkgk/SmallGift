import { useEffect } from "react";
import KakaoImg from "../../../assets/img/Kakao.png";
import * as Styled from "./style";

interface IProps {
  image: string;
  productName: string;
  category: string;
}

const GifticonShare = ({ image, productName, category }: IProps): JSX.Element => {
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
        title: `스몰기프트 ${productName} 기프티콘`,
        description: `#쿠폰 #소상공인 #${category} `,
        imageUrl: `${image}`,
        link: {
          mobileWebUrl: `https://smallgift.pages.dev`,
          webUrl: `https://smallgift.pages.dev`,
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
            mobileWebUrl: `https://smallgift.pages.dev`,
            webUrl: `https://smallgift.pages.dev`,
          },
        },
      ],
    });
  };

  return (
    <Styled.SendMsg onClick={shareKakao} aria-hidden="true">
      <img src={KakaoImg} alt="" />
      <button type="button">메세지 보내기</button>
    </Styled.SendMsg>
  );
};

export default GifticonShare;
