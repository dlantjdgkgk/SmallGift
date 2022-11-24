import React from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import TextfieldWithError, { type TextfieldWithErrorProps } from "./TextfieldWithError";
import { validators } from "./validators";

export interface TextfieldWithErrorCheckProps extends TextfieldWithErrorProps {
  onClick: () => Promise<unknown>;
}

const TextfieldWithErrorCheck: React.FC<TextfieldWithErrorCheckProps> = ({ onClick, ...props }) => {
  const [checkRes, setCheckRes] = React.useState("");

  return (
    <TextfieldWithError
      renderer={(field, error, value) => {
        const errored = !validators[props.payloadType].validate(value);
        return (
          <>
            <Grid item xs={9}>
              {field}
            </Grid>
            <Grid item xs={3}>
              <Button
                disabled={errored}
                onClick={() =>
                  onClick().then(
                    () => setCheckRes("중복 인증에 성공했습니다."),
                    () => setCheckRes("중복 인증에 실패했습니다."),
                  )
                }
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ m: 0, height: "56px", fontSize: "12px" }}
                size="large"
                color={errored ? "error" : "primary"}
              >
                중복 확인
              </Button>
            </Grid>
            {error}
            {checkRes}
          </>
        );
      }}
      {...props}
    />
  );
};

export default TextfieldWithErrorCheck;
