import ProductInfo from "components/Payment/ProductInfo/ProductInfo";
import * as Styled from "./style";
import { useLocation } from "react-router-dom";
import MenuType from "components/Payment/ProductInfo/MenuType";
import SenderInfo from "components/Payment/SenderInfo/SenderInfo";

interface PropsType {
  menu: MenuType;
}

const Payment = (): JSX.Element => {
  const location = useLocation();
  const result = location.state as PropsType;
  const menu: MenuType = result?.menu;

  return (
    <Styled.PaymentWrapper>
      <ProductInfo menu={menu} />
      <Styled.BoundaryLine />
      <SenderInfo menu={menu} />
    </Styled.PaymentWrapper>
  );
};

export default Payment;
