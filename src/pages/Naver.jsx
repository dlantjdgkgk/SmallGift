import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ReactLoading from "react-loading";
import { kakaoLogIn } from "../redux/_action/user_action";
import { LoaderWrap } from "./style";
import { axiosNaverLogin } from "../api/oAuth/naverOAuth";

const Naver = (props) => {
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies([]);
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    code: "",
    username: "",
    password: "",
  });

  useEffect(async () => {
    let params = new URL(document.URL).searchParams;
    let newCode = params.get("code");
    let newState = params.get("state");
    console.log(newCode);
    console.log(newState);

    setPayload({ ...payload, code: newCode });

    axiosNaverLogin(newCode).then((response) => {
      console.log(response);
      // if (response.payload.success) {
      //   navigate("/");
      //   setCookies("token", `Bearer ${response?.payload?.data?.token}`);
      // } else {
      //   console.log(response.payload.msg);
      // }
    });
  }, []);

  return (
    <LoaderWrap>
      <ReactLoading type="spin" color="#A593E0" />
    </LoaderWrap>
  );
};

export default Naver;