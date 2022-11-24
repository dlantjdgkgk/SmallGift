import React from "react";

import Grid from "@mui/material/Grid";
import TextField, { type TextFieldProps } from "@mui/material/TextField";

import { validators } from "./validators";
import type { PayloadType } from "./types";
import { useSubmitValid } from "./SubmitValidContext";

export interface TextfieldWithErrorProps extends Omit<TextFieldProps, "onChange" | "ref"> {
  setPayload: (type: string, value: string) => void;
  validator?: (value: string) => boolean;
  payloadType: keyof PayloadType;
  renderer?: (field: JSX.Element, error: JSX.Element | undefined, value: string) => JSX.Element;
}

const TextfieldWithError: React.FC<TextfieldWithErrorProps> = ({
  setPayload,
  validator,
  payloadType,
  renderer,
  ...props
}) => {
  const [errorMsg, setErrorMsg] = React.useState("");
  const [value, setValue] = React.useState("");
  const { setValids } = useSubmitValid();

  const checkValid = React.useCallback(
    (validate: any, inputValue: string) => (validator ?? validate)(inputValue),
    [validator],
  );

  React.useEffect(() => {
    setValids(payloadType, checkValid(validators[payloadType].validate, value));
  }, [checkValid, payloadType, value]);

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = ev.target?.value;
    const valid = checkValid(validators[payloadType].validate, inputValue);
    setValue(inputValue ?? "");
    setErrorMsg(valid ? "" : validators[payloadType].msg);
    if (valid) setPayload(payloadType, inputValue ?? "");
  };

  const field = <TextField required fullWidth id={payloadType} onChange={handleInput} value={value} {...props} />;
  const error = errorMsg ? <span style={{ color: "red" }}>{errorMsg}</span> : undefined;
  return renderer ? (
    renderer(field, error, value)
  ) : (
    <Grid item xs={12}>
      {field}
      {error}
    </Grid>
  );
};

export default TextfieldWithError;
