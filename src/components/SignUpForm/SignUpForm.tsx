import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormControl,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const SignUpForm = () => {
  const [state, setState] = useState({
    userId: "",
    userPwd: "",
  });

  const [checked, setChecked] = useState(false);
  // 동의 체크
  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };

  // form 전송
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <FormControl component="fieldset" variant="standard">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField required autoFocus fullWidth type="email" id="email" name="email" label="이메일 주소" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="password"
              id="password"
              name="password"
              label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth type="password" id="rePassword" name="rePassword" label="비밀번호 재입력" />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth id="name" name="name" label="이름" />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox onChange={handleAgree} color="primary" />}
              label="회원가입 약관에 동의합니다."
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} size="large">
          회원가입
        </Button>
      </FormControl>
    </Box>
  );
};

export default SignUpForm;
