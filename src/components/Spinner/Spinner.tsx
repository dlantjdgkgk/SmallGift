import { Oval } from "react-loader-spinner";
import * as Styled from "./style";

const Spinner = () => {
  return (
    <Styled.SpinnerWrapper>
      <Oval
        ariaLabel="loading-indicator"
        height={50}
        width={50}
        strokeWidth={5}
        color="#192841"
        secondaryColor="white"
      />
    </Styled.SpinnerWrapper>
  );
};

export default Spinner;
