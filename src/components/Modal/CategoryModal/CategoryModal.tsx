import * as Styled from "./style";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Props } from "./types";
import LikeSVG from "components/LikeSVG/LikeSVG";
import KakaoShare from "components/KakaoAPI/KakaoShare/KakaoShare";
import { Link } from "react-router-dom";

const CategoryModal = ({ menu, handleModalClose }: Props): JSX.Element => {
  const [like, setLike] = useState(false);
  const params = useParams();
  const parameter = params.id;

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e: MouseEvent): void => {
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
            <p className="price">{menu.price}원</p>
            <div className="button">
              <button type="button" className="share">
                <KakaoShare parameter={parameter} />
              </button>
              <button type="button" onClick={(): void => setLike(!like)}>
                <LikeSVG fill={like ? "red" : undefined} stroke={like ? "transparent" : "gray"} />
              </button>
            </div>
          </div>
          <Link to="/payment" state={{ menu }}>
            <button type="button" className="gift">
              선물하기
            </button>
          </Link>
        </div>
      </Styled.ModalWrapper>
    </Styled.Background>
  );
};

export default CategoryModal;
