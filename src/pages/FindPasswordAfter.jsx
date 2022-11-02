import React, { useNavigate } from "react";
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, Typography } from "@mui/material";

const FindPasswordAfter = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/login");
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
          비밀번호 찾기
        </Typography>
        <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          로그인 화면으로 돌아가기
        </Button>
      </Box>
    </Container>
  );
};

export default FindPasswordAfter;
