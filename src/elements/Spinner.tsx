import { Oval } from "react-loader-spinner";
import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Oval
        ariaLabel="loading-indicator"
        height={50}
        width={50}
        strokeWidth={5}
        color="#192841"
        secondaryColor="white"
      />
    </SpinnerWrapper>
  );
};

export default Spinner;
