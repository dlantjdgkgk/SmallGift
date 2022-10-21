import ProductInfo from "components/BuyInfo/ProductInfo";
import * as Styled from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUserFormInput, MemberType } from "./types";
import { useLocation } from "react-router-dom";
import MenuType from "components/BuyInfo/MenuType";
import { FormErrorMessages } from "utils/hookFormUtil";

interface PropsType {
  menu: MenuType;
}

const Payment = () => {
  const location = useLocation();
  const result = location.state as PropsType;
  const menu: MenuType = result?.menu;

  const navigate = useNavigate();
  const [foldSenderSection, setFoldSenderSection] = useState(false);

  const [serverMemberInfo, setServerMemberInfo] = useState<MemberType>({
    nickName: "이무성",
    senderPhone: "010-8240-9930",
    email: "dlantjdgkgk@naver.com",
  });

  const [prevMemberInfo, setPrevMemeberInfo] = useState<MemberType>({});

  const memberInfoHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
              {errors?.nickName?.type === "pattern" && <p className="errorMessage">{FormErrorMessages.NAME}</p>}
              {errors?.nickName?.type === "required" && (
                <p className="errorMessage">{FormErrorMessages.NAME_REQUIRED}</p>
              )}
              {errors?.nickName?.type === "maxLength" && <p className="errorMessage">{FormErrorMessages.MAX_LENGTH}</p>}
              {errors?.nickName?.type === "minLength" && <p className="errorMessage">{FormErrorMessages.MIN_LENGTH}</p>}
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
              {errors?.senderPhone?.type === "required" && (
                <p className="errorMessage">{FormErrorMessages.PHONE_REQUIRED}</p>
              )}
              {errors?.senderPhone?.type === "pattern" && (
                <p className="errorMessage">{FormErrorMessages.MOBILE_NUMBER}</p>
              )}
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
              {errors?.email?.type === "required" && <p className="errorMessage">{FormErrorMessages.EMAIL_REQUIRED}</p>}
              {errors?.email?.type === "pattern" && <p className="errorMessage">{FormErrorMessages.EMAIL}</p>}
            </Styled.FormSender>
          )}
        </Styled.SenderInfoSection>
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
