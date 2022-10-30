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
import { axios } from "axios";
import { axiosChangePwd } from "../../api/user/change";
import { validatePassword, validateRePassword } from "../../utils/validationUtil";
import { useCookies } from "react-cookie";

const ChangePwdForm = () => {
  // 이메일, 비밀번호 제출
  const navigate = useNavigate();
  const [cookies] = useCookies([]);

  // 사용자한테 아이디/비밀번호를 입력 받고
  // 백에 보내줄 payload
  const [payload, setPayload] = useState({
    accessToken: cookies.token,
    newPassword: "",
    reNewPassword: "",
    password: "",
  });

  // 오류체크
  const [validate, setValidate] = useState({
    newPassword: true,
    reNewPassword: true,
    password: true,
    first: false,
  });

  // 오류 메세지
  const [msg, setMsg] = useState({
    newPassword: "",
    reNewPassword: "",
    password: "",
  });

  // 입력폼에서 데이터가 바뀔때마다 payload의 데이터 최신화
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });

    if (e.target.id === "newPassword") {
      if (validatePassword(e.target.value)) {
        setMsg({ ...msg, newPassword: "" });
        setValidate({ ...validate, newPassword: true });
      } else {
        setMsg({ ...msg, newPassword: "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요." });
        setValidate({ ...validate, newPassword: false });
      }
    } else if (e.target.id === "reNewPassword") {
      if (validateRePassword(payload.newPassword, e.target.value)) {
        setMsg({ ...msg, reNewPassword: "" });
        setValidate({ ...validate, reNewPassword: true });
      } else {
        setMsg({ ...msg, reNewPassword: "새로운 비밀번호와 일치하지 않습니다." });
        setValidate({ ...validate, reNewPassword: false });
      }
    }
  };

  const [changed, setChanged] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (axiosChangePwd(payload)) {
      alert("비밀번호 변경을 성공했습니다.");
      navigate("/");
    } else {
      setMsg({ ...msg, password: "비밀번호가 일치하지 않습니다." });
      setValidate({ ...validate, password: false });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, width: 600 }}>
      <TextField
        error={!validate.password}
        margin="normal"
        required
        fullWidth
        id="password"
        label="비밀번호"
        name="password"
        autoComplete="on"
        autoFocus
        onChange={handleChange}
      />
      {!validate.password ? (
        <Grid item xs={12}>
          <span style={{ color: "red" }}>{msg.password}</span>
        </Grid>
      ) : null}

      <TextField
        error={!validate.newPassword}
        margin="normal"
        required
        fullWidth
        id="newPassword"
        label="새 비밀번호"
        name="newPassword"
        autoComplete="on"
        autoFocus
        onChange={handleChange}
      />
      {!validate.newPassword ? (
        <Grid item xs={12}>
          <span style={{ color: "red" }}>{msg.newPassword}</span>
        </Grid>
      ) : null}
      <TextField
        error={!validate.reNewPassword}
        margin="normal"
        required
        fullWidth
        id="reNewPassword"
        label="새 비밀번호 재입력"
        name="reNewPassword"
        autoComplete="on"
        autoFocus
        onChange={handleChange}
      />
      {!validate.reNewPassword ? (
        <Grid item xs={12}>
          <span style={{ color: "red" }}>{msg.reNewPassword}</span>
        </Grid>
      ) : null}

      <Button
        disabled={!(validate.password && validate.newPassword && validate.reNewPassword && validate.first)}
        onClick={handleSubmit}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        비밀번호 변경하기
      </Button>
    </Box>
  );
};

export default ChangePwdForm;
