import {
  validateEmail,
  validateUsername,
  validatePassword,
  validateRePassword,
  validatePhoneNumber,
} from "../../utils/validationUtil";
import type { PayloadType } from "./types";

export const validators: Record<
  keyof PayloadType,
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validate: (...values: any) => boolean;
    msg: string;
  }
> = {
  email: { validate: validateEmail, msg: "올바른 이메일 형식이 아닙니다." },
  username: { validate: validateUsername, msg: "2자리 이상, 10자리 미만으로 입력해주세요." },
  password: { validate: validatePassword, msg: "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요." },
  rePassword: { validate: validateRePassword, msg: "비밀번호가 일치하지 않습니다." },
  phoneNumber: { validate: validatePhoneNumber, msg: "올바른 전화번호 형식이 아닙니다." },
};
