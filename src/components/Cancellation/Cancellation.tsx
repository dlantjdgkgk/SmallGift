import * as Styled from "./style";
import Arrow from "../../assets/img/Arrow.png";
import Success from "../../assets/img/Success.png";
import React, { useEffect, useState } from "react";
import { apiInstance } from "../../api/setting";
import { Link } from "react-router-dom";

interface IRefundListProps {
  productImage: string;
  shopName: string;
  shopContent: string;
  orderNumber: number;
  paidAmount: number;
}

const Cancellation = (): JSX.Element => {
  const [refundList, setRefundList] = useState<IRefundListProps[]>([]);

  const memberId = localStorage.getItem("memberId");

  const OrderRefundAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/order/refund/all?memberId=${memberId}`);
      setRefundList(result.data.data.refundDetailsDtoList.reverse());
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  console.log(refundList);

  useEffect(() => {
    OrderRefundAPI();
  }, []);

  return (
    <Styled.CancellationWrapper>
      {refundList.map((refund) => {
        return (
          <Styled.CancellationSection key={refund.orderNumber}>
            <Link to={`/mypage/refund/${refund.orderNumber}`} state={{ refund }}>
              <button type="button" className="orderNumberInfo">
                <span className="orderNumber">주문번호</span>
                <span className="number">{refund.orderNumber}</span>
                <img src={Arrow} alt="" />
              </button>
            </Link>
            <div className="gifticonInfo">
              <img src={refund.productImage} alt="" className="thumbnail" />
              <div className="setInfo">
                <p className="restaurantName">{refund.shopName}</p>
                <p className="setName">{refund.shopContent}</p>
                <p className="price">{refund.paidAmount}</p>
              </div>
            </div>
            <div className="cancelStatus">
              <img src={Success} alt="" />
              <p className="statusInfo">
                <span className="status">상태: </span>
                <span className="loading"> 환불완료(신용카드)</span>
              </p>
            </div>
          </Styled.CancellationSection>
        );
      })}
    </Styled.CancellationWrapper>
  );
};

export default Cancellation;
