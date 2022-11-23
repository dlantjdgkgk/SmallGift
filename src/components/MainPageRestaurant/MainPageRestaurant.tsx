import * as Styled from "./style";
import Portal from "components/Modal/Portal/Portal";
import AreaModal from "components/Modal/AreaModal/AreaModal";
import { useEffect, useState } from "react";
import { apiInstance } from "../../api/setting";
import Arrow from "../../assets/img/Arrow.png";
import Locate from "../../assets/img/Locate.png";
import NotData from "../../assets/img/NotData.png";
import { Link } from "react-router-dom";

interface ILocateListProps {
  data: {
    category: string;
    image: string;
    productName: string;
    shopName: string;
    price: string;
    shopId: number;
  };
  id: number;
}

const MainPageRestaurant = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [locate, setLocate] = useState("");
  const handleModalClose = (): void => setModalIsOpen(false);
  const [locateList, setLocateList] = useState<ILocateListProps[]>([]);
  const locateInfo = locate.split(" ")[0];

  const memberId = 16;
  const userLocateAPI = async (): Promise<void> => {
    try {
      const res = await apiInstance.get(`/api/user/locate?memberId=${memberId}`);
      setLocate(res.data);
    } catch (error) {
      throw new Error("check the network response");
    }
  };
  console.log(locate);
  console.log(locateInfo);

  const ShopInfoLocateAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/shop/info/all/locate?locate=${locateInfo}`);
      setLocateList(result.data.data.menuRandomByLocateResDto);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  useEffect(() => {
    ShopInfoLocateAPI();
    userLocateAPI();
  }, [locateInfo, locate]);

  return (
    <Styled.SectionRestaurantWrapper>
      <Styled.LocationWrapper>
        <div className="location">
          <p>지역을 설정해보세요</p>
          <button
            type="button"
            aria-label="Click"
            onClick={(): void => {
              setModalIsOpen(true);
            }}
          >
            <div className="locationBtn">
              위치 변경하기 <img src={Arrow} alt="화살표" />
            </div>
            {modalIsOpen ? (
              <Portal>
                <AreaModal
                  userLocateAPI={userLocateAPI}
                  setModalIsOpen={setModalIsOpen}
                  handleModalClose={handleModalClose}
                />
              </Portal>
            ) : null}
          </button>
        </div>

        <div className="locationContainer">
          <div className="addressInformation">
            <img src={Locate} alt="화살표" />
            <p className="address">주소</p>
            <p className="exactAddress">{locate}</p>
          </div>
        </div>
      </Styled.LocationWrapper>

      <Styled.RestaurantWrapper>
        {locateList.length === 0 ? (
          <div className="noData">
            <img src={NotData} alt="" />
            <div className="noDataTitle">
              <p>검색결과가 없어요</p>
              <p>다른 지역을 입력해보세요</p>
            </div>
          </div>
        ) : (
          <section className="restaurants">
            {locateList.map((list) => {
              return (
                <Link to={`/category/${list.data.category}/${list.data.shopName}/${list.data.shopId}`} key={list.id}>
                  <article className="restaurant">
                    <button className="category" type="button">
                      {list.data.category}
                    </button>
                    <img src={list.data.image} alt="음식 이미지" className="image" />
                    <div className="restaurantInformation">
                      <p className="restaurantName">{list.data.shopName}</p>
                      <p className="restaurantMenu">{list.data.productName}</p>
                      <p className="menuPrice">{list.data.price.toLocaleString()}원</p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </section>
        )}
      </Styled.RestaurantWrapper>
    </Styled.SectionRestaurantWrapper>
  );
};

export default MainPageRestaurant;
