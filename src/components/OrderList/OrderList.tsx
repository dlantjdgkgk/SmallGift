import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as Styled from "./style";
import foodThumbnail from "../../assets/img/foodThumbnail.png";

const OrderList = (): JSX.Element => {
  const gifticonList = [
    {
      nickName: "이무성",
      restaurantName: "리미니 장지점",
      setMenuName: "파스타세트",
      setMenu: "쭈꾸미+차돌+묵사밥+볶음밥",
      price: "25,000",
    },
    {
      nickName: "김지동",
      restaurantName: "김지동 짱짱",
      setMenuName: "김지동세트",
      setMenu: "쭈꾸미+차돌+묵사밥+볶음밥2",
      price: "20,000",
    },
  ];
  const navigate = useNavigate();

  const showConfirm = (): void => {
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
                <img src={foodThumbnail} alt="" />
                <div className="customerInfo">🎁{gifticon.nickName}</div>
              </div>
              <div className="restaurantInfo">
                <p className="restaurantName">{gifticon.restaurantName}</p>
                <p className="setName">{gifticon.setMenuName}</p>
                {/* <p className="setMenu">{gifticon.setMenu}</p> */}
                <p className="price">{gifticon.price}원</p>
              </div>
            </div>
            <div className="optionButton">
              <button type="button" className="cancel" onClick={showConfirm}>
                주문 취소하기
              </button>
              <Link to="/payment" state={{ menu: gifticon }}>
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
