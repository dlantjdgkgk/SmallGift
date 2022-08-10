import * as Styled from "./style";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Props } from "./types";
import Portal from "components/Modal/Portal/Portal";

const CategoryModal = ({ menu, handleModalClose }: Props) => {
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
              navigate("/payment");
            }}
          >
            선물하기
          </button>
        </Styled.ModalWrapper>
      </Styled.Background>
    </Portal>
  );
};

export default CategoryModal;
