import { useNavigate } from "react-router";
import * as Styled from "./style";
import foodThumbnail from "../../assets/img/foodThumbnail.png";
import Loading from "../../assets/img/Loading.png";
import Arrow from "../../assets/img/Arrow.png";
import Success from "../../assets/img/Success.png";

const Cancellation = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/mypage/refund/${15231231231232}`);
  };

  return (
    <Styled.CancellationWrapper>
      <Styled.CancellationSection>
        <button type="button" className="orderNumberInfo" onClick={handleClick}>
          <p>
            <span className="orderNumber">주문번호s</span>
            <span className="number">15930012001</span>
            <img src={Arrow} alt="" />
          </p>
        </button>
        <div className="gifticonInfo">
          <img src={foodThumbnail} alt="" className="thumbnail" />
          <div className="setInfo">
            <p className="restaurantName">쭈꾸미랩소디 강남점</p>
            <p className="setName">쭈차돌세트</p>
            <p className="price">15,000원</p>
          </div>
        </div>
        <div className="cancelStatus">
          <img src={Loading} alt="" />
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
            <img src={Arrow} alt="" />
          </p>
        </button>
        <div className="gifticonInfo">
          <img src={foodThumbnail} alt="" className="thumbnail" />
          <div className="setInfo">
            <p className="restaurantName">쭈꾸미랩소디 강남점</p>
            <p className="setName">쭈차돌세트</p>
            <p className="price">15,000원</p>
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
      <Styled.BoundaryLine />
    </Styled.CancellationWrapper>
  );
};

export default Cancellation;
