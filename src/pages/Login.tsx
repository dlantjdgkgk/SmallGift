import { Avatar, Box, Grid, Link, Typography, Container, CssBaseline } from "@mui/material";
import kakaoImg from "assets/img/kakao_oauth.png";
import * as Styled from "./style";
import LoginForm from "components/LoginForm/LoginForm";
import { kakaOauthUrl } from "utils/kakaoOAuthUtil";

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
          marginLeft: 2,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <LoginForm />

        <Grid container sx={{ marginLeft: -3 }}>
          <Grid item xs>
            <Link href="/find/ID" variant="body2">
              <span>아이디</span>
            </Link>
            <span>/</span>
            <Link href="/find/password" variant="body2">
              <span>비밀번호 찾기</span>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              회원가입
            </Link>
          </Grid>
        </Grid>
        <Styled.Oauths>
          <a href={kakaOauthUrl}>
            <img src={kakaoImg} alt="kakao" />
          </a>
        </Styled.Oauths>
      </Box>
    </Container>
  );
};

export default LogIn;
