import { Address } from "react-daum-postcode";
import { useCallback, useState } from "react";

type TJibunAddress = {
  jibunAddress: string;
};
interface useDaumPostProps {
  addressState: TJibunAddress;
  handleComplete: (arg: Address) => void;
}

const useDaumPost = (): useDaumPostProps => {
  const init = {
    jibunAddress: "",
  };
  const [addressState, setAddressState] = useState(init);

  const handleComplete = useCallback((data: Address) => {
    const { jibunAddress } = data;
    setAddressState({
      jibunAddress,
    });
  }, []);

  return { addressState, handleComplete };
};

export default useDaumPost;
