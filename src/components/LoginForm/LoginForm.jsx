import React, { useState, useEffect } from "react";
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
import { axiosLogInUser } from "../../api/user/logIn";

const LogInForm = () => {
  // 이메일, 비밀번호 제출
  const dispatch = useDispatch();
  const [cookies, setCookies, removeCookies] = useCookies([]);
  const navigate = useNavigate();

  // 사용자한테 아이디/비밀번호를 입력 받고
  // 백에 보내줄 payload
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  // 오류체크
  const [validate, setValidate] = useState({
    username: true,
    password: true,
    first: false,
  });

  // 오류 메세지
  const [msg, setMsg] = useState({
    username: "",
    password: "",
  });

  // 입력폼에서 데이터가 바뀔때마다 payload의 데이터 최신화
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });

    if (e.target.id === "username") {
      if (e.target.value === "") {
        setMsg({ ...msg, username: "아이디를 입력해주세요." });
        setValidate({ ...validate, username: false });
      } else {
        setMsg({ ...msg, username: "" });
        setValidate({ ...validate, username: true, first: true });
      }
    } else if (e.target.id === "password") {
      if (e.target.value === "") {
        setMsg({ ...msg, password: "비밀번호를 입력해주세요." });
        setValidate({ ...validate, password: false });
      } else {
        setMsg({ ...msg, password: "" });
        setValidate({ ...validate, password: true, first: true });
      }
    }
  };

  // 아이디 저장 여부 변수 (스테이트로 저장)
  const [isRemember, setIsRemember] = useState(false);

  // 아이디 저장 여부 확인하는 메서드
  const checkRemember = (e) => {
    setIsRemember(e.target.checked);
    if (e.target.checked) {
      setCookies("rememberUsername", payload.username);
    } else {
      removeCookies("rememberUsername");
    }
  };

  useEffect(() => {
    if (cookies.rememberUsername !== undefined) {
      setPayload({ ...payload, username: cookies.rememberUsername });
      setIsRemember(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // api 연결 잘 되면 이걸로 사용
    // if (axiosLogInUser(payload, setCookies)) {
    //   window.location.href = "/";
    // }

    let expire = new Date().getTime() + 600 * 1000;

    window.localStorage.setItem("accessToken", 1);
    window.localStorage.setItem("expireAccessToken", expire);
    // 원래는 api에서 처리되는 것들

    window.location.href = "/";
    // 위에 코드는 삭제할것
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <TextField
          error={!validate.username}
          margin="normal"
          required
          fullWidth
          id="username"
          label="아이디"
          name="username"
          autoComplete="on"
          autoFocus
          onChange={handleChange}
        />
        {!validate.username ? (
          <Grid item xs={12}>
            <span style={{ color: "red" }}>{msg.username}</span>
          </Grid>
        ) : null}
        <TextField
          error={!validate.password}
          margin="normal"
          required
          fullWidth
          name="password"
          type="password"
          label="비밀번호"
          id="password"
          autoComplete="on"
          onChange={handleChange}
        />
        {!validate.password ? (
          <Grid item xs={12}>
            <span style={{ color: "red" }}>{msg.password}</span>
          </Grid>
        ) : null}

        <FormControlLabel
          control={<Checkbox onChange={checkRemember} value="remember" color="primary" />}
          label="아이디 저장"
        />
        <Button
          disabled={!(validate.username && validate.password && validate.first)}
          onClick={handleSubmit}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          로그인
        </Button>
      </Grid>
    </Box>
  );
};

export default LogInForm;
