import * as Styled from "./style";
import { useLocation, useNavigate } from "react-router";
import { useCallback, useEffect, useState } from "react";
import { Props } from "./types";
import LikeSVG from "components/SVG/LikeSVG";
import ProductShare from "components/KakaoAPI/KakaoShare/ProductShare";
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
  const memberId = localStorage.getItem("memberId");
  const navigate = useNavigate();

  const location = useLocation();
  const catgegory = decodeURIComponent(location.pathname.split("/")[2]);
  const shopName = decodeURIComponent(location.pathname.split("/")[3]);
  const shopId = decodeURIComponent(location.pathname.split("/")[4]);

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
    if (!localStorage.accessToken) {
      navigate("/login");
    }
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
        <Styled.ProductName>{menu.data.productName}</Styled.ProductName>
        <Styled.ProductContent>단품</Styled.ProductContent>

        <Styled.OnePerson>1인 기준</Styled.OnePerson>
        <Styled.PriceAndBtn>
          <p>{menu.data.productPrice}원</p>
          <div>
            <Styled.ShareBtn type="button">
              <ProductShare catgegory={catgegory} shopName={shopName} shopId={shopId} />
            </Styled.ShareBtn>
            <button type="button" onClick={handleLikeButtonClick}>
              <LikeSVG fill={wishtData ? "red" : undefined} stroke={wishtData ? "transparent" : "gray"} />
            </button>
          </div>
        </Styled.PriceAndBtn>
        <Link to="/payment" state={{ menu }}>
          <Styled.GiftBtn type="button">선물하기</Styled.GiftBtn>
        </Link>
      </Styled.ModalWrapper>
    </Styled.Background>
  );
};

export default CategoryModal;
