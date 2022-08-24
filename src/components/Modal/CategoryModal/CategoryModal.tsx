import * as Styled from "./style";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Props } from "./types";
import LikeSVG from "components/LikeSVG/LikeSVG";
import KakaoShare from "components/KakaoAPI/KakaoShare/KakaoShare";

const CategoryModal = ({ menu, handleModalClose }: Props) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e: MouseEvent) => {
    if ((e.target as HTMLDivElement).id === "modal-container") handleModalClose();
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
      <Styled.ModalWrapper>
        <div className="setMenuInformation">
          <div>
            <p className="setName">{menu.setMenuName}</p>
          </div>
          <p className="setMenu">{menu.setMenu}</p>
        </div>

        <div className="priceInformation">
          <p className="onePerson">1인 기준</p>
          <div className="priceAndButton">
            <p className="price">{menu.price}</p>
            <div className="button">
              <button type="button" className="share">
                <KakaoShare />
              </button>
              <button type="button" onClick={() => setLike(!like)}>
                <LikeSVG fill={like ? "red" : undefined} />
              </button>
            </div>
          </div>
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
  );
};

export default CategoryModal;
