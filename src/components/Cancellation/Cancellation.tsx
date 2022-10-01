import { useNavigate } from "react-router";
import * as Styled from "./style";

const Cancellation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/mypage/refund/${15231231231232}`);
  };

  return (
    <Styled.CancellationWrapper>
      <Styled.CancellationSection>
        <button type="button" className="orderNumberInfo" onClick={handleClick}>
          <p>
            <span className="orderNumber">주문번호s</span>
            <span className="number">15930012001</span>
            <img src="/img/Arrow.png" />
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
        <div className="cancelStatus">
          <img src="/img/Loading.png" />
          <p className="statusInfo">
            <span className="status">상태: </span>
            <span className="loading"> 취소 처리 중</span>
          </p>
        </div>
      </Styled.CancellationSection>
      <Styled.BoundaryLine />
      <Styled.CancellationSection>
        <button type="button" className="orderNumberInfo" onClick={handleClick}>
          <p>
            <span className="orderNumber">주문번호</span>
            <span className="number">15930012001</span>
            <img src="/img/Arrow.png" />
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
        <div className="cancelStatus">
          <img src="/img/Success.png" />
          <p className="statusInfo">
            <span className="status">상태: </span>
            <span className="loading"> 환불완료(신용카드)</span>
          </p>
        </div>
      </Styled.CancellationSection>
      <Styled.BoundaryLine />
    </Styled.CancellationWrapper>
  );
};

export default Cancellation;
