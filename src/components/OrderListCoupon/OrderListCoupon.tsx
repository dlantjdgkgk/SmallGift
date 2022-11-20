import { apiInstance } from "../../api/setting";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as Styled from "./style";

interface ICouponInfoProps {
  productImage: string;
  couponNumber: string;
  expirationTime: number[];
}

const OrderListCoupon = () => {
  const [couponInfo, setCouponInfo] = useState<ICouponInfoProps>();
  const params = useParams();
  const orderDetailsId = params.id;

  const OrderCouponAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/order/coupon?memberId=16&orderDetailsId=${orderDetailsId}`);
      setCouponInfo(result.data.data);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  console.log(couponInfo);

  useEffect(() => {
    OrderCouponAPI();
  }, []);

  return (
    <Styled.OrderListCouponWrapper>
      <Styled.ProductInfoSection>
        <h1 className="productInfo">쿠폰 정보</h1>
        <button type="button" className="orderNumberInfo">
          <p>
            <span className="orderNumber">쿠폰번호</span>
            <span className="number">{couponInfo?.couponNumber}</span>
          </p>
        </button>
        <div className="gifticonInfo">
          <img src={couponInfo?.productImage} alt="쿠폰 이미지" />
        </div>
        <div className="setInfo">
          <span className="orderNumber">유효기한</span>
          <span className="number">
            {couponInfo?.expirationTime[0]}년 {couponInfo?.expirationTime[1]}월 {couponInfo?.expirationTime[2]}일
          </span>
        </div>
      </Styled.ProductInfoSection>
    </Styled.OrderListCouponWrapper>
  );
};

export default OrderListCoupon;
