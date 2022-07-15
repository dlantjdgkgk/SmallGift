import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material/";
import * as Styled from "./style";

const SignUp = () => {
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <FormControl component="fieldset" variant="standard">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  type="email"
                  id="email"
                  name="email"
                  label="이메일 주소"
                />
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
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  label="비밀번호 재입력"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  name="name"
                  label="이름"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox onChange={handleAgree} color="primary" />}
                  label="회원가입 약관에 동의합니다."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
            >
              회원가입
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;
