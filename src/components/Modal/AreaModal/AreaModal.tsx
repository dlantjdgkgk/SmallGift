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
    if (memberID) APIcall();
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
          <Styled.LocateSelection>지역 설정하기</Styled.LocateSelection>

          {addressState.jibunAddress ? (
            <>
              <div aria-hidden="true" onClick={handleDaumPostOpne}>
                <img src={Locate} alt="" />
                <span>주소</span>
                <Styled.Address type="button">{addressState.jibunAddress}</Styled.Address>
              </div>
              <Styled.afterSelection type="button" onClick={handleClick}>
                선택완료
              </Styled.afterSelection>
            </>
          ) : (
            <>
              <div aria-hidden="true" onClick={handleDaumPostOpne}>
                <img src={Locate} alt="" />
                <Styled.PostalCode type="button">우편번호로 찾기</Styled.PostalCode>
              </div>
              <Styled.beforeSelection type="button"> 선택완료</Styled.beforeSelection>
            </>
          )}
        </Styled.ModalWrapper>
      )}
    </Styled.Background>
  );
};
export default AreaModal;
