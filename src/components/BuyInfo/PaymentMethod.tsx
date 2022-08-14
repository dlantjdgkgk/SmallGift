import { useState } from "react";
import * as Styled from "./style";
import { useNavigate } from "react-router";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("card");

  return (
    <Styled.PaymentMethodSection>
      <p className="paymentMethod">결제 수단</p>
      <div className="method">
        <button
          type="button"
          className="card"
          onClick={() => setSelected("card")}
          style={{ border: selected === "card" && "1px solid black" }}
        >
          <div />
          <p>카드</p>
        </button>
        <button
          type="button"
          className="bank"
          onClick={() => setSelected("bank")}
          style={{ border: selected === "bank" && "1px solid black" }}
        >
          <div />
          <p>무통장입금</p>
        </button>
        <button
          type="button"
          className="phone"
          onClick={() => setSelected("phone")}
          style={{ border: selected === "phone" && "1px solid black" }}
        >
          <div />
          <p>휴대폰</p>
        </button>
      </div>
      <div className="payment">
        <button
          type="button"
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
