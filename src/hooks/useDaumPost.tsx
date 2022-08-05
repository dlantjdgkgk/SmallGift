import { Address } from "react-daum-postcode";
import { useCallback, useState } from "react";

export interface DaumPostState {
  jibunAddress: string;
}

const init: DaumPostState = {
  jibunAddress: "",
};

// 유저정보 수정에서도 사용 될꺼 같아서 훅으로 만들어봤습니다.
const useDaumPost = () => {
  const [addressState, setAddressState] = useState<DaumPostState>(init);

  const handleComplete = useCallback((data: Address) => {
    const { jibunAddress } = data;
    setAddressState({
      jibunAddress,
    });
  }, []);

  return { addressState, handleComplete };
};

export default useDaumPost;
