import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/_action/user_action";
import axios from "axios";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    email: "",
    username: "",
    password: "",
    rePassword: "",
    provider: "NORMAL",
    role: "ROLE_MANAGER",
  });
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
    console.log(payload);
  };

  // 동의 체크 확인
  const [checked, setChecked] = useState(false);

  // 체크 되어있는지
  const handleAgree = (event) => {
    setChecked(event.target.checked);
    console.log(checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    // 아이디가 비어있으면 isUsername을 false로 처리
    if (payload.email === "") {
      return;
    }
    if (payload.username === "") {
      return;
    }
    // 비번이 비어쓰면 isPassword를 false로 처리
    if (payload.password === "") {
      return;
    }
    // 비번이 비어쓰면 isPassword를 false로 처리
    if (payload.rePassword !== payload.password) {
      return;
    }

    // useDispatch를 이용해서 LoginUser라는 action을 전달함
    //
    dispatch(signUpUser(payload)).then((response) => {
      if (response.payload.success) {
        navigate("/");
        console.log("success");
      } else {
        console.log(response.payload.msg);
      }
    });
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <FormControl onSubmit={handleSubmit} component="fieldset" variant="standard">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              required
              fullWidth
              type="text"
              id="username"
              name="username"
              label="아이디"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox onChange={handleAgree} color="primary" />}
              label="회원가입 약관에 동의합니다."
            />
          </Grid>
        </Grid>
        <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} size="large">
          회원가입
        </Button>
      </FormControl>
    </Box>
  );
};

export default SignUpForm;
