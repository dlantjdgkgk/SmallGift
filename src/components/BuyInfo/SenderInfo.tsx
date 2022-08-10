import * as Styled from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SenderInfo = () => {
  const [foldSection, setFoldSection] = useState(false);
  const [selected, setSelected] = useState("");
  const selectList = ["daum.net", "naver.com", "gmail.com"];

  const [inputs, setInputs] = useState({
    nickName: "",
    phone: "",
    email: "",
  });
  const { nickName, phone, email } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  return (
    <Styled.SenderInfoSection>
      <div className="senderInfo">
        <p className="sender">보내는 사람</p>
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
        <Styled.FormSender>
          <form>
            <div className="checkInfo">
              <input type="checkbox" />
              <p>회원 정보와 동일해요</p>
            </div>
            <div className="nickName">
              <p>발송인명</p>
              <input type="text" name="nickName" placeholder="홍길동" onChange={onChange} value={nickName} />
            </div>
            <div className="phone">
              <p>휴대폰</p>
              <input type="text" name="phone" placeholder="010-1234-5678" onChange={onChange} value={phone} />
            </div>
            <div className="emailInfo">
              <p className="email">이메일</p>
              <input type="text" name="email" placeholder="Drstrange" onChange={onChange} value={email} />
              <p>@</p>
              <select
                onChange={(e) => {
                  setSelected(e.target.value);
                }}
                value={selected}
              >
                {selectList.map((item, index) => (
                  <option value={item} key={index}>
                    <p>{item}</p>
                  </option>
                ))}
              </select>
            </div>
          </form>
        </Styled.FormSender>
      )}
    </Styled.SenderInfoSection>
  );
};

export default SenderInfo;
