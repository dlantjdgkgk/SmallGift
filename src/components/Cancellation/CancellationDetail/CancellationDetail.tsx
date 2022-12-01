import * as Styled from "./style";
import { useLocation } from "react-router";

interface RefundType {
  productImage: string;
  shopName: string;
  shopContent: string;
  orderNumber: number;
  paidAmount: number;
}

interface PropsType {
  refund: RefundType;
}

const CancellationDetail = (): JSX.Element => {
  const { state } = useLocation();
  const result = state as PropsType;
  const refundDetail: RefundType = result.refund;

  return (
    <Styled.CancellationDetailWrapper>
      <Styled.ProductInfoSection>
        <h1 className="productInfo">상품 정보</h1>
        <button type="button" className="orderNumberInfo">
          <p>
            <span className="orderNumber">주문번호</span>
            <span className="number">{refundDetail.orderNumber}</span>
          </p>
        </button>
        <div className="gifticonInfo">
          <img src={refundDetail.productImage} alt="" className="thumbnail" />
          <div className="setInfo">
            <p className="restaurantName">{refundDetail.shopName}</p>
            <p className="setName">{refundDetail.shopContent}</p>
            <p className="price">{refundDetail.paidAmount}</p>
          </div>
        </div>
      </Styled.ProductInfoSection>
      <Styled.BoundaryLine />
      <Styled.RefundInfoSection>
        <h1>환불 정보</h1>
        <div className="totalInfo">
          <label htmlFor="totalPrice" className="totalPrice">
            총 결제금액
          </label>
          <span className="totalMoney">{refundDetail.paidAmount}</span>
        </div>
        <div className="refundInfo">
          <label htmlFor="refundPrice" className="refundPrice">
            총 환불금액
          </label>
          <span className="refundMoney">{refundDetail.paidAmount}</span>
        </div>
        <div className="refundMethodInfo">
          <label htmlFor="refundMethod" className="refundMethod">
            환불 수단
          </label>
          <input type="text" placeholder="신용카드" />
        </div>
      </Styled.RefundInfoSection>
    </Styled.CancellationDetailWrapper>
  );
};

export default CancellationDetail;
