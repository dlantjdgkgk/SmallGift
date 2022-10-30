import Footer from "components/Footer/Footer";
import * as Styled from "./style";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LikeSVG from "components/LikeSVG/LikeSVG";
import { useEffect, useState } from "react";
import { apiInstance } from "api/setting";
import Arrow from "../assets/img/Arrow.png";
import foodThumbnail from "../assets/img/foodThumbnail.png";
import Kakao from "../assets/img/Kakao.png";
import LocateWhite from "../assets/img/LocateWhite.png";
import ArrowBlack from "../assets/img/ArrowBlack.png";

interface UserInfoProps {
  userName: string;
  userPhone: string;
  accountNumber: number;
  accountBank: string;
}

const MyPage = (): JSX.Element => {
  const categories = ["전체", "한식", "일식", "중식", "양식", "카페"];
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfoProps>();
  const [socialLogin, setSocialLogin] = useState(true);
  const memberId = 1;

  const Logout = (): void => {
    console.log("로그아웃 되었습니다.");
  };

  const userInfoAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/userInfo?memberId=${memberId}`);
      console.log(result);
      setUserInfo(result.data.data);
      const { code, msg } = result.data;
      if (code >= 400) console.log("FAIL", code, msg);
    } catch (error) {
      console.error("API CALL FAILURE", error);
    }
  };

  useEffect(() => {
    userInfoAPI();
  }, []);

  return (
    <>
      <Styled.MypageWrapper>
        <Styled.Welcome>
          <h1>
            안녕하세요 <span>{userInfo?.userName}</span>님!
          </h1>
          <h1>선물하기 딱 좋은 날이네요😊</h1>
        </Styled.Welcome>
        <Styled.LoginSection>
          <p className="login">로그인 정보</p>
          <div className="loginInfo">
            <div className="imgAndEmail">
              {socialLogin && <img src={Kakao} alt="" />}
              <p className="email">abc123@naver.com</p>
            </div>
            <button type="button" className="logout" onClick={Logout}>
              로그아웃
            </button>
          </div>
        </Styled.LoginSection>
        <Styled.MemberInfoSection>
          <div className="memberInfo">
            <h1>회원정보</h1>
            <button
              type="button"
              className="modify"
              onClick={(): void => {
                navigate("/mypage/modify");
              }}
            >
              <span>수정하기</span>
              <img src={Arrow} alt="" />
            </button>
          </div>
          <div className="name">
            <label htmlFor="name">이름</label>
            <span>{userInfo?.userName}</span>
          </div>
          <div className="email">
            <label htmlFor="email">이메일</label>
            <span>antjdgk@gmail.com</span>
          </div>
          <div className="phone">
            <label htmlFor="phone">연락처</label>
            <span>{userInfo?.userPhone}</span>
          </div>
          <div className="account">
            <label htmlFor="account">환불계좌</label>
            <span>
              {userInfo?.accountNumber}({userInfo?.accountBank})
            </span>
          </div>
        </Styled.MemberInfoSection>
        <Styled.BoundaryLine />
        <Styled.RecentOrderSection>
          <div className="recentOrderList">
            <p className="recentOrder">최근 주문 내역</p>
            <button
              type="button"
              className="more"
              onClick={(): void => {
                navigate("/mypage/orderlist");
              }}
            >
              <span>더보기</span>
              <img src={Arrow} alt="" />
            </button>
          </div>
          <p className="purchaseDate">2022년 08월 07일 구매</p>
          <div className="gifticonInfo">
            <div className="thumbnail">
              <img src={foodThumbnail} alt="" />
              <div className="customerInfo">🎁홍길순</div>
            </div>
            <div className="restaurantInfo">
              <p className="restaurantName">쭈꾸미랩소디 강남점</p>
              <p className="setName">쭈차돌세트</p>
              <p className="price">15,000원</p>
            </div>
          </div>
        </Styled.RecentOrderSection>
        <Styled.ChoiceProductSection>
          <div className="choiceProduct">
            <p className="choice">찜한 상품</p>
            <button
              type="button"
              className="more"
              onClick={(): void => {
                navigate("/mypage/like");
              }}
            >
              <span>더보기</span>
              <img src={Arrow} alt="" />
            </button>
          </div>
          <div className="gifticonInfo">
            <div className="locate">
              <img src={LocateWhite} alt="" />
              <p>쭈꾸미랩소디 강남점</p>
            </div>
            <div className="menuInfo">
              <img src={foodThumbnail} alt="" className="thumbnail" />
              <div className="setInfo">
                <p className="setName">쭈차돌세트</p>
                <p className="setMenu">쭈꾸미+차돌+묵사발+볶음밥</p>
                <p className="price">15,000원</p>
              </div>
            </div>
            <button type="button" onClick={(): void => setLike(!like)} className="like">
              <LikeSVG fill={like ? "red" : undefined} stroke={like ? "transparent" : "gray"} />
            </button>
          </div>
        </Styled.ChoiceProductSection>
        <Styled.BookmarkSection>
          <p className="bookmarkRestaurant">즐겨찾는 가게</p>
          <div className="RestaurantInfo">
            {categories.map((category, index) => {
              return (
                <Link to={`/category?value=${category}`} key={index} style={{ color: "black" }}>
                  <div className="Restaurant">
                    <div className="thumbnailAndCancel">
                      <div />
                      <button type="button" className="cancel">
                        x
                      </button>
                    </div>
                    <p>{category}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Styled.BookmarkSection>
        <Styled.BoundaryLine />
        <Styled.OptionSection>
          <div className="options">
            <div className="option">
              <p>취소/환불내역</p>
              <button
                type="button"
                onClick={(): void => {
                  navigate("/mypage/refund");
                }}
              >
                <img src={ArrowBlack} alt="" />
              </button>
            </div>
            <div className="option">
              <p>고객센터</p>
              <button type="button">
                <img src={ArrowBlack} alt="" />
              </button>
            </div>
          </div>
        </Styled.OptionSection>
      </Styled.MypageWrapper>
      <Footer />
    </>
  );
};
export default MyPage;
