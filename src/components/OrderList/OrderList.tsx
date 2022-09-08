import { useCallback } from "react";
import { useNavigate } from "react-router";
import * as Styled from "./style";

const OrderList = () => {
  const gifticonList = [
    {
      nickName: "기면수",
      restaurantName: "쭈꾸미랩소디 강남점",
      setMenu: "쭈차돌세트",
      price: "15,000",
    },
    { nickName: "기면수", restaurantName: "쭈꾸미랩소디 강남점", setMenu: "쭈차돌세트", price: "15,000" },
    { nickName: "기면수", restaurantName: "쭈꾸미랩소디 강남점", setMenu: "쭈차돌세트", price: "15,000" },
    { nickName: "기면수", restaurantName: "쭈꾸미랩소디 강남점", setMenu: "쭈차돌세트", price: "15,000" },
    { nickName: "기면수", restaurantName: "쭈꾸미랩소디 강남점", setMenu: "쭈차돌세트", price: "15,000" },
    { nickName: "기면수", restaurantName: "쭈꾸미랩소디 강남점", setMenu: "쭈차돌세트", price: "15,000" },
  ];
  const navigate = useNavigate();

  const showConfirm = () => {
    if (window.confirm("환불 하시겠습니까?")) {
      navigate("/mypage/refund");
    }
  };

  return (
    <Styled.OrderListWrapper>
      {gifticonList.map((gifticon, index) => {
        return (
          <Styled.OrderSection key={index}>
            <p className="date">2022년 08월 07일 구매</p>
            <div className="gifticonInfo">
              <div className="thumbnail">
                <img src="/img/foodThumbnail.png" />
                <div className="customerInfo">🎁{gifticon.nickName}</div>
              </div>
              <div className="restaurantInfo">
                <p className="restaurantName">{gifticon.restaurantName}</p>
                <p className="setName">{gifticon.setMenu}</p>
                <p className="price">{gifticon.price}원</p>
              </div>
            </div>
            <div className="optionButton">
              <button type="button" className="cancel" onClick={showConfirm}>
                주문 취소하기
              </button>
              <button
                type="button"
                className="purchase"
                onClick={() => {
                  navigate("/payment");
                }}
              >
                재구매하기
              </button>
            </div>
          </Styled.OrderSection>
        );
      })}
    </Styled.OrderListWrapper>
  );
};

export default OrderList;
