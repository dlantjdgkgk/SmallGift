import * as Styled from "./style";
import { useCallback, useEffect, useState } from "react";
import KakaoAdress from "components/KakaoAPI/KakaoAdress/KakaoAdress";
import useDaumPost from "hooks/useDaumPost";
import { apiInstance } from "../../../api/setting";

interface Props {
  setModalIsOpen: any;
  handleModalClose(): void;
  flag: boolean;
  setFlag(active: boolean): void;
}

const AreaModal = ({ setModalIsOpen, handleModalClose, setFlag, flag }: Props) => {
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
    if ((e.target as HTMLDivElement).id === "modal-container") handleModalClose();
  };

  const handleClick = async () => {
    try {
      const payload = {
        locate: addressState.jibunAddress,
        memberId: 15,
      };
      const res = await apiInstance.post("/api/user/locate", payload);
      setFlag(!flag);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
    <Styled.Background id="modal-container">
      {isDaumPostOpen ? (
        <KakaoAdress handleDaumPostOpne={handleDaumPostOpne} handleComplete={handleComplete} />
      ) : (
        <Styled.ModalWrapper>
          <p className="locateSelection">지역 설정하기</p>

          {addressState.jibunAddress ? (
            <>
              <div className="postalCode" aria-hidden="true" onClick={handleDaumPostOpne}>
                <img src="/img/Locate.png" />
                <p className="address">주소</p>
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
                  handleClick();
                }}
              >
                선택완료
              </button>
            </>
          ) : (
            <>
              <div className="postalCode" aria-hidden="true" onClick={handleDaumPostOpne}>
                <img src="/img/Locate.png" />
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
  );
};
export default AreaModal;
