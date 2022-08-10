import { useState } from "react";
import * as Styled from "./style";
import { useNavigate } from "react-router";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {};
  const [cardButton, setCardButton] = useState(false);
  const [bankButton, setBankButton] = useState(false);
  const [phoneButton, setPhoneButton] = useState(false);
  const [selectBtn, setSelectBtn] = useState("카드");

  const handleCard = () => {
    setCardButton(!cardButton);
  };
  const handleBank = () => {
    setBankButton(!bankButton);
  };
  const handlePhone = () => {
    setPhoneButton(!phoneButton);
  };

  return (
    <Styled.PaymentMethodSection>
      <p className="paymentMethod">결제 수단</p>
      <div className="method">
        <button
          type="button"
          className="card"
          onClick={handleCard}
          style={cardButton ? { border: "1px solid black" } : null}
        >
          <div />
          <p>카드</p>
        </button>
        <button
          type="button"
          className="bank"
          onClick={handleBank}
          style={bankButton ? { border: "1px solid black" } : null}
        >
          <div />
          <p>무통장입금</p>
        </button>
        <button
          type="button"
          className="phone"
          onClick={handlePhone}
          style={phoneButton ? { border: "1px solid black" } : null}
        >
          <div />
          <p>휴대폰</p>
        </button>
      </div>
      <div className="payment">
        <button
          type="button"
          onSubmit={handleSubmit}
          onClick={() => {
            navigate("/payment/check");
          }}
        >
          15,000원 결제하기
        </button>
      </div>
    </Styled.PaymentMethodSection>
  );
};

export default PaymentMethod;
