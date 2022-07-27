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
  Container,
  CssBaseline,
} from "@mui/material";
import LoginForm from "components/LoginForm/LoginForm";
import { loginUser } from "api/user";

const LogIn = () => {
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>dd</Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <LoginForm />

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
    </Container>
  );
};

export default LogIn;
