import { apiInstance } from "api/setting";
import { useCallback, useEffect, useState } from "react";
import * as Styled from "./style";

interface IRecommendDataProps {
  data: string;
  id: number;
}

interface RecommendActionsProps {
  input: HTMLInputElement;
  keyWordPostAPI: (keyword: string) => Promise<void>;
}

const RecommendActions: React.FC<RecommendActionsProps> = ({ input, keyWordPostAPI }) => {
  const [show, setShow] = useState(false);
  const [recommendationData, setRecommendationData] = useState<IRecommendDataProps[]>([]);

  const recommendationAPI = useCallback(async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/common/keyword/recommendation?keyword=${input.value}`);
      setRecommendationData(result.data.data.recommendationTopTen);
    } catch (error) {
      console.log(error);
    }
  }, [input.value]);

  useEffect(() => {
    let waiting = false;
    const handleInput = () => {
      if (input.value === "") setShow(false);
      else setShow(true);

      if (waiting) return;
      recommendationAPI();
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, 200);
    };

    input.addEventListener("input", handleInput);
    return () => input.removeEventListener("input", handleInput);
  }, [input, recommendationAPI]);

  return (
    <Styled.RecommendActionWrapper show={show}>
      <div>
        {recommendationData.map((dropDownItem) => {
          return dropDownItem.data.indexOf(input.value) === -1 ? null : (
            <Styled.DropDownItem
              key={dropDownItem.id}
              onClick={() => {
                setShow(false);
                keyWordPostAPI(dropDownItem.data);
              }}
            >
              {dropDownItem.data.split(input.value)[0]}
              <span>{input.value}</span>
              {dropDownItem.data.split(input.value)[1]}
            </Styled.DropDownItem>
          );
        })}
      </div>
      <div aria-hidden className="background" onClick={() => setShow(false)} />
    </Styled.RecommendActionWrapper>
  );
};

export default RecommendActions;
