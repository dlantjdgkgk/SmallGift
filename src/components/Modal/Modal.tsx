import * as Styled from "./style";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { MovieInfo, Props } from "./types";

const Modal = ({ menu, handleModalClose, modalIsOpen }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e: MouseEvent) => {
    console.log(e.target);
    if ((e.target as HTMLDivElement).className === "sc-iBkjds fGjOCA") handleModalClose();
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
    <Styled.ModalWrapper>
      <div className="setMenuInformation">
        <div>
          <p className="setName">{menu.setMenuName}</p>
          <button type="button" onClick={handleModalClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <p className="setMenu">{menu.setMenu}</p>
      </div>

      <div className="priceInformation">
        <p className="onePerson">1인 기준</p>
        <p className="price">{menu.price}</p>
      </div>
      <button
        type="button"
        className="shoppingBasket"
        onClick={() => {
          navigate("/shop");
        }}
      >
        장바구니
      </button>
      <button
        type="button"
        className="gift"
        onClick={() => {
          navigate("/");
        }}
      >
        선물하기
      </button>
    </Styled.ModalWrapper>
  );
};

export default Modal;
