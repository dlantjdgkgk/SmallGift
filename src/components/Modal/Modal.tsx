import * as Styled from "./style";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface MovieInfo {
  setMenuName: string;
  setMenu: string;
  price: string;
}
interface Props {
  menu: MovieInfo;
  handleModalClose: () => void;
  modalIsOpen: boolean;
}
const Modal = ({ menu, handleModalClose, modalIsOpen }: Props) => {
  const navigate = useNavigate();
  // if (modalIsOpen) {
  //   document.body.style.overflow = "hidden";
  // }

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
