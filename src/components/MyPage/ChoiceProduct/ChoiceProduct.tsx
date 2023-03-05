import LikeSVG from "components/SVG/LikeSVG";
import { useEffect, useState } from "react";
import { apiInstance } from "api/setting";
import Arrow from "../../../assets/img/Arrow.png";
import LocateWhite from "../../../assets/img/LocateWhite.png";
import NotData from "../../../assets/img/NotData.png";
import * as Styled from "./style";
import { useNavigate } from "react-router";

interface MenuType {
  data: {
    productImage: string;
    productPrice: string;
    productName: string;
    productContent: string;
    shopName: string;
  };
}

const ChoiceProduct = () => {
  const [choiceProduct, setChoiceProduct] = useState<MenuType>();
  const memberId = localStorage.getItem("memberId");
  const navigate = useNavigate();

  const GetWishListAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/wishList?memberId=${memberId}`);
      setChoiceProduct(result.data.data.wishList.pop());
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  useEffect(() => {
    GetWishListAPI();
  }, []);

  return (
    <Styled.ChoiceProductSection>
      <div className="choiceProduct">
        <p className="choice">찜한 상품</p>
        <button
          type="button"
          className="more"
          onClick={(): void => {
            navigate("/mypage/like");
          }}
        >
          <span>더보기</span>
          <img src={Arrow} alt="" />
        </button>
      </div>

      {choiceProduct?.data.productPrice === undefined ? (
        <div className="gifticonInfo">
          <Styled.NoData>
            <img src={NotData} alt="" />
            <div className="search">찜한 상품이 없어요</div>
          </Styled.NoData>
        </div>
      ) : (
        <div className="gifticonInfo">
          <div className="locate">
            <img src={LocateWhite} alt="" />
            <p>{choiceProduct?.data.shopName}</p>
          </div>
          <div className="menuInfo">
            <img src={choiceProduct?.data.productImage} alt="" className="thumbnail" />
            <div className="setInfo">
              <p className="setName">{choiceProduct?.data.productName}</p>
              <p className="setMenu">단품</p>
              <p className="price">{choiceProduct?.data.productPrice.toLocaleString()}원</p>
            </div>
          </div>
          <button type="button" className="like">
            <LikeSVG fill="red" stroke="transparent" />
          </button>
        </div>
      )}
    </Styled.ChoiceProductSection>
  );
};

export default ChoiceProduct;
