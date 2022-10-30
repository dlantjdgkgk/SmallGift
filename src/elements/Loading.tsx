import { Backdrop, CircularProgress } from "@mui/material";

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <Backdrop sx={{ zIndex: 5 }} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
