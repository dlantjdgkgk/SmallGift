import * as Styled from "./style";
import { useNavigate, useLocation } from "react-router";
import GifticonShare from "components/KakaoAPI/KakaoShare/GifticonShare";

interface DataType {
  productImage: string;
}

interface PropsType {
  data: DataType;
}

const PaymentCheck = (): JSX.Element => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const result = state as PropsType;
  const image: DataType = result.data;

  console.log(image.productImage);

  return (
    <Styled.PaymentCheckWrapper>
      <Styled.PaymentCheckSection>
        <div>
          <p className="gift">🎁</p>
          <p className="sendGift">홍길순님께 보내는 선물 </p>
          <p className="confirmPay">결제가 완료됐어요!</p>
        </div>
        <GifticonShare image={image.productImage} />

        <div className="orderListAndConfirm">
          <button
            type="button"
            className="orderList"
            onClick={(): void => {
              navigate("/mypage/orderlist");
            }}
          >
            주문내역 보러가기
          </button>
          <button
            type="button"
            className="confirm"
            onClick={(): void => {
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
