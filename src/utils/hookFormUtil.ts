import { ValidationRule, ValidationValue } from "react-hook-form";

type HookFormCheckType = (value: string, errorMessage: string) => string | boolean;

export const FormErrorMessages = {
  MAX_LENGTH: "너무 깁니다.",
  MIN_LENGTH: "너무 짧습니다.",
  REQUIRED: "필수 입니다.",
  KOREA_CHARACTERS: "한글이 포함되었습니다.",
  SPECIAL_CHARACTERS: "특수문자가 포함되었습니다.",
  WHITE_SPACE: "공백이 포함 되었습니다.",
  MOBILE_NUMBER: "휴대번호 형식에 맞지 않습니다.",
  EMAIL: "이메일 형식에 맞지 않습니다.",
  EMAIL_REQUIRED: "이메일은 필수입니다.",
  NICKNAME_REQUIRED: "닉네임은 필수입니다.",
  NAME_REQUIRED: "이름은 필수입니다.",
  PHONE_REQUIRED: "휴대번호는 필수입니다.",
};

export const makeOption = <T extends ValidationValue>(validationValue: T, errorMessage: string): ValidationRule<T> => ({
  value: validationValue,
  message: errorMessage,
});

// 특수문자 검사
export const specialChractersCheck = (value: string) =>
  /[\\{\\}\\[\]\\/?.,;:|\\)*~`!^\-_+<>@\\#$%&\\\\=\\(\\'\\"]/gi.test(value);
// 한글 검사
export const koreaChractersCheck = (value: string) => /[가-힣ㄱ-ㅎㅏ-ㅣ]/gi.test(value);
// 공백 검사
export const whiteSpaceCheck = (value: string) => /\s/gi.test(value);
// 휴대번호 패턴 검사
export const mobileNumberPatternCheck = (value: string) => /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/gi.test(value);
// 이메일 패턴 검사
export const emailPatternCheck = (value: string) => /^[0-9a-zA-Z]([-_\\.]?[-_\\.0-9a-zA-Z])/gi.test(value);

export const hookFormSpecialChractersCheck: HookFormCheckType = (value, errorMessage) => {
  if (specialChractersCheck(value)) {
    return errorMessage;
  }
  return true;
};
export const hookFormKoreaChractersCheck: HookFormCheckType = (value, errorMessage) => {
  if (koreaChractersCheck(value)) {
    return errorMessage;
  }
  return true;
};
export const hookFormWhiteSpaceCheck: HookFormCheckType = (value, errorMessage) => {
  if (whiteSpaceCheck(value)) {
    return errorMessage;
  }
  return true;
};

export const hookFormMobileNumberPatternCheck: HookFormCheckType = (value, errorMessage) => {
  if (mobileNumberPatternCheck(value) === false) {
    return errorMessage;
  }
  return true;
};

export const hookFormEmailPatternCheck: HookFormCheckType = (value, errorMessage) => {
  if (emailPatternCheck(value) === false) {
    return errorMessage;
  }
  return true;
};
