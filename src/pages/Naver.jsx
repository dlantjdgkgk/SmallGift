import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { kakaoLogIn } from "../redux/_action/user_action";

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
    console.log(newCode);
    setPayload({ ...payload, code: newCode });

    dispatch(kakaoLogIn(payload)).then((response) => {
      if (response.payload.success) {
        navigate("/");
        setCookies("token", `Bearer ${response?.payload?.data?.token}`);
      } else {
        console.log(response.payload.msg);
      }
    });
  }, []);

  return <p>잠시만 기다려 주세요! 로그인 중입니다.</p>;
};

export default Naver;
