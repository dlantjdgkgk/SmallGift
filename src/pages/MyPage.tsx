import Footer from "components/Footer/Footer";
import * as Styled from "./style";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LikeSVG from "components/LikeSVG/LikeSVG";
import { useState } from "react";

const MyPage = () => {
  const categories = ["전체", "한식", "일식", "중식", "양식", "카페"];
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  return (
    <>
      <Styled.MypageWrapper>
        <Styled.LoginSection>
          <p className="login">로그인 정보</p>
          <div className="loginInfo">
            <div className="imgAndEmail">
              <img src="/img/Kakao.png" />
              <p className="email">abc123@naver.com</p>
            </div>
            <button type="button" className="logout">
              로그아웃
            </button>
          </div>
        </Styled.LoginSection>
        <Styled.RecentOrderSection>
          <div className="recentOrderList">
            <p className="recentOrder">최근 주문 내역</p>
            <button
              type="button"
              className="more"
              onClick={() => {
                navigate("/mypage/orderlist");
              }}
            >
              더보기 <span>{">"}</span>
            </button>
          </div>
          <p className="purchaseDate">2022년 08월 07일 구매</p>
          <div className="gifticonInfo">
            <div className="thumbnail">
              <img src="/img/foodThumbnail.png" />
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
              onClick={() => {
                navigate("/mypage/like");
              }}
            >
              더보기 <span>{">"}</span>
            </button>
          </div>
          <div className="gifticonInfo">
            <img src="/img/foodThumbnail.png" />
            <div className="setInfo">
              <p className="setName">쭈차돌세트</p>
              <p className="setMenu">쭈꾸미+차돌+묵사발+볶음밥</p>
              <p className="price">15,000원</p>
            </div>
            <button type="button" onClick={() => setLike(!like)} className="like">
              <LikeSVG fill={like ? "red" : undefined} />
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
              <button type="button">{">"}</button>
            </div>
            <div className="option">
              <p>회원정보 변경</p>
              <button type="button">{">"}</button>
            </div>
            <div className="option">
              <p>고객센터</p>
              <button type="button">{">"}</button>
            </div>
          </div>
        </Styled.OptionSection>
      </Styled.MypageWrapper>
      <Footer />
    </>
  );
};
export default MyPage;
