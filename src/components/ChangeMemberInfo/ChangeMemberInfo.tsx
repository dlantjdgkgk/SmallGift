import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUserFormInput } from "./types";
import * as Styled from "./style";
import { useState } from "react";
import { apiInstance } from "api/setting";

const ChangeMemberInfo = () => {
  const [accountBank, setAccountBank] = useState("신한");
  const selectList = [
    {
      id: "1",
      region: "신한",
    },
    {
      id: "2",
      region: "국민",
    },
  ];

  const deleteAPI = async () => {
    try {
      console.log(await apiInstance.delete("/api/user/delete/35"));
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IUserFormInput>();

  const onSubmit: SubmitHandler<IUserFormInput> = (data: IUserFormInput) => {
    const { userName, userPhone, accountNumber } = data;
    const memberId = 15;
    const postAPI = async () => {
      try {
        const result = await apiInstance.post("/api/user/userInfo", {
          userName,
          userPhone,
          accountNumber,
          memberId,
          accountBank,
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    postAPI();
    navigate("/");
  };

  const showConfirm = () => {
    if (window.confirm("탈퇴하시겠습니까?")) {
      deleteAPI();
      navigate("/");
    }
  };

  const handleCancelBtn = () => {
    navigate("/mypage");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.ChangeMemberInfoSection>
        <div className="userName">
          <label htmlFor="발송인명">이름</label>
          <input
            {...register("userName", {
              required: true,
              minLength: 3,
              maxLength: 4,
              pattern: /[가-힣ㄱ-ㅎㅏ-ㅣ]/gi,
            })}
            placeholder="홍길동"
            style={{ border: watch("userName") && "1px solid #6600CC" }}
          />
        </div>
        {errors?.userName?.type === "pattern" && <p className="errorMessage">형식에 맞게 입력해주세요</p>}
        {errors?.userName?.type === "required" && <p className="errorMessage">발송인명을 입력해주세요</p>}
        {errors?.userName?.type === "maxLength" && <p className="errorMessage">이름이 너무 깁니다.</p>}
        {errors?.userName?.type === "minLength" && <p className="errorMessage">이름이 너무 짧습니다.</p>}

        <div className="userPhone">
          <label htmlFor="발송인명">휴대폰 번호</label>
          <input
            {...register("userPhone", {
              required: true,
              pattern: /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/,
            })}
            placeholder="010-1234-5678"
            style={{ border: watch("userPhone") && "1px solid #6600CC" }}
          />
        </div>
        {errors?.userPhone?.type === "required" && <p className="errorMessage">휴대폰 번호를 입력해주세요</p>}
        {errors?.userPhone?.type === "pattern" && <p className="errorMessage">형식에 맞게 입력해주세요</p>}

        <div className="refundAccount">
          <label htmlFor="계좌">환불 계좌</label>
          <div className="refundForm">
            <select
              onChange={(e) => {
                setAccountBank(e.target.value);
              }}
              value={accountBank}
            >
              {selectList.map((item) => (
                <option value={item.region} key={item.id}>
                  <p>{item.region}</p>
                </option>
              ))}
            </select>
            <input
              {...register("accountNumber", {
                required: true,
                minLength: 11,
                maxLength: 14,
                pattern: /^[0-9]+$/,
              })}
              placeholder="110485642910"
              style={{ border: watch("accountNumber") && "1px solid #6600CC" }}
            />
          </div>
        </div>
        {errors?.accountNumber?.type === "required" && <p className="errorMessage">계좌 번호를 입력해주세요</p>}
        {errors?.accountNumber?.type === "pattern" && <p className="errorMessage">형식에 맞게 입력해주세요</p>}
        {errors?.accountNumber?.type === "maxLength" && <p className="errorMessage">계좌번호가 너무 깁니다.</p>}
        {errors?.accountNumber?.type === "minLength" && <p className="errorMessage">계좌번호가 너무 짧습니다.</p>}
      </Styled.ChangeMemberInfoSection>
      <Styled.BoundaryLine />

      <Styled.Section>
        <div className="withdrwal">
          <p>회원 탈퇴하기</p>
          <button type="button" className="withdrwalBtn" onClick={showConfirm}>
            <img src="/img/ArrowBlack.png" />
          </button>
        </div>
        <div className="onClickBtn">
          <button type="button" className="cancel" onClick={handleCancelBtn}>
            취소
          </button>
          <button type="submit" className="modify">
            회원 정보 변경
          </button>
        </div>
      </Styled.Section>
    </form>
  );
};

export default ChangeMemberInfo;
