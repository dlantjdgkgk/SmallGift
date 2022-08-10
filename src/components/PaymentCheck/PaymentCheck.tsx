import * as Styled from "./style";
import { useNavigate } from "react-router";

const PaymentCheck = () => {
  const navigate = useNavigate();
  return (
    <Styled.PaymentCheckWrapper>
      <Styled.PaymentCheckSection>
        <div>
          <p className="gift">🎁</p>
          <p className="sendGift">홍길순님께 보내는 선물 </p>
          <p className="confirmPay">결제가 완료됐어요!</p>
        </div>
        <div className="sendMessage">
          <img src="/img/Kakao.png" />
          <button type="button">메세지 보내기</button>
        </div>
        <div className="orderListAndConfirm">
          <button
            type="button"
            className="orderList"
            onClick={() => {
              navigate("/mypage/orderlist");
            }}
          >
            구매내역 보러가기
          </button>
          <button
            type="button"
            className="confirm"
            onClick={() => {
              navigate("/");
            }}
          >
            확인
          </button>
        </div>
      </Styled.PaymentCheckSection>
    </Styled.PaymentCheckWrapper>
  );
};

export default PaymentCheck;
