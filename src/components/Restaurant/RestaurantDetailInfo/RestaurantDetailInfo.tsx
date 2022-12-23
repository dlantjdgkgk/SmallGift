import LocateWhite from "../../../assets/img/LocateWhite.png";
import BusinessHours from "../../../assets/img/BusinessHours.png";
import PhoneNumber from "../../../assets/img/PhoneNumber.png";
import KakaoMap from "components/KakaoAPI/KakaoMap/KakaoMap";
import * as Styled from "./style";

interface IProps {
  shopAddress: string | undefined;
  shopTelephone: string | undefined;
}

const RestaurantDetailInfo = ({ shopAddress, shopTelephone }: IProps) => {
  return (
    <Styled.RestaurantDetailInfoSection>
      <Styled.AddressInfo>
        <div>
          <img src={LocateWhite} alt="" />
          <Styled.Label>주소</Styled.Label>
        </div>

        <Styled.Info>{shopAddress}</Styled.Info>
        <KakaoMap shopAddress={shopAddress} />
      </Styled.AddressInfo>

      <Styled.OperatingHoursInfo>
        <Styled.OperatingHours>
          <img src={BusinessHours} alt="" />
          <Styled.Label>영업시간</Styled.Label>
        </Styled.OperatingHours>

        <Styled.Info>매일 11:00 - 22:00</Styled.Info>
        <Styled.Info>16:00 - 17:00 브레이크타임</Styled.Info>
        <Styled.Info>21:00 라스트오더</Styled.Info>
      </Styled.OperatingHoursInfo>

      <Styled.phoneNumberInfo>
        <div>
          <img src={PhoneNumber} alt="" />
          <Styled.Label>전화번호</Styled.Label>
        </div>
        <Styled.Info>{shopTelephone}</Styled.Info>
      </Styled.phoneNumberInfo>
    </Styled.RestaurantDetailInfoSection>
  );
};

export default RestaurantDetailInfo;
