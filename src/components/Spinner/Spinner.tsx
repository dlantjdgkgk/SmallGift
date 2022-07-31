import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <Oval ariaLabel="loading-indicator" height={50} width={50} strokeWidth={5} color="#192841" secondaryColor="white" />
  );
};

export default Spinner;
