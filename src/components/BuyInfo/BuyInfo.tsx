import * as Styled from "./style";

import PaymentMethod from "./PaymentMethod";
import ReceiverInfo from "./ReceiverInfo";
import SenderInfo from "./SenderInfo";
import ProductInfo from "./ProductInfo";

const BuyInfo = () => {
  return (
    <Styled.BuyInfoWrapper>
      <ProductInfo />
      <Styled.BoundaryLine />
      <SenderInfo />
      <Styled.BoundaryLine />
      <ReceiverInfo />
      <Styled.BoundaryLine />
      <PaymentMethod />
    </Styled.BuyInfoWrapper>
  );
};

export default BuyInfo;
