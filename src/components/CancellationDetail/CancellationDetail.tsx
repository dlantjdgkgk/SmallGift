import * as Styled from "./style";

const CancellationDetail = (): JSX.Element => {
  return (
    <Styled.CancellationDetailWrapper>
      <Styled.ProductInfoSection>
        <h1 className="productInfo">상품 정보</h1>
        <button type="button" className="orderNumberInfo">
          <p>
            <span className="orderNumber">주문번호</span>
            <span className="number">15930012001</span>
          </p>
        </button>
        <div className="gifticonInfo">
          <img src="/img/foodThumbnail.png" className="thumbnail" />
          <div className="setInfo">
            <p className="restaurantName">쭈꾸미랩소디 강남점</p>
            <p className="setName">쭈차돌세트</p>
            <p className="price">15,000원</p>
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
          <span className="totalMoney">15,000원</span>
        </div>
        <div className="refundInfo">
          <label htmlFor="refundPrice" className="refundPrice">
            총 환불금액
          </label>
          <span className="refundMoney">15,000원</span>
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
