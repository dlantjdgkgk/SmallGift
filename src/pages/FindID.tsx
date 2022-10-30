import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import FindIDForm from "../components/FindId/FindIdForm";

const FindID = () => {
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
          아이디 찾기
        </Typography>
        <FindIDForm />
      </Box>
    </Container>
  );
};

export default FindID;
