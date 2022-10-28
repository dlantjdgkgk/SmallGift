import React from "react";
import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import ChangePwdForm from "../../components/change/ChangePwdForm";

const ChangePwd = () => {
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
          비밀번호 변경하기
        </Typography>
        <ChangePwdForm />
      </Box>
    </Container>
  );
};

export default ChangePwd;
