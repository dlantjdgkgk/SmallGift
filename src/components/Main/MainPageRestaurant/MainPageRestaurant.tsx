import * as Styled from "./style";
import Portal from "components/Modal/Portal/Portal";
import AreaModal from "components/Modal/AreaModal/AreaModal";
import { useEffect, useState } from "react";
import { apiInstance } from "../../../api/setting";
import Arrow from "../../../assets/img/Arrow.png";
import Locate from "../../../assets/img/Locate.png";
import NotData from "../../../assets/img/NotData.png";
import { Link } from "react-router-dom";
import { ILocateListProps } from "./types";

const MainPageRestaurant = (): JSX.Element => {
  const locateInformation = localStorage.getItem("localLocate") || "서울 강남구 신사동 537-5";
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [locate, setLocate] = useState("");
  const handleModalClose = (): void => setModalIsOpen(false);
  const [locateList, setLocateList] = useState<ILocateListProps[]>([]);
  const memberId = localStorage.getItem("memberId");

  const userLocateAPI = async (): Promise<string> => {
    try {
      const res = await apiInstance.get(`/api/user/locate?memberId=${memberId}`);
      setLocate(res.data);
      return res.data;
    } catch {
      throw new Error("check the network  response");
    }
  };

  const ShopInfoLocateAPI = async (locateInfo: string): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/shop/info/all/locate?locate=${locateInfo}`);
      setLocateList(result.data.data.menuRandomByLocateResDto);
    } catch {
      throw new Error("check the network response");
    }
  };

  useEffect(() => {
    if (memberId) {
      (async () => {
        const locateResult = await userLocateAPI();
        ShopInfoLocateAPI(locateResult.split(" ")[0]);
      })();
    } else {
      ShopInfoLocateAPI(locateInformation.split(" ")[0]);
    }
  }, [locate, locateInformation]);

  return (
    <Styled.SectionRestaurantWrapper>
      <Styled.LocationWrapper>
        <Styled.Location>
          <p>지역을 설정해보세요</p>
          <button
            type="button"
            aria-label="Click"
            onClick={(): void => {
              setModalIsOpen(true);
            }}
          >
            <Styled.LocateBtnWrapper>
              위치 변경하기 <img src={Arrow} alt="화살표" />
            </Styled.LocateBtnWrapper>
          </button>
        </Styled.Location>

        {modalIsOpen ? (
          <Portal>
            <AreaModal
              userLocateAPI={userLocateAPI}
              setModalIsOpen={setModalIsOpen}
              handleModalClose={handleModalClose}
            />
          </Portal>
        ) : null}

        <Styled.AddressInfoWrapper>
          <Styled.AddressInfo>
            <img src={Locate} alt="화살표" />
            <Styled.AddressTitle>주소</Styled.AddressTitle>
            {locate ? <Styled.Address>{locate}</Styled.Address> : <Styled.Address>{locateInformation}</Styled.Address>}
          </Styled.AddressInfo>
        </Styled.AddressInfoWrapper>
      </Styled.LocationWrapper>

      {locateList.length === 0 ? (
        <Styled.NoData>
          <img src={NotData} alt="" />
          <div>
            <p>검색결과가 없어요</p>
            <p>다른 지역을 입력해보세요</p>
          </div>
        </Styled.NoData>
      ) : (
        <Styled.RestaurantSection>
          {locateList.map((list) => {
            return (
              <Link to={`/category/${list.data.category}/${list.data.shopName}/${list.data.shopId}`} key={list.id}>
                <Styled.RestaurantArticle>
                  <button type="button">{list.data.category}</button>
                  <img src={list.data.image} alt="음식 이미지" />
                  <Styled.RestaurantName>{list.data.shopName}</Styled.RestaurantName>
                  <Styled.MenuName>{list.data.productName}</Styled.MenuName>
                  <Styled.MenuPrice>{list.data.price.toLocaleString()}원</Styled.MenuPrice>
                </Styled.RestaurantArticle>
              </Link>
            );
          })}
        </Styled.RestaurantSection>
      )}
    </Styled.SectionRestaurantWrapper>
  );
};

export default MainPageRestaurant;
