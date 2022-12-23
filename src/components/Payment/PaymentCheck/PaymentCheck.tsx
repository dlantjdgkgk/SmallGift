import * as Styled from "./style";
import { useNavigate, useLocation } from "react-router";
import GifticonShare from "components/KakaoAPI/KakaoShare/GifticonShare";

interface DataType {
  productImage: string;
  productName: string;
  category: string;
}

interface PropsType {
  data: DataType;
}

const PaymentCheck = (): JSX.Element => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const result = state as PropsType;
  const image: DataType = result.data;

  return (
    <Styled.PaymentCheckSection>
      <Styled.Gift>🎁</Styled.Gift>
      <Styled.SendGift>마음이 담긴 선물</Styled.SendGift>
      <Styled.confirmPay>결제가 완료됐어요!</Styled.confirmPay>
      <GifticonShare image={image.productImage} productName={image.productName} category={image.category} />

      <Styled.orderListAndConfirm>
        <Styled.OrderListBtn
          onClick={(): void => {
            navigate("/mypage/orderlist");
          }}
        >
          주문내역 보러가기
        </Styled.OrderListBtn>

        <Styled.ConfirmBtn
          onClick={(): void => {
            navigate("/");
          }}
        >
          확인
        </Styled.ConfirmBtn>
      </Styled.orderListAndConfirm>
    </Styled.PaymentCheckSection>
  );
};

export default PaymentCheck;
