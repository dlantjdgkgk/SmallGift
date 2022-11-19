import * as Styled from "./style";
import { useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";
import { Props } from "./types";
import LikeSVG from "components/LikeSVG/LikeSVG";
import KakaoShare from "components/KakaoAPI/KakaoShare/KakaoShare";
import { Link } from "react-router-dom";
import { apiInstance } from "api/setting";

type WishProductType = {
  productContent: string;
  productId: number;
  productImage: string;
  productName: string;
  productPrice: number;
  productStock: number;
  shopName: string;
  wishListId: number;
};

const CategoryModal = ({ menu, handleModalClose }: Props): JSX.Element => {
  const [wishtData, setWishData] = useState<WishProductType | undefined>();
  const params = useParams();
  const parameter = params.id;
  const memberId = 1;

  const updateWishData = useCallback(() => {
    apiInstance.get(`/api/user/wishList?memberId=${memberId}`).then(
      ({
        data: {
          data: { wishList },
        },
      }) => {
        const wishProduct = (wishList as Array<{ data: WishProductType }>).find(
          (product) => product.data.productId === menu.data.id,
        );
        if (wishProduct) setWishData(wishProduct.data);
      },
    );
  }, [menu.data.id]);

  useEffect(() => {
    // 상품 찜 여부 확인
    updateWishData();
  }, [updateWishData]);

  const handleLikeButtonClick = async () => {
    if (wishtData) {
      apiInstance.delete(`/api/user/wishList?wishListId=${wishtData.wishListId}`);
      setWishData(undefined);
    } else {
      const payload = {
        productId: menu.data.id,
        memberId,
      };
      await apiInstance.post("/api/user/wishList", payload);
      updateWishData();
    }
  };

  const handleClickOutside = useCallback(
    (e: MouseEvent): void => {
      if ((e.target as HTMLDivElement).id === "modal-container") handleModalClose();
    },
    [handleModalClose],
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);

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
            <p className="setName">{menu.data.productName}</p>
          </div>
          <p className="setMenu">{menu.data.productName}</p>
        </div>

        <div className="priceInformation">
          <p className="onePerson">1인 기준</p>
          <div className="priceAndButton">
            <p className="price">{menu.data.productPrice}원</p>
            <div className="button">
              <button type="button" className="share">
                <KakaoShare parameter={parameter} />
              </button>
              <button type="button" onClick={handleLikeButtonClick}>
                <LikeSVG fill={wishtData ? "red" : undefined} stroke={wishtData ? "transparent" : "gray"} />
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
