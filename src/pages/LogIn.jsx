import React, { useState } from "react";
import Axios from "axios";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import * as Styled from "./style";
import { loginUser } from "../api/user";

const LogIn = () => {
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
    //body를 서버에 보냄
    loginUser(body);
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        {/*<LockOutlinedIcon />*/}
      </Avatar>
      <Typography component="h1" variant="h5">
        로그인
      </Typography>
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="이메일 저장"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          로그인
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/find" variant="body2">
              비밀번호 찾기
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              회원가입
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LogIn;
