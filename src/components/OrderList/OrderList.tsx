import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as Styled from "./style";
import { apiInstance } from "api/setting";
import { useEffect, useState } from "react";
import { Alert } from "react-st-modal";

interface IOrderListProps {
  productImage: string;
  productName: string;
  productPrice: string;
  productContent: string;
  id: number;
  orderDetailsId: number;
}

const OrderList = (): JSX.Element => {
  const [orderList, setOrderList] = useState<IOrderListProps[]>([]);
  const navigate = useNavigate();

  const handleCancelBtn = async (value: number): Promise<void> => {
    await Alert("주문을 취소하시겠습니까?");
    await OrderDeleteAPI(value);
    navigate("/mypage/refund");
  };

  const OrderDeleteAPI = async (value: number): Promise<void> => {
    try {
      await apiInstance.delete(`/api/user/order?memberId=16&orderDetailsId=${value}`);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const OrderAllAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get("/api/user/order/all?memberId=16");
      setOrderList(result.data.data.orderDetailsDtoList);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const aaaa = orderList.map((order) => order.orderDetailsId);
  console.log(aaaa);

  useEffect(() => {
    OrderAllAPI();
  }, []);

  return (
    <Styled.OrderListWrapper>
      {orderList.map((order) => {
        return (
          <Styled.OrderSection key={order.orderDetailsId}>
            <p className="date">2022년 08월 07일 구매</p>
            <Link to={`/mypage/orderlist/coupon/${order.orderDetailsId}`}>
              <div className="gifticonInfo">
                <div className="thumbnail">
                  <img src={order.productImage} alt="" />
                </div>
                <div className="restaurantInfo">
                  <p className="restaurantName">{order.productName}</p>
                  <p className="setName">{order.productContent}</p>
                  <p className="price">{order.productPrice}원</p>
                </div>
              </div>
            </Link>
            <div className="optionButton">
              <button
                type="button"
                className="cancel"
                onClick={() => {
                  handleCancelBtn(order.orderDetailsId);
                }}
              >
                주문 취소하기
              </button>

              <Link to="/payment" state={{ menu: { data: order } }}>
                <button type="button" className="purchase">
                  재구매하기
                </button>
              </Link>
            </div>
          </Styled.OrderSection>
        );
      })}
    </Styled.OrderListWrapper>
  );
};

export default OrderList;
