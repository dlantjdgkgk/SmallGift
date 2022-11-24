import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";

import { axiosEmailCheck, axiosUsernameCheck } from "../../api/user/signUp";

import { MsgColorChanger } from "./style";
import type { CheckerTypes, PayloadType } from "./types";

import SubmitButton from "./SubmitButton";
import AgreeCheckBox from "./AgreeCheckBox";
import TextfieldWithError from "./TextfieldWithError";
import TextfieldWithErrorCheck from "./TextfieldWithErrorCheck";
import SubmitValidContextProvider from "./SubmitValidContext";

const SignUpForm: React.FC = () => {
  // 회원가입시 필요한 정보
  const [payload, setPayload] = React.useState<PayloadType>({
    email: "",
    username: "",
    password: "",
    rePassword: "",
    phoneNumber: "",
  });

  // 정보 갱신
  const handleChange: (type: string, value: string) => void = (type, value) => {
    setPayload(({ [type as keyof PayloadType]: _, ...prev }) => ({ ...(prev as PayloadType), [type]: value }));
  };

  return (
    <SubmitValidContextProvider>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <FormControl component="fieldset" variant="standard">
          <MsgColorChanger style={{ marginTop: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <TextfieldWithErrorCheck
                onClick={() => axiosEmailCheck(payload.email)}
                setPayload={handleChange}
                payloadType="email"
                autoFocus
                type="email"
                name="email"
                label="이메일 주소"
              />
              <TextfieldWithError
                setPayload={handleChange}
                payloadType="password"
                type="password"
                name="password"
                label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
              />
              <TextfieldWithError
                validator={(value) => value === payload.password}
                setPayload={handleChange}
                payloadType="rePassword"
                type="password"
                name="rePassword"
                label="비밀번호 재입력"
              />
              <TextfieldWithErrorCheck
                onClick={() => axiosUsernameCheck(payload.email)}
                setPayload={handleChange}
                payloadType="username"
                type="text"
                name="username"
                label="아이디 (2자리 이상, 10자리 이하)"
              />
              <TextfieldWithError
                setPayload={handleChange}
                payloadType="phoneNumber"
                name="phoneNumber"
                label="전화번호 (-제외하고 숫자만 입력)"
              />
              {[
                ["use", "이용 약관에 동의합니다."],
                ["privacy", "개인 정보 방침에 동의합니다."],
                ["location", "위치 기반 서비스에 동의합니다."],
              ].map(([type, label]) => (
                <AgreeCheckBox key={label} label={label} type={type as CheckerTypes} />
              ))}
            </Grid>

            <SubmitButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
              payload={payload}
            />
          </MsgColorChanger>
        </FormControl>
      </Box>
    </SubmitValidContextProvider>
  );
};

export default SignUpForm;
