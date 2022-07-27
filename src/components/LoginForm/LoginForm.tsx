import React from "react";
import { loginUser } from "../../api/user";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const LogInForm = () => {
  // 이메일, 비밀번호 제출
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userId: data.get("userId"),
      userPwd: data.get("userPwd"),
    });
    const body = {
      userId: data.get("userId"),
      userPwd: data.get("userPwd"),
    };
    // body를 서버에 보냄
    loginUser(body);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="userId"
        label="이메일 주소"
        name="userId"
        autoComplete="userId"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="userPwd"
        label="비밀번호"
        type="userPwd"
        id="userPwd"
        autoComplete="current-userPwd"
      />
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="이메일 저장" />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        로그인
      </Button>
    </Box>
  );
};

export default LogInForm;
