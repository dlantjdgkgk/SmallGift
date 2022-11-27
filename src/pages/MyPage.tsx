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
import NotData from "../assets/img/NotData.png";
import Swal from "sweetalert2";

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
  length: number;
  shopId: string;
}

const MyPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfoProps>();
  const [socialLogin, setSocialLogin] = useState(true);
  const memberId = 1;
  const [choiceProduct, setChoiceProduct] = useState<MenuType>();
  const [orderList, setOrderList] = useState<IOrderListProps>();

  const Logout = async (): Promise<void> => {
    await Swal.fire({
      text: "로그아웃 하시겠습니까?",
      icon: "question",
      confirmButtonText: "네",
      cancelButtonText: "아니요",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await window.localStorage.clear();
        navigate("/");
        Swal.fire({
          text: "로그아웃 성공.",
          icon: "success",
          confirmButtonText: "확인",
        });
      }
    });
  };

  const resultmemberId = localStorage.getItem("member");
  console.log(resultmemberId);

  const userInfoAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/userInfo?memberId=${memberId}`);
      setUserInfo(result.data.data);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const OrderAllAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get("/api/user/order/all?memberId=16");
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

  useEffect(() => {
    userInfoAPI();
    GetWishListAPI();
    OrderAllAPI();
  }, []);

  return (
    <>
      <Styled.MypageWrapper>
        <Styled.Welcome>
          {localStorage.accessToken ? (
            <h1>
              안녕하세요 <span>{userInfo?.userName}</span>님!
            </h1>
          ) : (
            <h1>
              안녕하세요 <span>닉네임</span>님!
            </h1>
          )}
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
          {orderList?.productPrice === undefined ? (
            <div className="gifticonInfo">
              <Styled.NoData>
                <img src={NotData} alt="" />
                <div className="search">주문 내역이 없어요</div>
              </Styled.NoData>
            </div>
          ) : (
            <div className="gifticonInfo">
              <div className="thumbnail">
                <img src={orderList?.productImage} alt="" />
              </div>
              <div className="restaurantInfo">
                <p className="restaurantName">{orderList?.shopId}</p>
                <p className="setName">{orderList?.productName}</p>
                <p className="price">{orderList?.productPrice.toLocaleString()}원</p>
              </div>
            </div>
          )}
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

          {choiceProduct?.data.productPrice === undefined ? (
            <div className="gifticonInfo">
              <Styled.NoData>
                <img src={NotData} alt="" />
                <div className="search">찜한 상품이 없어요</div>
              </Styled.NoData>
            </div>
          ) : (
            <div className="gifticonInfo">
              <div className="locate">
                <img src={LocateWhite} alt="" />
                <p>{choiceProduct?.data.shopName}</p>
              </div>
              <div className="menuInfo">
                <img src={choiceProduct?.data.productImage} alt="" className="thumbnail" />
                <div className="setInfo">
                  <p className="setName">{choiceProduct?.data.productName}</p>
                  <p className="setMenu">단품</p>
                  <p className="price">{choiceProduct?.data.productPrice.toLocaleString()}원</p>
                </div>
              </div>
              <button type="button" className="like">
                <LikeSVG fill="red" stroke="transparent" />
              </button>
            </div>
          )}
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
