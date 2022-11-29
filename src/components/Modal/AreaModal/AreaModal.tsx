import * as Styled from "./style";
import React, { SetStateAction, useCallback, useEffect, useState } from "react";
import KakaoAdress from "components/KakaoAPI/KakaoAdress/KakaoAdress";
import useDaumPost from "hooks/useDaumPost";
import { apiInstance } from "../../../api/setting";
import Locate from "../../../assets/img/Locate.png";

interface Props {
  setModalIsOpen: React.Dispatch<SetStateAction<boolean>>;
  handleModalClose: () => void;
  userLocateAPI: () => void;
}

const AreaModal = ({ setModalIsOpen, handleModalClose, userLocateAPI }: Props): JSX.Element => {
  const { addressState, handleComplete } = useDaumPost();
  const [isDaumPostOpen, setIsDaumPostOpen] = useState(false);
  const memberID = localStorage.getItem("memberId");

  const localLocate = addressState.jibunAddress;
  localStorage.setItem("localLocate", localLocate);

  const handleDaumPostOpne = useCallback(() => setIsDaumPostOpen((prve) => !prve), []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e: MouseEvent): void => {
    if ((e.target as HTMLDivElement).id === "modal-container") handleModalClose();
  };

  const APIcall = async (): Promise<void> => {
    try {
      const payload = {
        locate: addressState.jibunAddress,
        memberId: memberID,
      };
      await apiInstance.post("/api/user/locate", payload);
      userLocateAPI();
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    APIcall();
    setModalIsOpen(false);
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
                <img src={Locate} alt="" />
                <p className="address">주소</p>
                <button type="button" className="newAddress">
                  {addressState.jibunAddress}
                </button>
              </div>
              <button type="button" className="afterSelection" onClick={handleClick}>
                선택완료
              </button>
            </>
          ) : (
            <>
              <div className="postalCode" aria-hidden="true" onClick={handleDaumPostOpne}>
                <img src={Locate} alt="" />
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
