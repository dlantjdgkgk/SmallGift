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
import axios from "axios";
import { validateEmail } from "../../utils/validationUtil";
import { axiosFindId, axiosFindPwd } from "../../api/user/find";

const FindPasswordForm = () => {
  // 이메일, 비밀번호 제출
  const navigate = useNavigate();

  // 사용자한테 아이디/비밀번호를 입력 받고
  // 백에 보내줄 payload
  const [payload, setPayload] = useState({
    email: "",
    username: "",
  });

  // 오류체크
  const [validate, setValidate] = useState({
    email: true,
    username: true,
    first: false,
  });

  // 오류 메세지
  const [msg, setMsg] = useState({
    email: "",
    username: "",
  });

  // 입력폼에서 데이터가 바뀔때마다 payload의 데이터 최신화
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });

    if (e.target.id === "email") {
      if (e.target.value === "") {
        setMsg({ ...msg, email: "이메일을 입력해주세요." });
        setValidate({ ...validate, email: false });
      } else if (validateEmail(e.target.value)) {
        setMsg({ ...msg, email: "" });
        setValidate({ ...validate, email: true, first: true });
      } else {
        setMsg({ ...msg, email: "올바른 이메일 형식이 아닙니다." });
        setValidate({ ...validate, email: false, first: true });
      }
    } else if (e.target.id === "username") {
      if (e.target.value === "") {
        setMsg({ ...msg, username: "아이디를 입력해주세요." });
        setValidate({ ...validate, username: false });
      } else {
        setMsg({ ...msg, username: "" });
        setValidate({ ...validate, username: true, first: true });
      }
    }
  };

  const [reset, setReset] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (axiosFindId(payload)) {
      setReset(true);
    }
  };

  const handleLoginClick = async (event) => {
    navigate("/login");
  };

  return !reset ? (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, width: 600 }}>
      <TextField
        error={!validate.email}
        margin="normal"
        required
        fullWidth
        id="email"
        label="이메일 주소"
        name="email"
        autoComplete="on"
        autoFocus
        onChange={handleChange}
      />
      {!validate.email ? (
        <Grid item xs={12}>
          <span style={{ color: "red" }}>{msg.email}</span>
        </Grid>
      ) : null}
      <TextField
        error={!validate.username}
        margin="normal"
        required
        fullWidth
        name="username"
        label="아이디"
        id="username"
        autoComplete="on"
        onChange={handleChange}
      />
      {!validate.username ? (
        <Grid item xs={12}>
          <span style={{ color: "red" }}>{msg.username}</span>
        </Grid>
      ) : null}
      <Button
        disabled={!(validate.email && validate.username && validate.first)}
        onClick={handleSubmit}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        비밀번호 초기화하기
      </Button>
    </Box>
  ) : (
    <Box component="form" onSubmit={handleSubmit} noValidate size="sm" sx={{ mt: 3, width: 600 }}>
      <h3 style={{ textAlign: "center", fontWeight: "normal" }}>
        회원가입 시 등록한 이메일로 초기화된 비밀번호를 보냈습니다.
      </h3>
      <Button onClick={handleLoginClick} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        로그인 페이지로 이동
      </Button>
    </Box>
  );
};

export default FindPasswordForm;
