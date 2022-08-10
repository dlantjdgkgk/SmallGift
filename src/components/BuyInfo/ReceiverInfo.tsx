import * as Styled from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ReceiverInfo = () => {
  const [foldSection, setFoldSection] = useState(false);
  const [transmissionBtn, setTransmissionBtn] = useState(false);
  const transmissionBtns = ["카카오톡", "문자"];
  const [selectBtn, setSelectBtn] = useState("카카오톡");

  const [inputs, setInputs] = useState({
    phone: "",
  });
  const { phone } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  return (
    <Styled.ReceiverInfoSection>
      <div className="receiveInfo">
        <p className="receive">받는 사람</p>
        <button
          type="button"
          onClick={() => {
            setFoldSection(!foldSection);
          }}
        >
          {foldSection ? (
            <FontAwesomeIcon icon={faChevronDown} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} size="2x" />
          )}
        </button>
      </div>
      {foldSection ? null : (
        <Styled.FormReceiver>
          <form>
            <div className="checkInfo">
              <input type="checkbox" />
              <p>나한테 주는 선물이에요😊</p>
            </div>
            <div className="transmissionWay">
              {transmissionBtns.map((btn, index) => {
                const isSelected = selectBtn === btn;
                return (
                  <button
                    type="button"
                    className="transmission"
                    style={isSelected ? { border: "1px solid#000000" } : undefined}
                    key={index}
                    onClick={() => {
                      setSelectBtn(btn);
                    }}
                  >
                    <div />
                    <p>{btn}</p>
                  </button>
                );
              })}
            </div>
            <div className="phone">
              <p>휴대폰</p>
              <input type="text" name="phone" placeholder="010-1234-5678" onChange={onChange} value={phone} />
            </div>
          </form>
        </Styled.FormReceiver>
      )}
    </Styled.ReceiverInfoSection>
  );
};

export default ReceiverInfo;
