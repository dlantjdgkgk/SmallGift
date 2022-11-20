import Footer from "components/Footer/Footer";
import * as Styled from "./style";
import { useNavigate } from "react-router";
import LikeSVG from "components/LikeSVG/LikeSVG";
import { useEffect, useState } from "react";
import { apiInstance } from "../api/setting";
import Arrow from "../assets/img/Arrow.png";
import Kakao from "../assets/img/Kakao.png";
import LocateWhite from "../assets/img/LocateWhite.png";
import ArrowBlack from "../assets/img/ArrowBlack.png";

interface UserInfoProps {
  userName: string;
  userPhone: string;
  accountNumber: number;
  accountBank: string;
}

interface MenuType {
  data: {
    productImage: string;
    productPrice: string;
    productName: string;
    productContent: string;
    shopName: string;
  };
}

interface IOrderListProps {
  productImage: string;
  productName: string;
  productPrice: string;
  productContent: string;
  id: number;
}

const MyPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfoProps>();
  const [socialLogin, setSocialLogin] = useState(true);
  const memberId = 1;
  const [choiceProduct, setChoiceProduct] = useState<MenuType>();
  const [orderList, setOrderList] = useState<IOrderListProps>();

  const Logout = () => {
    localStorage.removeItem("accessToken");
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

  const OrderAllAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get("/api/user/order/all?memberId=16");
      console.log(result);
      setOrderList(result.data.data.orderDetailsDtoList.pop());
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const GetWishListAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/wishList?memberId=${memberId}`);
      setChoiceProduct(result.data.data.wishList.pop());
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  console.log(choiceProduct);

  useEffect(() => {
    userInfoAPI();
    GetWishListAPI();
    OrderAllAPI();
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
            <div className="imgAndEmail">{socialLogin && <img src={Kakao} alt="" />}</div>
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
              <img src={orderList?.productImage} alt="" />
            </div>
            <div className="restaurantInfo">
              <p className="restaurantName">{orderList?.productName}</p>
              <p className="setName">{orderList?.productContent}</p>
              <p className="price">{orderList?.productPrice}</p>
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
              <p>{choiceProduct?.data.shopName}</p>
            </div>
            <div className="menuInfo">
              <img src={choiceProduct?.data.productImage} alt="" className="thumbnail" />
              <div className="setInfo">
                <p className="setName">{choiceProduct?.data.productName}</p>
                <p className="setMenu">{choiceProduct?.data.productContent}</p>
                <p className="price">{choiceProduct?.data.productPrice}</p>
              </div>
            </div>
            <button type="button" className="like">
              <LikeSVG fill="red" stroke="transparent" />
            </button>
          </div>
        </Styled.ChoiceProductSection>
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
          </div>
        </Styled.OptionSection>
      </Styled.MypageWrapper>
      <Footer />
    </>
  );
};
export default MyPage;
