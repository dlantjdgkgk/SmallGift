import Kakao from "../../../assets/img/Kakao.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Arrow from "../../../assets/img/Arrow.png";
import * as Styled from "./style";
import { apiInstance } from "api/setting";

interface UserInfoProps {
  userName: string;
  userPhone: string;
  accountNumber: number;
  accountBank: string;
}
const MemberInfo = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfoProps>();
  const memberId = localStorage.getItem("memberId");

  const userInfoAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/userInfo?memberId=${memberId}`);
      setUserInfo(result.data.data);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  useEffect(() => {
    userInfoAPI();
  }, []);

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

  return (
    <>
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
            <img src={Kakao} alt="" />
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
        <div className="phone">
          <label htmlFor="phone">연락처</label>
          <span>{userInfo?.userPhone}</span>
        </div>
        <div className="account">
          <label htmlFor="account">환불계좌</label>
          <span>
            {userInfo?.accountNumber} {userInfo?.accountBank}
          </span>
        </div>
      </Styled.MemberInfoSection>
    </>
  );
};

export default MemberInfo;
