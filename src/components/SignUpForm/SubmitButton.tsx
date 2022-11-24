import Button, { type ButtonProps } from "@mui/material/Button";
import { axiosSignUpUser } from "api/user/signUp";
import { useNavigate } from "react-router";
import { useSubmitValid } from "./SubmitValidContext";
import type { PayloadType } from "./types";

const SubmitButton: React.FC<ButtonProps & { payload: PayloadType }> = ({ payload, ...props }) => {
  const navigate = useNavigate();
  const { valids } = useSubmitValid();
  console.log(payload);

  const handleSubmit: React.UIEventHandler = () => {
    (axiosSignUpUser({ role: "ROLE_USER", ...payload }) as unknown as Promise<{ status: number }>).then((res) => {
      if (res.status === 200) navigate("/login");
    });
  };

  return (
    <Button onClick={handleSubmit} disabled={Object.values(valids).some((e) => !e)} {...props}>
      회원가입
    </Button>
  );
};

export default SubmitButton;
