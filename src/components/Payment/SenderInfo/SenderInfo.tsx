import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormErrorMessages } from "utils/hookFormUtil";
import { apiInstance } from "../../../api/setting";
import MenuType from "../ProductInfo/MenuType";
import * as Styled from "./style";

interface IProps {
  menu: MenuType;
}

interface IUserFormInput {
  nickName?: string;
  senderPhone?: string;
  email?: string;
  receiverPhone?: string;
}

const SenderInfo = ({ menu }: IProps) => {
  const navigate = useNavigate();
  const [foldSenderSection, setFoldSenderSection] = useState(false);
  const memberId = localStorage.getItem("memberId");

  const OrderPostAPI = async (): Promise<void> => {
    try {
      const payload = {
        productId: menu.data.productId || menu.data.id,
        memberId,
      };
      await apiInstance.post("/api/user/order", payload);
    } catch (error) {
      throw new Error("check the network response");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IUserFormInput>();

  const onSubmit: SubmitHandler<IUserFormInput> = () => {
    OrderPostAPI();
    navigate("/payment/check", { state: menu });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.SenderInfoSection>
        <div className="senderInfo">
          <p className="sender">보내는 사람</p>
          <button
            type="button"
            onClick={(): void => {
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
            <div className="nickName">
              <label htmlFor="발송인명">발송인명</label>
              <input
                {...register("nickName", {
                  required: true,
                  minLength: 2,
                  maxLength: 10,
                  pattern: /[가-힣ㄱ-ㅎㅏ-ㅣ]/gi,
                })}
                placeholder="홍길동"
                style={{ border: watch("nickName") && "1px solid #6600CC" }}
              />
            </div>
            {errors?.nickName?.type === "pattern" && <p className="errorMessage">{FormErrorMessages.NAME}</p>}
            {errors?.nickName?.type === "required" && <p className="errorMessage">{FormErrorMessages.NAME_REQUIRED}</p>}
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
                  pattern: /^[0-9a-zA-Z]([-_\\.]?[-_\\.0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.(kr|com|net)$/gi,
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
          <button type="submit">{menu.data.productPrice.toLocaleString()}원 결제하기</button>
        </div>
      </Styled.PaymentMethodSection>
    </form>
  );
};

export default SenderInfo;
