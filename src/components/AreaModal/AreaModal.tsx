import * as Styled from "./style";
import Portal from "components/Portal/Portal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import KakaoAdress from "components/KakaoAdress/KakaoAdress";

const AreaModal = () => {
  const [isBoolean, setIsBoolean] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <Portal>
      <Styled.Background>
        <Styled.ModalWrapper>
          <p>지역 설정하기</p>

          <div>
            <KakaoAdress>
              <div className="postalCode" aria-hidden="true">
                <div />
                <button type="button">우편번호로 찾기</button>
              </div>
            </KakaoAdress>
          </div>

          <button type="button" className="selectionComplete">
            선택완료
          </button>
        </Styled.ModalWrapper>
      </Styled.Background>
    </Portal>
  );
};
export default AreaModal;
