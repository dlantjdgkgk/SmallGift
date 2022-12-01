import * as Styled from "./style";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { apiInstance } from "api/setting";
import Arrow from "../../../assets/img/Arrow.png";
import NotData from "../../../assets/img/NotData.png";

interface IOrderListProps {
  productImage: string;
  productName: string;
  productPrice: string;
  productContent: string;
  id: number;
  length: number;
  shopId: string;
}

const RecentOrder = () => {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState<IOrderListProps>();
  const memberId = localStorage.getItem("memberId");

  const OrderAllAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/order/all?memberId=${memberId}`);
      setOrderList(result.data.data.orderDetailsDtoList.pop());
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  useEffect(() => {
    OrderAllAPI();
  }, []);

  return (
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
  );
};

export default RecentOrder;
