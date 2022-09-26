import ProductInfo from "components/BuyInfo/ProductInfo";
import * as Styled from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUserFormInput } from "./types";
import { useLocation } from "react-router-dom";
import MenuType from "components/BuyInfo/MenuType";

interface PropsType {
  menu: MenuType;
}

interface MemberType {
  nickName?: string;
  senderPhone?: string;
  email?: string;
}

const Payment = () => {
  const location = useLocation();
  const result = location.state as PropsType;
  const menu: MenuType = result?.menu;

  const navigate = useNavigate();
  const [foldSenderSection, setFoldSenderSection] = useState(false);
  const [foldReceiverSection, setFoldReceiverSection] = useState(false);
  const [selectedTransmission, setSelectedTransmission] = useState("kakao");

  const [serverMemberInfo, setServerMemberInfo] = useState<MemberType>({
    nickName: "이무성",
    senderPhone: "010-8240-9930",
    email: "dlantjdgkgk@naver.com",
  });

  const [prevMemberInfo, setPrevMemeberInfo] = useState<MemberType>({});

  const memberInfoHandler = (e) => {
    const target = e.target.checked ? serverMemberInfo : prevMemberInfo;
    const { receiverPhone, ...payload } = getValues();

    if (e.target.checked) {
      setPrevMemeberInfo({ ...payload });
    }

    let key: keyof MemberType;

    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        setValue(key, target[key]);
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm<IUserFormInput>();

  const onSubmit: SubmitHandler<IUserFormInput> = (data: IUserFormInput) => {
    console.log(JSON.stringify(data));
    navigate("/payment/check");
  };

  return (
    <Styled.BuyInfoWrapper>
      <ProductInfo menu={menu} />
      <Styled.BoundaryLine />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.SenderInfoSection>
          <div className="senderInfo">
            <p className="sender">보내는 사람</p>
            <button
              type="button"
              onClick={() => {
                setFoldSenderSection(!foldSenderSection);
              }}
            >
              {foldSenderSection ? (
                <FontAwesomeIcon icon={faChevronDown} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faChevronUp} size="2x" />
              )}
            </button>
          </div>
          {foldSenderSection ? null : (
            <Styled.FormSender>
              <div className="checkInfo">
                <input type="checkbox" onChange={memberInfoHandler} />
                <p>회원 정보와 동일해요</p>
              </div>
              <div className="nickName">
                <label htmlFor="발송인명">발송인명</label>
                <input
                  {...register("nickName", {
                    required: true,
                    minLength: 3,
                    maxLength: 10,
                    pattern: /[가-힣ㄱ-ㅎㅏ-ㅣ]/gi,
                  })}
                  placeholder="홍길동"
                  style={{ border: watch("nickName") && "1px solid #6600CC" }}
                />
              </div>
              {errors?.nickName?.type === "pattern" && <p className="errorMessage">형식에 맞게 입력해주세요</p>}
              {errors?.nickName?.type === "required" && <p className="errorMessage">발송인명을 입력해주세요</p>}
              {errors?.nickName?.type === "maxLength" && <p className="errorMessage">이름이 너무 깁니다.</p>}
              {errors?.nickName?.type === "minLength" && <p className="errorMessage">이름이 너무 짧습니다.</p>}
              <div className="phone">
                <label htmlFor="발송인명">휴대폰</label>
                <input
                  {...register("senderPhone", {
                    required: true,
                    pattern: /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/,
                  })}
                  placeholder="010-1234-5678"
                  style={{ border: watch("senderPhone") && "1px solid #6600CC" }}
                />
              </div>
              {errors?.senderPhone?.type === "required" && <p className="errorMessage">휴대폰 번호를 입력해주세요</p>}
              {errors?.senderPhone?.type === "pattern" && <p className="errorMessage">형식에 맞게 입력해주세요</p>}
              <div className="emailInfo">
                <label htmlFor="발송인명">이메일</label>
                <input
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[0-9a-zA-Z]([-_\\.]?[-_\\.0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.(kr|com|net)$/gi,
                  })}
                  placeholder="antjdgk@naver.com"
                  style={{ border: watch("email") && "1px solid #6600CC" }}
                />
              </div>
              {errors?.email?.type === "required" && <p className="errorMessage">이메일을 입력해주세요</p>}
              {errors?.email?.type === "pattern" && <p className="errorMessage">형식에 맞게 입력해주세요</p>}
            </Styled.FormSender>
          )}
        </Styled.SenderInfoSection>
        <Styled.BoundaryLine />
        <Styled.ReceiverInfoSection>
          <div className="receiveInfo">
            <p className="receive">받는 사람</p>
            <button
              type="button"
              onClick={() => {
                setFoldReceiverSection(!foldReceiverSection);
              }}
            >
              {foldReceiverSection ? (
                <FontAwesomeIcon icon={faChevronDown} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faChevronUp} size="2x" />
              )}
            </button>
          </div>
          {foldReceiverSection ? null : (
            <Styled.FormReceiver>
              <div className="checkInfo">
                <input type="checkbox" />
                <p>나한테 주는 선물이에요😊</p>
              </div>
              <div className="transmissionWay">
                <button
                  type="button"
                  className="transmission"
                  onClick={() => {
                    setSelectedTransmission("kakao");
                  }}
                  style={{ border: selectedTransmission === "kakao" && "1px solid #6600CC" }}
                >
                  <img src="/img/Kakao.png" />
                  <p>카카오톡</p>
                </button>
              </div>
              <div className="phone">
                <label htmlFor="발송인명">휴대폰</label>
                <input
                  {...register("receiverPhone", {
                    required: true,
                    pattern: /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/,
                  })}
                  placeholder="010-1234-5678"
                  style={{ border: watch("receiverPhone") && "1px solid #6600CC" }}
                />
              </div>
              {errors?.receiverPhone?.type === "required" && <p className="errorMessage">휴대폰 번호를 입력해주세요</p>}
              {errors?.receiverPhone?.type === "pattern" && <p className="errorMessage">형식에 맞게 입력해주세요</p>}
            </Styled.FormReceiver>
          )}
        </Styled.ReceiverInfoSection>
        <Styled.BoundaryLine />
        <Styled.PaymentMethodSection>
          <div className="payment">
            <button type="submit">{menu?.price}원 결제하기</button>
          </div>
        </Styled.PaymentMethodSection>
      </form>
    </Styled.BuyInfoWrapper>
  );
};

export default Payment;
