import Footer from "components/Common/Footer/Footer";
import * as Styled from "./style";
import { useNavigate } from "react-router";
import ArrowBlack from "../../assets/img/ArrowBlack.png";
import MemberInfo from "components/MyPage/MemberInfo/MemberInfo";
import RecentOrder from "components/MyPage/RecentOrder/RecentOrder";
import ChoiceProduct from "components/MyPage/ChoiceProduct/ChoiceProduct";

const MyPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <Styled.MypageWrapper>
        <MemberInfo />
        <Styled.BoundaryLine />
        <RecentOrder />
        <ChoiceProduct />
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
