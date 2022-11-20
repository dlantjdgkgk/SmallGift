import * as Styled from "./style";
import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { apiInstance } from "../../api/setting";
import Back from "../../assets/img/Back.png";
import Cancel from "../../assets/img/Cancel.png";

interface IRecommendDataProps {
  data: string;
  id: number;
}

const SearchShopPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const [recommendationData, setRecommendationData] = useState<IRecommendDataProps[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    keyWordPostAPI(inputValue);
    navigate("/search/shop/5");
  };

  const ShopInfoKeyWordAPI = async (dropDownItem: string): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/shop/info/keyword?keyword=${dropDownItem}`);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const recommendationAPI = async (): Promise<void> => {
    try {
      const result = await apiInstance.get(`/api/user/common/keyword/recommendation?keyword=${inputValue}`);
      setRecommendationData(result.data.data.recommendationTopTen);
      console.log(recommendationData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (inputValue) recommendationAPI();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue]);

  const keyWordPostAPI = async (dropDownItem: string): Promise<void> => {
    try {
      const payload = {
        keyword: dropDownItem,
        memberId: 1,
      };
      await apiInstance.post("/api/user/keyword", payload);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Styled.SearchPageWrapper>
      <form action="post" onSubmit={onSubmit}>
        <div className="searchBar">
          <button
            type="button"
            onClick={(): void => {
              navigate(-1);
            }}
            className="back"
          >
            <img src={Back} alt="" />
          </button>
          <input value={inputValue} type="text" onChange={onChange} placeholder="가게명 또는 상품명 검색하기" />
          {inputValue ? (
            <button
              type="button"
              onClick={(): void => {
                setInputValue("");
              }}
              className="cancel"
            >
              <img src={Cancel} alt="" />
            </button>
          ) : null}
        </div>
      </form>
      <>
        {!recommendationData && <Styled.DropDownItem>해당하는 단어가 없습니다</Styled.DropDownItem>}
        {recommendationData.map((dropDownItem) => {
          return dropDownItem.data.indexOf(inputValue) === -1 ? null : (
            <Styled.DropDownItem
              key={dropDownItem.id}
              onClick={(): void => {
                keyWordPostAPI(dropDownItem.data);
                ShopInfoKeyWordAPI(dropDownItem.data);
              }}
            >
              {dropDownItem.data.split(inputValue)[0]}
              <span>{inputValue}</span>
              {dropDownItem.data.split(inputValue)[1]}
            </Styled.DropDownItem>
          );
        })}
      </>
    </Styled.SearchPageWrapper>
  );
};

export default SearchShopPage;
