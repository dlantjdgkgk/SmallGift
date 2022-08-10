import * as Styled from "./style";
import Portal from "components/Modal/Portal/Portal";
import { useCallback, useEffect, useState } from "react";
import KakaoAdress from "components/KakaoAPI/KakaoAdress/KakaoAdress";
import useDaumPost from "hooks/useDaumPost";

interface Props {
  setModalIsOpen: any;
  handleModalClose(): void;
}

const AreaModal = ({ setModalIsOpen, handleModalClose }: Props) => {
  const { addressState, handleComplete } = useDaumPost();
  const [isDaumPostOpen, setIsDaumPostOpen] = useState(false);

  const handleDaumPostOpne = useCallback(() => setIsDaumPostOpen((prve) => !prve), []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e: MouseEvent) => {
    if ((e.target as HTMLDivElement).className === "sc-eCYdqJ eLAAmI") handleModalClose();
  };

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
        {isDaumPostOpen ? (
          <KakaoAdress handleDaumPostOpne={handleDaumPostOpne} handleComplete={handleComplete} />
        ) : (
          <Styled.ModalWrapper>
            <p>지역 설정하기</p>

            {addressState.jibunAddress ? (
              <>
                <div
                  className="postalCode"
                  aria-hidden="true"
                  onClick={handleDaumPostOpne}
                  style={{ border: "1px solid #000000" }}
                >
                  <div />
                  <button type="button" className="newAddress">
                    {addressState.jibunAddress}
                  </button>
                </div>
                <button
                  type="button"
                  className="afterSelection"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalIsOpen(false);
                  }}
                >
                  선택완료
                </button>
              </>
            ) : (
              <>
                <div className="postalCode" aria-hidden="true" onClick={handleDaumPostOpne}>
                  <div />
                  <button type="button" className="findAddress">
                    우편번호로 찾기
                  </button>
                </div>
                <button type="button" className="beforeSelection">
                  선택완료
                </button>
              </>
            )}
          </Styled.ModalWrapper>
        )}
      </Styled.Background>
    </Portal>
  );
};
export default AreaModal;
