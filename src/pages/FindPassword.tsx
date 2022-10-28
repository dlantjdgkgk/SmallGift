import React from "react";
import { Avatar, Box, Container, CssBaseline, Grid, Link, Typography } from "@mui/material";
import FindPasswordForm from "../../../components/find/findPassword/FindPasswordForm";

const FindPassword = () => {
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
        <FindPasswordForm />
      </Box>
    </Container>
  );
};

export default FindPassword;
