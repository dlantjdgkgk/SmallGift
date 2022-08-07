import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { logInUser } from "../../redux/_action/user_action";
import axios from "axios";

const LogInForm = () => {
  // 이메일, 비밀번호 제출
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies([]);
  const navigate = useNavigate();

  // 사용자한테 아이디/비밀번호를 입력 받고
  // 백에 보내줄 payload
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  const [isError, setIsError] = useState({
    username: false,
    password: false,
  });

  // 입력폼에서 데이터가 바뀔때마다 payload의 데이터 최신화
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
    console.log(payload);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (payload.username === "") {
      setIsError({ ...isError, username: true });
      return;
    }
    if (payload.password === "") {
      setIsError({ ...isError, password: true });
      return;
    }

    dispatch(logInUser(payload)).then((response) => {
      if (response.payload.success) {
        navigate("/");
        setCookies("token", `Bearer ${response?.payload?.data?.result?.Token}`);
      } else {
        console.log(response.payload.msg);
      }
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        error={isError.username ? true : undefined}
        margin="normal"
        required
        fullWidth
        id="username"
        label="이메일 주소"
        name="username"
        autoComplete="on"
        autoFocus
        onChange={handleChange}
      />
      <TextField
        error={isError.password ? true : undefined}
        margin="normal"
        required
        fullWidth
        name="password"
        label="비밀번호"
        id="password"
        autoComplete="on"
        onChange={handleChange}
      />

      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="이메일 저장" />
      <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        로그인
      </Button>
    </Box>
  );
};

export default LogInForm;
